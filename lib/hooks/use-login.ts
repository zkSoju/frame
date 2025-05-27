import {
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";

// Helper hook for Dynamic authentication (use instead of Wagmi connect wallet)
export const useLogin = () => {
  const { primaryWallet, handleLogOut, setShowAuthFlow, user, sdkHasLoaded } =
    useDynamicContext();

  const userWallets = useUserWallets();

  return {
    address: primaryWallet?.address ?? "",
    logout: handleLogOut,
    login: () => setShowAuthFlow(true),
    user,
    sdkHasLoaded,
  };
};
