"use client";

import { Button } from "@/components/ui/button";
import { useLogin } from "@/lib/hooks/use-login";

const Navbar = () => {
  const { address, login } = useLogin();

  return (
    <div className="fixed z-50 w-full px-48">
      <div className="flex w-full items-center justify-between border-b border-white/5 px-8 py-4">
        <p className="text-base text-white">frame</p>
        <Button variant={"outline"} onClick={login}>
          Login with THJ
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
