import Image from "next/image";
import React from "react";

export default function Qr() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-7xl text-center mb-4 font-beanie'>Ruang Kenangan</h1>
      <p className='text-center mb-12'>
        Setiap foto di sini adalah bagian dari perjalanan, penuh cerita dan
        emosi yang tak tergantikan.
      </p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782278/qr-moment/IMG_2807_12_11zon_d1pqha.jpg'
              width='232'
              height='0'
              alt='Image 01'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782278/qr-moment/15151187_1898813290346909_388630812_n_1_yukqhu.jpg'
              width='232'
              height='0'
              alt='Image 02'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782277/qr-moment/Beatifuel_dragon_fly_1_u1d8tc.jpg'
              width='232'
              height='0'
              alt='Image 03'
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782276/qr-moment/Lovely_orangutan_bukit_lawang_f7f4g9.jpg'
              width='232'
              height='0'
              alt='Image 04'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782275/qr-moment/image-asset_5_1_qgpv3i.jpg'
              width='232'
              height='0'
              alt='Image 05'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782148/qr-moment/The_entrence_to_gunung_leuser_national_park_uldelt.jpg'
              width='232'
              height='0'
              alt='Image 06'
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782147/qr-moment/breakfast_uaftnj.jpg'
              width='232'
              height='0'
              alt='Image 07'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782148/qr-moment/DSC_0547_nvscxy.jpg'
              width='232'
              height='0'
              alt='Image 08'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782148/qr-moment/bird_hnxq7p.jpg'
              width='232'
              height='0'
              alt='Image 09'
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782148/qr-moment/orangutan_hzp5p6.jpg'
              width='232'
              height='0'
              alt='Image 10'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782147/qr-moment/fly_ie82oh.jpg'
              width='232'
              height='0'
              alt='Image 11'
            />
          </div>
          <div>
            <Image
              className='w-full rounded-xl shadow h-full object-cover'
              src='https://res.cloudinary.com/dzlmzfdwx/image/upload/v1742782147/qr-moment/hitam_ynflrd.jpg'
              width='232'
              height='0'
              alt='Image 12'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
