import { Network } from "alchemy-sdk";

export const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

export const ALCHEMY_NETWORK = Network.BERACHAIN_MAINNET;
