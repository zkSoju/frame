import { PROJECTS } from "@/constants/projects";
import { ProjectId } from "@/types/projects";
import { Alchemy, OwnedNft } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { ALCHEMY_API_KEY, ALCHEMY_NETWORK } from "../../constants/nft";
import { useLogin } from "./use-login";

export interface NFTInfo extends OwnedNft {
  projectId: ProjectId;
}

export function useTHJNFTs(): {
  nfts: NFTInfo[];
  isLoading: boolean;
  error: Error | null;
} {
  const { address } = useLogin();
  const [nfts, setNfts] = useState<NFTInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!address || !ALCHEMY_API_KEY) return;

      setIsLoading(true);
      setError(null);

      try {
        const alchemy = new Alchemy({
          apiKey: ALCHEMY_API_KEY,
          network: ALCHEMY_NETWORK,
        });

        // Get all NFT contracts from all projects
        const nftContracts = Object.values(PROJECTS).flatMap((project) =>
          project.contracts
            .filter(
              (contract) =>
                contract.type === "ERC721" || contract.type === "ERC1155",
            )
            .map((contract) => ({
              address: contract.address,
              projectId: project.id,
            })),
        );

        // Process NFT contracts in chunks of 20
        const contractChunks = [];
        for (let i = 0; i < nftContracts.length; i += 20) {
          contractChunks.push(nftContracts.slice(i, i + 20));
        }

        const nftPromises = contractChunks.map(async (chunk) => {
          const response = await alchemy.nft.getNftsForOwner(address, {
            contractAddresses: chunk.map((contract) => contract.address),
          });

          return response.ownedNfts.map((nft) => {
            const matchingContract = chunk.find(
              (contract) =>
                contract.address.toLowerCase() ===
                nft.contract.address.toLowerCase(),
            );

            return {
              ...nft,
              image: {
                ...nft.image,
                cachedUrl:
                  nft.image?.cachedUrl ||
                  nft.image?.originalUrl ||
                  nft.image?.thumbnailUrl ||
                  `/images/nft-placeholder.png`,
              },
              projectId: matchingContract?.projectId || ProjectId.MIBERA, // Default to MIBERA if not found
            };
          });
        });

        const nftResults = await Promise.all(nftPromises);
        const flattenedNfts = nftResults.flat();

        // Sort NFTs by project ID to match the order in ProjectId
        const projectOrder = Object.values(ProjectId);
        const sortedNfts = flattenedNfts.sort(
          (a, b) =>
            projectOrder.indexOf(a.projectId) -
            projectOrder.indexOf(b.projectId),
        );

        setNfts(sortedNfts);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch NFTs"),
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchNFTs();
  }, [address]);

  return { nfts, isLoading, error };
}
