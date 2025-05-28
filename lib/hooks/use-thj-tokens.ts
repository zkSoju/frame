import { PROJECTS } from "@/constants/projects";
import { useLogin } from "@/lib/hooks/use-login";
import { ContractInfo, ProjectId } from "@/types/projects";
import { erc20Abi } from "viem";
import { berachain } from "viem/chains";
import { useReadContracts } from "wagmi";

export interface TokenInfo {
  name: string;
  symbol: string;
  balance: bigint;
  image: string;
  projectId: ProjectId;
}

export default function useTHJTokens(): {
  tokens: TokenInfo[];
  isLoading: boolean;
} {
  const { address } = useLogin();

  // Get all ERC20 tokens from all projects
  const erc20Tokens = Object.values(PROJECTS).flatMap((project) =>
    project.contracts
      .filter(
        (contract): contract is ContractInfo & { type: "ERC20" } =>
          contract.type === "ERC20",
      )
      .map((token) => ({
        ...token,
        projectId: project.id,
      })),
  );

  const { data: balances, isLoading } = useReadContracts({
    contracts: erc20Tokens.map((token) => ({
      address: token.address,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [address],
      chainId: berachain.id,
    })),
    allowFailure: false,
  });

  // Create tokens array and sort by project ID
  const tokens = erc20Tokens.map((token, index) => ({
    name: token.name,
    symbol: token.symbol ?? token.name,
    balance: (balances?.[index] as bigint) ?? 0n,
    image: token.image ?? `/projects/${token.projectId}.webp`,
    projectId: token.projectId,
  }));

  // Sort tokens by project ID to match the order in ProjectId
  const projectOrder = Object.values(ProjectId);
  const sortedTokens = tokens.sort(
    (a, b) =>
      projectOrder.indexOf(a.projectId) - projectOrder.indexOf(b.projectId),
  );

  return {
    tokens: sortedTokens,
    isLoading,
  };
}
