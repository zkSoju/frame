/* eslint-disable @next/next/no-head-element */

import Wrapper from "@/components/wrapper";
import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import "../styles/globals.css";
import "../styles/tailwind.css";
import Navbar from "./Navbar";

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
  return (
    <html>
      <head></head>
      <body>
        <Wrapper>
          <div className="mx-auto">
            <Navbar />
            {children}
          </div>
        </Wrapper>
      </body>
    </html>
  );
}
