import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "../providers/Providers";

export const metadata: Metadata = {
  title: "HTOES FILM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="">
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
