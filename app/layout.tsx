"use client";
/* eslint-disable @next/next/no-head-element */

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "../styles/globals.css";
import "../styles/tailwind.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, publicClient } = configureChains(
    [mainnet],
    [
      alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "",
      }),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Wagmi",
    projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "",
    chains,
  });

  const config = createConfig({
    autoConnect: true,
    publicClient,
    connectors,
  });

  return (
    <html>
      <head></head>
      <body>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
            <div className="mx-auto">
              <Navbar />
              {children}
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
