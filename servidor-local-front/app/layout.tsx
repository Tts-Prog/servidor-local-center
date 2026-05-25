import type { Metadata } from "next";
<<<<<<< HEAD
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ApolloWrapper } from "@/lib/apollo";
=======
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
>>>>>>> dev

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<<<<<<< HEAD

        <ApolloWrapper>
          <Toaster position="top-right" richColors expand/>
          {children}
        </ApolloWrapper>
        
        </body>
=======
        <Toaster position="top-right" richColors expand />
        {children}
      </body>
>>>>>>> dev
    </html>
  );
}
