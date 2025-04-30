import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#5d21cf",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luchian Andrei - full stack developer",
  description: "Luchian Andrei`s portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.className}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
