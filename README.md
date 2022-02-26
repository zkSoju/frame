# NextJs Web3 Starter

Slightly Opinionated Next.js Web3 Boilerplate.

## Deployment

1. Click use this template.
2. Install dependencies.

```
cd wagmi-start
npm i
```

3. Change `.env.example` to `.env` file and fill in the required fields. Refer to https://chainlist.org/ for the appropriate network ID that matches network contract is deployed at.

```
INFURA_ID=<PROJECT_ID>
ALCHEMY_ID=<PROJECT_ID>
CHAIN_ID=<CHAIN_ID> [optional]
CONTRACT_ADDRESS=<DEPLOYED_CONTRACT ADDRESS> [optional]
```

# Built on

- [wagmi](https://github.com/tmm/wagmi/)
- [ethersjs](https://docs.ethers.io/v5/)
- [nextjs](https://nextjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [immer](https://github.com/immerjs/immer)
