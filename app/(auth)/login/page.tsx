"use client";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result!.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className='flex flex-col flex-1 lg:w-1/2 w-full'>
      <div className='flex flex-col justify-center flex-1 w-full max-w-md mx-auto'>
        <div>
          <div className='mb-5 sm:mb-8'>
            <h1 className='mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md'>
              Sign In
            </h1>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Enter your email and password to sign in!
            </p>
            {error && <p className='text-sm text-error-500 mt-2'>{error}</p>}
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='space-y-6'>
                <div>
                  <Label>
                    Email <span className='text-error-500'>*</span>{" "}
                  </Label>
                  <Input
                    placeholder='info@gmail.com'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className='text-error-500'>*</span>{" "}
                  </Label>
                  <div className='relative'>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Button
                    className='w-full bg-primary cursor-pointer'
                    size='sm'
                  >
                    {loading ? "Loading..." : "Sign In"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
