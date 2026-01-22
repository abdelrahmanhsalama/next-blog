import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next-Blog",
  description: "Blog Viewer, built using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-[#090d1f] dark:text-white">
      <body className={`${inter.variable} antialiased mx-auto`}>
        {children}
      </body>
    </html>
  );
}
