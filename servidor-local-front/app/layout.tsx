import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
<<<<<<< HEAD
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
=======

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
>>>>>>> 85edafc958c02735ca774ea5fdb1e18871f1010b

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servidor Local",
  description: "Marketplace for local services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" richColors expand />
        {children}
      </body>
    </html>
  );
}
