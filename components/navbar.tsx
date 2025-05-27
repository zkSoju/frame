"use client";

import THJLoginButton from "@/components/thj-login-button";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full">
      <div className="flex w-full items-center justify-between border-b border-white/5 px-8 py-4">
        <p className="text-base text-white">frame</p>
        <THJLoginButton />
      </div>
    </div>
  );
};

export default Navbar;
