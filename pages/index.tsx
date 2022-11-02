import Head from "next/head";
import Main from "../components/layouts/Main";
import { FaGithub } from "react-icons/fa";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";
import Article from "../components/layouts/Article";

export default function Home() {
  return (
    <Main>
      <Article>
        <div className="absolute h-screen w-full">
          <Image
            src="/bg.png"
            layout="fill"
            objectFit="cover"
            className="opacity-75"
            alt=""
          />
        </div>
        <div className="relative z-10 flex h-screen w-full items-center justify-center">
          <div className="flex flex-col items-start px-4 py-4">
            <p className="mb-6 text-8xl font-medium text-white">
              wagmi boilerplate
            </p>
            <a
              href="https://github.com/zkSoju/wagmi-boiler"
              target="_blank"
              className="border-1 cursor-pointer rounded-full border border-white/5 bg-white/10 px-2 py-0.5 text-white backdrop-blur-lg transition duration-300 ease-linear hover:text-white"
            >
              <div className="flex flex-row items-center space-x-2">
                <FaGithub />
                <p>Use this template</p>
              </div>
            </a>
          </div>
        </div>
      </Article>
    </Main>
  );
}
