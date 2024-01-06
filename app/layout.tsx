import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://lazizbe.uz/"
  ),
  title: "Lasiz Portfolio",
  description: "Developer Portfolio By Lazizbek Tojiboyev",
  keywords: ["Developer", "Lazizbekdev", "Portfolio", "Developer Portflio", "Lazizbek Tojiboyev", "Lazizbek", "Laziz", "Lasiz"],
  openGraph: {
    title: "Lazizbek Tojiboyev",
    description: "FrontEnd developer",
    images: "/graph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
