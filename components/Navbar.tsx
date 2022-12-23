"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full px-48">
      <div className="flex w-full items-center justify-between border-b border-white/5 px-8 py-4">
        <p className="text-base text-white">wagmi</p>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
