import GuestSection from "@/components/ui/navbar/GuestSection";
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar authComponent={<GuestSection />} />
      {children}
    </>
  );
}
