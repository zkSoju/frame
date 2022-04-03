import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

const ConnectButton = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();

  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="mb-2 flex flex-row space-x-4">
        {connectData.connectors.map((x) => (
          <button
            disabled={isMounted ? !x.ready : false}
            key={x.id}
            onClick={() => connect(x)}
            className="border bg-white px-3 py-2 text-black transition duration-300 ease-linear hover:border hover:border-white hover:bg-transparent hover:text-white"
          >
            <p>
              {isMounted ? x.name : x.id === "injected" ? x.id : x.name}
              {isMounted ? !x.ready && " (unsupported)" : ""}
            </p>
          </button>
        ))}
      </div>
      {connectError && (
        <div className="w-full">
          <p className="text-red-600">
            {connectError?.message ?? "Failed to connect"}
          </p>
        </div>
      )}
    </>
  );
};

export default ConnectButton;
