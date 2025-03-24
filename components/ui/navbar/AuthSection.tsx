"use client";

import { useSession, signOut } from "next-auth/react";

export default function AuthSection() {
  const { status } = useSession();

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

  return (
    <a className='btn' href='https://id.shp.ee/tvuRgVe' target='_blank'>
      Pesan QR Moment
    </a>
  );
}
