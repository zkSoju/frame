import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const Main = ({ children }) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className="mx-auto">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wagmi Starter</title>
      </Head>
      <NextSeo
        title="Wagmi Boilerplate"
        description="Wagmi Boiler"
        openGraph={{
          url: "",
          title: "Wagmi",
          description: "Wagmi",
        }}
        twitter={{ handle: "@wagmi" }}
      />
      {children}
    </div>
  );
};

export default Main;
