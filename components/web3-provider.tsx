"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { berachain } from "viem/chains";
import { createConfig, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [berachain],
  multiInjectedProviderDiscovery: false,
  transports: {
    [berachain.id]: http(),
  },
});

export default function Web3Provider({
  children,
}: {
  children: React.ReactNode;
}) {
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
          ZeroDevSmartWalletConnectors as any,
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
