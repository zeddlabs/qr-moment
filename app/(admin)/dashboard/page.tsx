"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <Link href='/new' className='btn btn-primary'>
          QR Baru
        </Link>
      </div>
      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Pelanggan</th>
              <th>Link Gallery</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <a href=''>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, neque.
                </a>
              </td>
              <td>
                <button className='btn btn-info text-white'>Lihat</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
