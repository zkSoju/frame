import Head from "next/head";
import Main from "../components/layouts/Main";
import ConnectButton from "../components/UI/ConnectButton";

export default function Home() {
  return (
    <Main>
      <p className="text-lg">Wagmi Starter</p>
      <ConnectButton />
    </Main>
  );
}
