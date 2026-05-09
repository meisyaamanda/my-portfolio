import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/page";
import Footer from "./footer/footer";
import ScrollToTop from "./components/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-gray-900 text-gray-300 text-lg overflow-x-hidden overflow-y-scroll flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
