import { Red_Hat_Display, Alumni_Sans, Syncopate } from "next/font/google";

export const redHatDisplay = Red_Hat_Display({
  weight: ["400", "500", "700", "900"],
  variable: "--font-Red_Hat_Display",
  subsets: ["latin"],
  display: "swap",
});

export const alumniSans = Alumni_Sans({
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-Alumni_Sans",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const syncopate = Syncopate({
  weight: ["400"],
  variable: "--font-Syncopate",
  subsets: ["latin"],
  display: "swap",
});
