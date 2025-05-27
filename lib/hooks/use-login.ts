import { PRIMARY_CHAIN } from "@/constants/chain";
import {
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";
import { useEnsName } from "wagmi";

// Helper hook for Dynamic authentication (use instead of Wagmi connect wallet)
export const useLogin = () => {
  const { primaryWallet, handleLogOut, setShowAuthFlow, user, sdkHasLoaded } =
    useDynamicContext();

  const userWallets = useUserWallets();

  const {
    data: beranameData,
  } = useEnsName({
    address: primaryWallet?.address as `0x${string}`,
    chainId: PRIMARY_CHAIN.id,
  });

  return {
    address: primaryWallet?.address ?? "",
    logout: handleLogOut,
    login: () => setShowAuthFlow(true),
    user,
    sdkHasLoaded,
    ensName: beranameData,
  };
};
