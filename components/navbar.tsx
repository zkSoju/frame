"use client";

import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();

  return (
    <div className="fixed z-50 w-full px-48">
      <div className="flex w-full items-center justify-between border-b border-white/5 px-8 py-4">
        <p className="text-base text-white">frame</p>
        <DynamicWidget />
      </div>
    </div>
  );
};

export default Navbar;
