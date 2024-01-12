import type { Metadata } from "next";
import { alumniSans, redHatDisplay, syncopate } from "./fonts";
import "./globals.css";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Bloodline Chronicles",
  description:
    "Immerse Yourself in the Ultimate Gaming Experience: Command Your Destiny with our State-of-the-Art User Interface!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${alumniSans.variable} ${syncopate.variable}`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
