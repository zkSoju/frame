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
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URI,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={client}>
        <ConnectKitProvider mode="light">
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </ConnectKitProvider>
      </WagmiConfig>
    </ApolloProvider>
  );
}

export default MyApp;
