import Head from "next/head";
import Main from "../components/layouts/Main";
import ConnectButton from "../components/UI/ConnectButton";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Main>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center border border-white/20 bg-black px-4 py-4">
          <p className="mb-4 w-full text-2xl text-white">Wagmi Boilerplate</p>
          <div className="mb-16 flex w-full flex-row items-center justify-start space-x-4">
            <FaGithub className="text-white" />
            <a
              href="https://github.com/zkSoju/wagmi-boiler"
              target="_blank"
              className="w-full cursor-pointer text-white/50 underline underline-offset-1 transition duration-300 ease-linear hover:text-white"
            >
              <p>wagmi-boiler</p>
            </a>
          </div>

          <ConnectButton />
        </div>
      </div>
    </Main>
  );
}
