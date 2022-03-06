import { useConnect } from "wagmi";

const ConnectButton = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();

  return (
    <>
      {connectData.connectors.map((x) => (
        <button disabled={!x.ready} key={x.id} onClick={() => connect(x)}>
          {x.name}
          {!x.ready && " (unsupported)"}
        </button>
      ))}
    </>
  );
};

export default ConnectButton;
