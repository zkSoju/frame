import { ProjectId, ProjectMap } from "@/types/projects";

export const PROJECTS: ProjectMap = {
  [ProjectId.MIBERA]: {
    id: ProjectId.MIBERA,
    name: "Mibera",
    description: "Mibera NFT Collection",
    logo: "/projects/mibera.png",
    contracts: [
      {
        address: "0x6666397DFe9a8c469BF65dc744CB1C733416c420",
        name: "Mibera",
        type: "ERC721",
      },
      {
        address: "0x86Db98cf1b81E833447b12a077ac28c36b75c8E1",
        name: "Fractured V1",
        type: "ERC721",
      },
      {
        address: "0x8D4972bd5D2df474e71da6676a365fB549853991",
        name: "Fractured V2",
        type: "ERC721",
      },
      {
        address: "0x144B27b1A267eE71989664b3907030Da84cc4754",
        name: "Fractured V3",
        type: "ERC721",
      },
      {
        address: "0x72DB992E18a1bf38111B1936DD723E82D0D96313",
        name: "Fractured V4",
        type: "ERC721",
      },
      {
        address: "0x3A00301B713be83EC54B7B4Fb0f86397d087E6d3",
        name: "Fractured V5",
        type: "ERC721",
      },
      {
        address: "0x419F25C4f9A9c730AAcf58b8401B5b3e566Fe886",
        name: "Fractured V6",
        type: "ERC721",
      },
      {
        address: "0x81A27117bd894942BA6737402fB9e57e942C6058",
        name: "Fractured V7",
        type: "ERC721",
      },
      {
        address: "0xaaB7b4502251aE393D0590bAB3e208E2d58F4813",
        name: "Fractured V8",
        type: "ERC721",
      },
      {
        address: "0xc64126EA8dC7626c16daA2A29D375C33fcaa4C7c",
        name: "Fractured V9",
        type: "ERC721",
      },
      {
        address: "0x24F4047d372139de8DACbe79e2fC576291Ec3ffc",
        name: "Fractured V10",
        type: "ERC721",
      },
      {
        address: "0x4B08a069381EfbB9f08C73D6B2e975C9BE3c4684",
        name: "Tarot",
        type: "ERC721",
      },
    ],
  },
  [ProjectId.HENLO]: {
    id: ProjectId.HENLO,
    name: "Henlo",
    description: "Henlo Ecosystem",
    logo: "/projects/henlo.webp",
    contracts: [
      {
        address: "0xb2F776e9c1C926C4b2e54182Fac058dA9Af0B6A5",
        name: "Henlo",
        type: "ERC20",
        symbol: "HENLO",
        image: "/tokens/henlo.webp",
      },
      {
        address: "0x8412561FADDD6C85F5a17e07E0F29428B813E69B",
        name: "Henlocked100m",
        type: "ERC20",
        symbol: "HENLOCK100M",
        image: "/tokens/2.png",
      },
      {
        address: "0xA713816E8d190EFdf35d66b723eb63f8c8c4d5D2",
        name: "Henlocked330m",
        type: "ERC20",
        symbol: "HENLOCK330M",
        image: "/tokens/3.png",
      },
      {
        address: "0x15970fcf2dbb9FfCC4e2f79c3Fd777B871540D5b",
        name: "Henlocked420m",
        type: "ERC20",
        symbol: "HENLOCK420M",
        image: "/tokens/4.png",
      },
      {
        address: "0x610b6A27A3A83Cea0574C5001F30d9EEA3699b1a",
        name: "Henlocked690m",
        type: "ERC20",
        symbol: "HENLOCK690M",
        image: "/tokens/5.png",
      },
      {
        address: "0xA6A3E6fb89FA4C6554e82D05b449639EeBfc564f",
        name: "Henlocked1b",
        type: "ERC20",
        symbol: "HENLOCK1B",
        image: "/tokens/6.png",
      },
      {
        address: "0x8C988b7cEF454d7ce3c405E143bAdFb6B22693a6",
        name: "Henlo The Game",
        type: "ERC721",
      },
      {
        address: "0x0982c808B42A72d256d7E9d3BdF61e44ef31230d",
        name: "Henlo PFP",
        type: "ERC721",
      },
    ],
  },
  [ProjectId.CUB_QUESTS]: {
    id: ProjectId.CUB_QUESTS,
    name: "Cub Quests",
    description: "Cub Quests Achievement System",
    logo: "/projects/cubquests.webp",
    contracts: [
      {
        address: "0x574617ab9788e614b3EB3F7Bd61334720d9E1Aac",
        name: "Cub Badges",
        type: "ERC721",
      },
    ],
  },
  [ProjectId.FAT_BERA]: {
    id: ProjectId.FAT_BERA,
    name: "fatBERA",
    description: "fatBERA Token",
    logo: "/projects/fatbera.webp",
    contracts: [
      {
        address: "0xBAE11292A3E693aF73651BDa350D752AE4A391D4",
        name: "fatBERA",
        type: "ERC20",
        symbol: "fatBERA",
        image: "/tokens/fatbera.svg",
      },
    ],
  },
  [ProjectId.SET_AND_FORGETTI]: {
    id: ProjectId.SET_AND_FORGETTI,
    name: "Set & Forgetti",
    description: "Fractured NFT Collection",
    logo: "/projects/set-and-forgetti.webp",
    contracts: [],
  },
  [ProjectId.THE_HONEY_JAR]: {
    id: ProjectId.THE_HONEY_JAR,
    name: "The Honey Jar",
    description: "The Honey Jar NFT Collection",
    logo: "/projects/the-honey-jar.webp",
    contracts: [
      {
        address: "0xedc5dfd6f37464cc91bbce572b6fe2c97f1bc7b3",
        name: "Honey Jar Gen 1",
        type: "ERC721",
        symbol: "HJ1",
      },
      {
        address: "0x1c6c24cac266c791c4ba789c3ec91f04331725bd",
        name: "Honey Jar Gen 2",
        type: "ERC721",
        symbol: "HJ2",
      },
      {
        address: "0xf1e4a550772fabfc35b28b51eb8d0b6fcd1c4878",
        name: "Honey Jar Gen 3",
        type: "ERC721",
        symbol: "HJ3",
      },
      {
        address: "0xdb602ab4d6bd71c8d11542a9c8c936877a9a4f45",
        name: "Honey Jar Gen 4",
        type: "ERC721",
        symbol: "HJ4",
      },
      {
        address: "0x0263728e7f59f315c17d3c180aeade027a375f17",
        name: "Honey Jar Gen 5",
        type: "ERC721",
        symbol: "HJ5",
      },
      {
        address: "0xb62a9a21d98478f477e134e175fd2003c15cb83a",
        name: "Honey Jar Gen 6",
        type: "ERC721",
        symbol: "HJ6",
      },
      {
        address: "0x886d2176d899796cd1affa07eff07b9b2b80f1be",
        name: "Honey Comb",
        type: "ERC721",
        symbol: "HONEYCOMB",
      },
    ],
  },
};
