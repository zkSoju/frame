"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECTS } from "@/constants/projects";
import { useLogin } from "@/lib/hooks/use-login";
import { useTHJNFTs } from "@/lib/hooks/use-thj-nfts";
import useTHJTokens from "@/lib/hooks/use-thj-tokens";
import { formatToken, shortenAddress } from "@/lib/utils";
import {
  ArrowRight,
  Bell,
  ChevronLeft,
  Copy,
  ExternalLink,
  ImageOff,
  Loader2,
  Plus,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "achievement" | "reward" | "system";
  read: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "New Achievement Unlocked",
    description:
      'You have unlocked the "Early Adopter" achievement for being one of the first to join The Honey Jar.',
    timestamp: "2024-03-12T10:00:00Z",
    type: "achievement",
    read: false,
  },
  {
    id: "2",
    title: "Reward Available",
    description: "Claim your 100 HONEYCOMB tokens for holding HJ1 NFT.",
    timestamp: "2024-03-11T15:30:00Z",
    type: "reward",
    read: false,
  },
  {
    id: "3",
    title: "System Update",
    description:
      "The Honey Jar has been updated to v2.0. Check out the new features!",
    timestamp: "2024-03-10T09:15:00Z",
    type: "system",
    read: true,
  },
];

interface DepositDialogProps {
  address: string;
  balance: string;
}

function DepositDialog({ address, balance }: DepositDialogProps) {
  const [amount, setAmount] = useState("");

  const handleClose = () => {
    const closeButton = document.querySelector(
      'button[data-state="open"]',
    ) as HTMLButtonElement;
    closeButton?.click();
  };

  return (
    <DialogContent className="border-white/10 bg-black p-0 text-white">
      <div className="relative flex items-center justify-center border-b border-white/10 p-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 text-white/60 hover:text-white"
          onClick={handleClose}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex flex-col items-center">
          <div className="relative mb-2">
            <Image
              src="/eth-logo.png"
              alt="ETH"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="absolute -right-1 -bottom-1 flex size-5 items-center justify-center rounded-full border-2 border-black bg-white">
              <Plus className="size-3 text-black" />
            </div>
          </div>
          <h2 className="text-xl font-medium">Deposit ETH</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-6 text-center text-white/60">
          Top up your balance from your external wallet or send Base ETH to the
          address below.
        </p>
        <div className="mb-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2">
            <Image
              src="/eth-logo.png"
              alt="ETH"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-sm">{shortenAddress(address)}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-white/60 hover:text-white"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            <Copy className="size-4" />
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-white/60">Amount</span>
              <span className="text-sm text-white/60">
                Balance {balance} ETH
              </span>
            </div>
            <div className="relative">
              <Input
                type="number"
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAmount(e.target.value)
                }
                className="border-white/10 bg-white/5 pr-20 text-xl text-white placeholder:text-white/20"
                placeholder="0"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2">
                <div className="flex items-center gap-2 rounded-lg bg-black px-2 py-1">
                  <Image
                    src="/eth-logo.png"
                    alt="ETH"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <span className="text-sm">ETH</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount("0.001")}
            >
              0.001 ETH
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount("0.01")}
            >
              0.01 ETH
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount("0.1")}
            >
              0.1 ETH
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount(balance)}
            >
              Max
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

interface SendDialogProps {
  balance: string;
}

function SendDialog({ balance }: SendDialogProps) {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleClose = () => {
    const closeButton = document.querySelector(
      'button[data-state="open"]',
    ) as HTMLButtonElement;
    closeButton?.click();
  };

  return (
    <DialogContent className="border-white/10 bg-black p-0 text-white">
      <div className="relative flex items-center justify-center border-b border-white/10 p-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 text-white/60 hover:text-white"
          onClick={handleClose}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <h2 className="text-xl font-medium">Send</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-white/60">To</label>
            <Input
              value={recipient}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRecipient(e.target.value)
              }
              className="border-white/10 bg-white/5 text-white placeholder:text-white/20"
              placeholder="Enter a username or address"
            />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-white/60">Amount</span>
              <span className="text-sm text-white/60">
                Balance {balance} ETH
              </span>
            </div>
            <div className="relative">
              <Input
                type="number"
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAmount(e.target.value)
                }
                className="border-white/10 bg-white/5 pr-20 text-xl text-white placeholder:text-white/20"
                placeholder="0"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2">
                <div className="flex items-center gap-2 rounded-lg bg-black px-2 py-1">
                  <Image
                    src="/eth-logo.png"
                    alt="ETH"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <span className="text-sm">ETH</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount((Number(balance) * 0.1).toString())}
            >
              10%
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount((Number(balance) * 0.25).toString())}
            >
              25%
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount((Number(balance) * 0.5).toString())}
            >
              50%
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setAmount(balance)}
            >
              100%
            </Button>
          </div>
          <Button
            className="w-full bg-white/10 text-white hover:bg-white/20"
            disabled={!amount || !recipient}
          >
            Next
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

export default function WalletSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address, ensName } = useLogin();
  const { tokens } = useTHJTokens();
  const { nfts, isLoading, error } = useTHJNFTs();
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;
  const [showSettings, setShowSettings] = useState(false);

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  const openEtherscan = () => {
    if (address) {
      window.open(`https://etherscan.io/address/${address}`, "_blank");
    }
  };

  if (showSettings) {
    return (
      <>
        {children}
        <div className="flex h-full flex-col">
          {/* Settings Header */}
          <div className="relative border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-clash-display text-2xl text-white">
                Settings
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSettings(false)}
                className="size-8 text-white/60 hover:text-white"
              >
                <Settings className="size-4" />
              </Button>
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-8">
              {/* Account Section */}
              <div>
                <h3 className="mb-4 text-lg font-medium text-white">Account</h3>
                <div className="space-y-6">
                  {/* Username/ENS */}
                  <div>
                    <label className="text-sm text-white/60">Username</label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-white/40">@</span>
                      <span className="text-white">
                        {ensName || shortenAddress(address)}
                      </span>
                    </div>
                  </div>

                  {/* Wallet Address */}
                  <div>
                    <label className="text-sm text-white/60">
                      Wallet Address
                    </label>
                    <div className="mt-1 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-white">
                        {shortenAddress(address)}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={copyAddress}
                          className="size-6 text-white/60 hover:text-white"
                        >
                          <Copy className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={openEtherscan}
                          className="size-6 text-white/60 hover:text-white"
                        >
                          <ExternalLink className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Export Wallet */}
                  <div>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10"
                      onClick={() => {
                        // Implement export wallet functionality
                        console.log("Export wallet");
                      }}
                    >
                      Export Wallet
                    </Button>
                  </div>
                </div>
              </div>

              {/* Notifications Section */}
              <div>
                <h3 className="mb-4 text-lg font-medium text-white">
                  Notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketingEmails"
                      className="mt-1 rounded border-white/10 bg-white/5"
                      defaultChecked
                    />
                    <div>
                      <label htmlFor="marketingEmails" className="text-white">
                        Marketing email notifications
                      </label>
                      <p className="text-sm text-white/60">
                        You will receive updates on new features and promotions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {children}
      <Image
        src={"/thj-glow-logo.png"}
        alt={"THJ Glow Logo"}
        width={96}
        height={96}
        className="absolute top-0 -right-8 object-contain"
      />
      {/* Wallet Header */}
      <div className="relative border-b border-white/10 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="relative flex w-full items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-[#F4C10B]/20"></div>
            <div>
              <h2 className="font-clash-display text-lg text-white">
                {ensName || shortenAddress(address)}
              </h2>
              <p className="text-sm text-white/60">{shortenAddress(address)}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSettings(true)}
            className="size-8 text-white/60 hover:text-white"
          >
            <Settings className="size-4" />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex h-18 flex-col items-start justify-between p-3"
              >
                <Plus className="size-3" />
                <span>Deposit</span>
              </Button>
            </DialogTrigger>
            <DepositDialog address={address} balance="0.00534056" />
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex h-18 flex-col items-start justify-between p-3"
              >
                <ArrowRight className="size-3" />

                <span>Send</span>
              </Button>
            </DialogTrigger>
            <SendDialog balance="0.00534056" />
          </Dialog>

          {/* <Button variant="outline">
            <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
              <ArrowDown className="size-5" />
            </div>
            <span>Receive</span>
          </Button> */}
        </div>
      </div>

      {/* Tabs for Tokens and NFTs */}
      <div className="relative flex-1 overflow-hidden">
        <Tabs defaultValue="tokens" className="flex h-full flex-col">
          <TabsList className="mx-4 mb-4 grid w-auto grid-cols-3 bg-white/5">
            <TabsTrigger
              value="tokens"
              className="text-white data-[state=active]:bg-[#F4C10B] data-[state=active]:text-black"
            >
              Tokens
            </TabsTrigger>
            <TabsTrigger
              value="items"
              className="text-white data-[state=active]:bg-[#F4C10B] data-[state=active]:text-black"
            >
              Items
            </TabsTrigger>
            <TabsTrigger
              value="inbox"
              className="relative text-white data-[state=active]:bg-[#F4C10B] data-[state=active]:text-black"
            >
              Inbox
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {unreadCount}
                </span>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="tokens"
            className="flex-1 overflow-y-auto px-4 pb-4"
          >
            <div className="space-y-6">
              {tokens.map((token, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10">
                      <Image
                        src={token.image}
                        alt={token.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <p className="text-white">{token.name}</p>
                      <p className="text-muted-foreground -mt-1">
                        {formatToken(token.balance, 18, 2)} {token.symbol}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="items"
            className="flex-1 overflow-y-auto px-4 pb-4"
          >
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <Loader2 className="size-6 animate-spin text-white/60" />
              </div>
            ) : error ? (
              <div className="text-center text-sm text-red-400">
                Failed to load NFTs
              </div>
            ) : nfts.length === 0 ? (
              <div className="text-center text-sm text-white/60">
                No NFTs found
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-3">
                {nfts.map((nft, index) => (
                  <HoverCard key={`${nft.contract.address}-${nft.tokenId}`}>
                    <HoverCardTrigger asChild>
                      <div className="rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                        <div className="aspect-square overflow-hidden rounded-md bg-black">
                          {nft.image.cachedUrl ? (
                            <Image
                              src={nft.image.cachedUrl}
                              alt={nft.name || "NFT"}
                              width={400}
                              height={400}
                              className="size-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                  "https://placehold.co/400x400/000000/ffffff?text=No+Image";
                              }}
                            />
                          ) : (
                            <div className="flex size-full items-center justify-center">
                              <ImageOff className="size-8 text-white/20" />
                            </div>
                          )}
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 overflow-hidden border-white/10 bg-black">
                      <div className="flex flex-col gap-4">
                        <div className="relative flex gap-4">
                          <Image
                            src={PROJECTS[nft.projectId].logo}
                            alt={nft.name || "NFT"}
                            width={96}
                            height={96}
                            className="absolute -right-4 -bottom-4 object-contain opacity-10"
                          />
                          <div className="size-24 overflow-hidden rounded-md border border-white/10 bg-black">
                            {nft.image.cachedUrl ? (
                              <Image
                                src={nft.image.cachedUrl}
                                alt={nft.name || "NFT"}
                                width={96}
                                height={96}
                                className="size-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src =
                                    "https://placehold.co/96x96/000000/ffffff?text=No+Image";
                                }}
                              />
                            ) : (
                              <div className="flex size-full items-center justify-center">
                                <ImageOff className="size-6 text-white/20" />
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-white">
                              {nft.name || `#${nft.tokenId}`}
                            </p>
                            <p className="text-xs text-white/60">
                              {nft.contract.name}
                            </p>
                          </div>
                        </div>

                        {nft.raw.metadata?.attributes &&
                          nft.raw.metadata.attributes.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-xs font-medium text-white/80">
                                Traits
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                {nft.raw.metadata.attributes.map(
                                  (trait: any, i: number) => (
                                    <div
                                      key={i}
                                      className="rounded-md border border-white/10 bg-white/5 p-2"
                                    >
                                      <p className="text-xs text-white/60">
                                        {trait.trait_type}
                                      </p>
                                      <p className="truncate text-sm text-white">
                                        {trait.value}
                                      </p>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent
            value="inbox"
            className="flex-1 overflow-y-auto px-4 pb-4"
          >
            <div className="space-y-4">
              {MOCK_NOTIFICATIONS.map((notification) => (
                <div
                  key={notification.id}
                  className={`rounded-lg border ${
                    notification.read
                      ? "border-white/5 bg-white/5"
                      : "border-white/10 bg-white/10"
                  } p-4 transition-colors hover:bg-white/15`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                          notification.type === "achievement"
                            ? "bg-yellow-500/20"
                            : notification.type === "reward"
                              ? "bg-green-500/20"
                              : "bg-blue-500/20"
                        }`}
                      >
                        <Bell className="size-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {notification.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                          {notification.description}
                        </p>
                        <p className="mt-2 text-xs text-white/40">
                          {new Date(
                            notification.timestamp,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {!notification.read && (
                      <div className="size-2 shrink-0 rounded-full bg-[#F4C10B]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
