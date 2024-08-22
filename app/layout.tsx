/* eslint-disable @next/next/no-head-element */

import Navbar from "@/components/navbar";
import Web3ModalProvider from "@/components/web3-provider";
import { config } from "@/lib/config";
import { Metadata } from "next";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html>
      <head></head>
      <body>
        <Web3ModalProvider initialState={initialState}>
          <div className="mx-auto">
            <Navbar />
            {children}
          </div>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
