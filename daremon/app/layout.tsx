import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import ETSRadioWidget from "@/components/ETSRadioWidget";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Daremon – Bureau voor Systeem- en Narratieve Analyse",
  description:
    "Analyse van techniek, instituties en narratieven met een sobere, systemische benadering."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-text-main`}>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8">{children}</main>
        <Footer />
        <Toaster />
        <ETSRadioWidget />
      </body>
    </html>
  );
}