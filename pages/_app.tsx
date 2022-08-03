import "../styles/globals.css";
import "../styles/tailwind.css";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { chain, createClient, WagmiConfig } from "wagmi";
import { providers } from "ethers";
import { AnimatePresence } from "framer-motion";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider mode="light">
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ConnectKitProvider>{" "}
    </WagmiConfig>
  );
}

export default MyApp;
