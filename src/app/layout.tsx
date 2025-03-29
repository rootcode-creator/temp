import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Engineer - Technology Blog",
  description: "A blog about technology, gadgets, and tech tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
