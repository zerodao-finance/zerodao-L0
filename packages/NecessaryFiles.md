# Files/Functions/Utilites directly used by zeroBRIDGE and zero-keeper

## zero-protocol: 

- UnderwriterRequest.ts **In sdk**
  - MetaRequest.ts **In sdk**
- quotes.js **In compute**
- TransferRequest.ts **In sdk**
- BurnRequest.ts **In sdk**
- { EIP712_TYPES } from "zero-protocol/dist/lib/config/constants" \ **In common**
- fixtures from "zero-protocol/lib/fixtures" **In constants**
- deployments.json **In Common**
- { createZeroUser, createZeroConnection } from "zero-protocol/dist/lib/zero.js"
- { enableGlobaleMockRuntime, createMockKeeper } from "zero-protocol/dist/lib/mock" **In Mocks**
- { makeCompute } from "zero-protocol/lib/badger" **In Compute**
- Logger **In Logger**

## zeroBRIDGE:

- sdk.js, at least ({ sdkBurn, sdkTransfer })
- { deploymentsFromSigner } from "./zero";
- { tokenMapping, selectFixture, chainIdToName, DECIMALS, available_chains } from "utils/tokenMapping.js" **In Chains**
- network.js, formatters.js, walletModal.js?, chains.js from utils **In Chains and Compute**

## zero-keeper:

- All Packages

## Add README.md

- All packages

## Add dependencies for all files above