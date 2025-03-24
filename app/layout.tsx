import type { Metadata } from "next";
import { Geist, Geist_Mono, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  variable: "--font-reenie-beanie",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Moment",
  description: "Simpan setiap momen berharga dalam bentuk QR Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${reenieBeanie.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
