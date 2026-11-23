import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/footer/page";
import Header from "./components/header/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ideal Hajj & Umrah",
  description: "Your trusted partner for Hajj & Umrah journeys.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080f0a]">
      <Header/>
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}