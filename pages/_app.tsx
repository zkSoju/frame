import "../styles/globals.css";
import "../styles/tailwind.css";
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import { providers } from "ethers";
import { AnimatePresence } from "framer-motion";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = process.env.INFURA_ID;
const alchemyId = process.env.ALCHEMY_ID;
const chainId = process.env.CHAIN_ID;
const contractAddress = process.env.CONTRACT_ADDRESS;

// Chains for connectors to support
// Limit support to Rinkeby
const chains = chainId
  ? [defaultChains.find((x) => x.id === parseInt(chainId))]
  : defaultChains;

interface WagmiProps {
  chainId: number;
}

// Set up connectors
const connectors = ({ chainId }: WagmiProps) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: "Wagmi App",
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

// Optional provider, defaults to getDefaultProvider(), which falls back to ether.js shared API keys
// Reccomended to provide API key to minimize disruptions
const provider = ({ chainId }: WagmiProps) =>
  new providers.InfuraProvider(chainId, infuraId);

function MyApp({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
