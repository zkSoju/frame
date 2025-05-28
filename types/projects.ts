import { Address } from "viem";

export const ProjectId = {
  MIBERA: "mibera",
  HENLO: "henlo",
  CUB_QUESTS: "cub-quests",
  FAT_BERA: "fat-bera",
  SET_AND_FORGETTI: "set-and-forgetti",
  THE_HONEY_JAR: "the-honey-jar",
} as const;

export type ProjectId = (typeof ProjectId)[keyof typeof ProjectId];

export interface ContractInfo {
  address: Address;
  name: string;
  type: "ERC20" | "ERC721" | "ERC1155";
  symbol?: string;
  image?: string;
}

export interface Project {
  id: ProjectId;
  name: string;
  description: string;
  logo: string;
  contracts: ContractInfo[];
}

export type ProjectMap = Record<ProjectId, Project>;
