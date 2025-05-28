import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import WalletSidebar from "@/components/wallet-sidebar";
import { useLogin } from "@/lib/hooks/use-login";
import { shortenAddress } from "@/lib/utils";
import Image from "next/image";

export default function THJLoginButton() {
  const { address, login, logout, ensName } = useLogin();

  // If not connected, show login button without sheet
  if (!address) {
    return (
      <Button
        variant={"outline"}
        className="relative cursor-pointer border-0 bg-radial-[at_50%_75%] from-[#F4C10B] via-[#F4C10B]/50 to-[#F4C10B]/10 p-[1px]"
        onClick={login}
      >
        <div className="bg-background/90 relative h-full w-full rounded-md px-4 py-2">
          <div className="font-clash-display flex items-center justify-center gap-2">
            <Image src="/thj-logo.png" alt="THJ" width={16} height={16} /> Log
            in
          </div>
        </div>
      </Button>
    );
  }

  // If connected, show wallet button with sidebar sheet
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          className="relative cursor-pointer border-0 bg-radial-[at_50%_75%] from-[#F4C10B] via-[#F4C10B]/50 to-[#F4C10B]/10 p-[1px]"
        >
          <div className="bg-background/90 relative h-full w-full rounded-md px-4 py-2">
            <div className="font-clash-display flex h-full w-full items-center justify-center gap-2">
              <div className="size-4 rounded-full border border-[#F4C10B]" />
              {ensName ? ensName : shortenAddress(address)}
            </div>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="!inset-y-2 !right-2 !h-[calc(100vh-1rem)] w-[400px] overflow-hidden rounded-lg border border-white/10 bg-black/95 p-0 shadow-2xl sm:w-[400px]">
        <WalletSidebar>
          {/* Logout button at the bottom */}
          <div className="absolute right-0 bottom-0 left-0 z-10 border-t border-white/10 bg-black p-6">
            <Button
              onClick={logout}
              variant="outline"
              className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              Disconnect Wallet
            </Button>
          </div>
        </WalletSidebar>
      </SheetContent>
    </Sheet>
  );
}
