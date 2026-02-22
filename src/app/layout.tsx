import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Analytics from "./analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digi-crafters.vercel.app"),
  title: {
    default: "Digi Crafters | Web Development & Design Agency",
    template: "%s | Digi Crafters",
  },
  description:
    "Digi Crafters is a web development and design agency helping businesses build fast, modern, and scalable websites.",

  verification: {
    google: "tZEIXbvD5UYrx3nodRLPoBvTizs8JtiI0uhBxmyLM4M",
  },

  openGraph: {
    title: "Digi Crafters",
    description:
      "Get a modern, high-performance website for your business with Digi Crafters.",
    url: "https://digi-crafters.vercel.app",
    siteName: "Digi Crafters",
    images: [
      {
        url: "/digicrafters.png",
        width: 1200,
        height: 630,
        alt: "Digi Crafters",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
