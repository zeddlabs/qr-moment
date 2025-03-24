import React from "react";

export default function Navbar({
  authComponent,
}: {
  authComponent: React.ReactNode;
}) {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <a className='btn btn-ghost text-xl'>QR Moment</a>
      </div>
      <div className='navbar-end'>{authComponent}</div>
    </div>
  );
}
