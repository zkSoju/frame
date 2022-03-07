import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

const ConnectButton = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();

  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {connectData.connectors.map((x) => (
        <button
          disabled={isMounted ? !x.ready : false}
          key={x.id}
          onClick={() => connect(x)}
        >
          {isMounted ? x.name : x.id === "injected" ? x.id : x.name}
          {isMounted ? !x.ready && " (unsupported)" : ""}
        </button>
      ))}
      {connectError && (
        <div>{connectError?.message ?? "Failed to connect"}</div>
      )}
    </>
  );
};

export default ConnectButton;
