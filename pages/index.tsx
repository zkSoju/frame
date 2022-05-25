import Head from "next/head";
import Main from "../components/layouts/Main";
import { FaGithub } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <Main>
      <div className="fixed z-50 flex w-full justify-end px-8 pt-10">
        <ConnectButton />
      </div>
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-start px-4 py-4">
          <p className="text-2xl text-black">welcome to</p>
          <p className="mb-6 text-6xl font-bold text-black">
            wagmi boilerplate
          </p>
          <div className="mb-16 flex flex-row items-center justify-start space-x-4">
            <FaGithub className="text-black" />
            <a
              href="https://github.com/zkSoju/wagmi-boiler"
              target="_blank"
              className=" cursor-pointer text-black/50 underline underline-offset-1 transition duration-300 ease-linear hover:text-black"
            >
              <p>wagmi boiler</p>
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
