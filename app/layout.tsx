import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const paragraphFont = Inter({
  subsets: ["latin"],
  variable: "--font-paragraph",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shopmate - A single page E-commerce app",
  description:
    "A simple single page E-commerce app built with Next.js, Redux Toolkit, and Material UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${paragraphFont.variable}`}
    >
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
