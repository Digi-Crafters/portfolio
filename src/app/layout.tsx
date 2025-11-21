import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digi-crafters.vercel.app/'),
  title: "Digi-Crafters",
  description: " A group of skilled developers and designers",
  openGraph: {
    title: "Digi-Crafters",
    description: "Get Your Buisness's Website with Digi-Crafters",
    images: [
      {
        url: "/digicrafters.png",
        width: 1200,
        height: 630,
        alt: "Digit Crafters",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
