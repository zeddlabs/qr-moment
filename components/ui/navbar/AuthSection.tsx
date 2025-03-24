"use client";

import { useSession, signOut } from "next-auth/react";

export default function AuthSection() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className='btn btn-error text-white'
        >
          Logout
        </button>
      </>
    );
  }

  return <a className='btn'>Pesan QR Moment</a>;
}
