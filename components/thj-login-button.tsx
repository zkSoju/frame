import { Button } from "@/components/ui/button";
import { useLogin } from "@/lib/hooks/use-login";
import { shortenAddress } from "@/lib/utils";
import Image from "next/image";

export default function THJLoginButton() {
  const { address, login, logout, ensName } = useLogin();

  return (
    <Button
      variant={"outline"}
      className="relative cursor-pointer border-0 bg-radial-[at_50%_75%] from-[#F4C10B] via-[#F4C10B]/50 to-[#F4C10B]/10 p-[1px]"
      onClick={address ? logout : login}
    >
      <div className="bg-background/90 relative h-full w-full rounded-md px-4 py-2">
        {!address ? (
          <div className="font-clash-display flex items-center justify-center gap-2">
            <Image src="/thj-logo.png" alt="THJ" width={16} height={16} /> Login
            with THJ
          </div>
        ) : (
          <div className="font-clash-display flex h-full w-full items-center justify-center gap-2">
            <div className="size-4 rounded-full border border-[#F4C10B]" />
            {ensName ? ensName : shortenAddress(address)}
          </div>
        )}
      </div>
    </Button>
  );
}
