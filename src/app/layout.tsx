import type { Metadata } from "next";
import {Source_Sans_3} from "next/font/google";
import "./globals.css";
import { Open_Sans } from "next/font/google"

export const open_sans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "700"]
})

const font = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "DEMO - Página de Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
