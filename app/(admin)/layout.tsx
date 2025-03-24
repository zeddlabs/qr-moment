"use client";

import AuthSection from "@/components/ui/navbar/AuthSection";
import Navbar from "@/components/ui/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Navbar authComponent={<AuthSection />} />
      <main className='mt-12 container mx-auto px-4'>{children}</main>
    </SessionProvider>
  );
}
