"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { connectWallet } = usePrivy();
  const { address } = useAccount();

  return (
    <div className="fixed z-50 w-full px-48">
      <div className="flex w-full items-center justify-between border-b border-white/5 px-8 py-4">
        <p className="text-base text-white">wagmi</p>
        {address ? (
          <p className="text-white">{address}</p>
        ) : (
          <button className="text-white" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
