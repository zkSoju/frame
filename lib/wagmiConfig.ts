import { mainnet, sepolia } from "viem/chains";
import { http } from "wagmi";

import { createConfig } from "@privy-io/wagmi";

// Replace these with your app's chains

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
