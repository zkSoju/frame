"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import {
  DynamicContextProvider
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { berachainTestnetbArtio, mainnet } from "viem/chains";
import { createConfig, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [berachainTestnetbArtio, mainnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [berachainTestnetbArtio.id]: http(),
  },
});

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  // return (
  //   <PrivyProvider appId="clw5emtfa02z92xyp21gry0cw" config={privyConfig}>
  //     <QueryClientProvider client={queryClient}>
  //       <WagmiProvider config={config}>{children}</WagmiProvider>
  //     </QueryClientProvider>
  //   </PrivyProvider>
  // );

  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
        initialAuthenticationMode: "connect-and-sign",
        walletConnectors: [
          // SafeEvmWalletConnectors,
          EthereumWalletConnectors,
        ],
      
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
