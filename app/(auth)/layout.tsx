import GridShape from "@/components/common/grid-shape";

import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0'>
      <div className='relative flex lg:flex-row w-full h-screen justify-center flex-col  dark:bg-gray-900 sm:p-0'>
        {children}
        <div className='lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden'>
          <div className='relative items-center justify-center  flex z-1'>
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className='flex flex-col items-center max-w-xs'>
              <Link href='/' className='block mb-4 font-bold'>
                QR Moment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
