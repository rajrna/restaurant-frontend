import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { myCustomFont } from "./fonts";
import { cn } from "@/lib/utils";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HK's Fastfood",
  description:
    "Order the tastiest meals from Pokhara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html
    //   lang="en"
    //   className={cn(
    //     myCustomFont.variable,
    //     "font-sans",
    //     figtree.variable,
    //   )}
    // >
    <html
      lang="en"
      className={`${myCustomFont.variable}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
