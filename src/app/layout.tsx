import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Sumit Kumar | Developer & Writer",
  description: "Personal portfolio and blog of Sumit Kumar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black"></div>
        <Header />
        <main className="flex-grow pt-24 pb-12 px-4 container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
