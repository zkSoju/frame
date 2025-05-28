import { PRIMARY_CHAIN } from "@/constants/chain";
import {
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react";
import { useEnsName } from "wagmi";

// Helper hook for Dynamic authentication (use instead of Wagmi connect wallet)
export const useLogin = () => {
  const { primaryWallet, handleLogOut, setShowAuthFlow, user, sdkHasLoaded } =
    useDynamicContext();

  const userWallets = useUserWallets();

  const embeddedWallet = userWallets.find((wallet) => wallet.key === "zerodev");

  useEffect(() => {
    if (embeddedWallet) {
      setShowAuthFlow(true);
    }
  }, [embeddedWallet]);

  const { data: beranameData } = useEnsName({
    address: primaryWallet?.address as `0x${string}`,
    chainId: PRIMARY_CHAIN.id,
  });

  return {
    address: embeddedWallet?.address ?? primaryWallet?.address ?? "",
    logout: handleLogOut,
    login: () => setShowAuthFlow(true),
    user,
    sdkHasLoaded,
    ensName: beranameData,
  };
};
