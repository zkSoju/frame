/* eslint-disable @next/next/no-head-element */

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Web3Provider from "@/components/web3-provider";
import { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import "../styles/tailwind.css";

export const metadata: Metadata = {
  // metadataBase: new URL(""),
  title: "",
  description: "",
  openGraph: {
    type: "website",
    title: "",
    description: "",
    images: [
      {
        url: "https://res.cloudinary.com/honeyjar/image/upload/v1677023883/THJ_WebBanner.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const switzer = localFont({
  src: "../assets/Switzer.ttf",
  variable: "--font-switzer",
});

const clashDisplay = localFont({
  src: "../assets/ClashDisplay.ttf",
  variable: "--font-clash-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${switzer.variable} ${clashDisplay.variable}`}
    >
      <head></head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider>
            <div className="mx-auto">
              <Navbar />
              {children}
            </div>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
