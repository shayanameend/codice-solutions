import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Mono } from "next/font/google";
import { Header } from "@/components";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Home | Dev Nova",
  description: "Dev Nova",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={spaceMono.style}>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
