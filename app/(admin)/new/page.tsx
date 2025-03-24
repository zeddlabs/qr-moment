"use client";

import { supabaseClient } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewQrPage() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handler untuk preview file yang dipilih
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Buat preview untuk setiap file
    const filePreviewPromises = selectedFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(filePreviewPromises).then((results) => {
      setPreviews(results);
    });
  };

  // Handler untuk membuat gallery dan upload foto
  const onSubmit = async (formData) => {
    if (files.length === 0) {
      alert("Please select at least one photo");
      return;
    }

    setLoading(true);

    try {
      // 1. Buat gallery baru
      const { data: galleryData, error: galleryError } = await supabaseClient
        .from("galleries")
        .insert([{ customer_name: formData.customerName }])
        .select();

      if (galleryError) throw galleryError;

      const galleryId = galleryData[0].id;

      // 2. Upload setiap file ke Cloudinary dan simpan ke Supabase
      const photoPromises = files.map(async (file) => {
        const fileReader = new FileReader();
        const base64Promise = new Promise((resolve) => {
          fileReader.onloadend = () => resolve(fileReader.result);
          fileReader.readAsDataURL(file);
        });

        const base64 = await base64Promise;

        // Upload file ke Cloudinary melalui API route
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: base64 }),
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const cloudinaryData = await response.json();

        // Simpan URL dan public_id ke Supabase (tanpa pesan)
        const { data, error } = await supabaseClient.from("photos").insert([
          {
            gallery_id: galleryId,
            url: cloudinaryData.secure_url,
            cloudinary_id: cloudinaryData.public_id,
            created_at: new Date(),
          },
        ]);

        if (error) throw error;

        return data;
      });

      await Promise.all(photoPromises);

      alert("Gallery created successfully!");
      router.push(`/gallery/${galleryId}`);
    } catch (error) {
      console.error("Error creating gallery:", error);
      alert("Failed to create gallery. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-3xl font-bold'>QR Baru</h1>
        <Link href='/dashboard' className='btn btn-error text-white'>
          Kembali
        </Link>
      </div>
      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-8'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label htmlFor='customerName' className='block mb-1'>
              Customer Name
            </label>
            <input
              id='customerName'
              type='text'
              {...register("customerName", {
                required: "Customer name is required",
              })}
              className='w-full p-2 border rounded-md'
            />
            {errors.customerName && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.customerName.message}
              </p>
            )}
          </div>

          <div className='border-2 border-dashed border-gray-300 p-4 rounded-md'>
            <input
              type='file'
              multiple
              accept='image/*'
              onChange={handleFileChange}
              className='w-full'
            />
            <p className='text-sm text-gray-500 mt-2'>
              Select multiple images to upload
            </p>
          </div>

          {previews.length > 0 && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {previews.map((preview, index) => (
                <div key={index} className='border rounded-md p-4'>
                  <div className='relative h-48 w-full mb-2'>
                    <Image
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-md'
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            type='submit'
            disabled={loading}
            className={`px-4 py-2 rounded-md text-white cursor-pointer ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Creating Gallery..." : "Create Gallery"}
          </button>
        </form>
      </div>
    </div>
  );
}
