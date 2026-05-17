import localFont from "next/font/local";

export const myCustomFont = localFont({
  src: "../public/fonts/soria-font.ttf", // Path relative to this file
  variable: "--font-custom-restaurant", // Custom CSS variable name
  display: "swap",
});
