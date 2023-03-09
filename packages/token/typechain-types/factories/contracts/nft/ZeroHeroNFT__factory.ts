/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZeroHeroNFT,
  ZeroHeroNFTInterface,
} from "../../../contracts/nft/ZeroHeroNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedMaxPerWallet",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientPayment",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInPrivatelist",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInWhitelist",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "PrivateMintNotStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicMintNotStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "WhitelistMintNotStarted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseExtension",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "quantity",
        type: "uint8",
      },
    ],
    name: "devMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPrivateActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isWhitelistActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "privateMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "privateMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseExtension",
        type: "string",
      },
    ],
    name: "setBaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setBaseTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "value",
        type: "uint8",
      },
    ],
    name: "setMaxItemsPerWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMintPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "setPrivateMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "setWhitelistMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startPrivateMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startPublicMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startWhitelistMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "whitelistMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x600a805463ff0000001916630a000000179055670429d069189e0000600b5560c06040526005608090815264173539b7b760d91b60a052600d90620000459082620001c8565b503480156200005357600080fd5b50604051806040016040528060098152602001685a65726f204865726f60b81b815250604051806040016040528060058152602001645a4845524f60d81b8152508160029081620000a59190620001c8565b506003620000b48282620001c8565b50506000805550620000c633620000d1565b600160095562000294565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200014e57607f821691505b6020821081036200016f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001c357600081815260208120601f850160051c810160208610156200019e5750805b601f850160051c820191505b81811015620001bf57828155600101620001aa565b5050505b505050565b81516001600160401b03811115620001e457620001e462000123565b620001fc81620001f5845462000139565b8462000175565b602080601f8311600181146200023457600084156200021b5750858301515b600019600386901b1c1916600185901b178555620001bf565b600085815260208120601f198616915b82811015620002655788860151825594840194600190910190840162000244565b5085821015620002845787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6128e680620002a46000396000f3fe60806040526004361061024f5760003560e01c806376c64c6211610138578063bd5204c1116100b0578063e6a7e9331161007f578063e985e9c511610064578063e985e9c5146105ee578063f2fde38b14610644578063f4a0a5281461066457600080fd5b8063e6a7e933146105c6578063e948dda9146105db57600080fd5b8063bd5204c11461055e578063c668286214610571578063c87b56dd14610586578063da3ef23f146105a657600080fd5b8063a22cb46511610107578063b70196d7116100ec578063b70196d714610516578063b88d4fde1461052b578063bd32fb661461053e57600080fd5b8063a22cb465146104e0578063aa98e0c61461050057600080fd5b806376c64c62146104785780638da5cb5b1461048d57806395d89b41146104b8578063a0712d68146104cd57600080fd5b80633497d165116101cb5780636352211e1161019a57806370a082311161017f57806370a0823114610423578063715018a614610443578063746ea64d1461045857600080fd5b80636352211e146103e357806365bfaa681461040357600080fd5b80633497d165146103865780633ccfd60b146103a657806342842e0e146103bb578063524513d6146103ce57600080fd5b806318160ddd116102225780632bbde22e116102075780632bbde22e1461033b5780632d79ab5c1461035157806330176e131461036657600080fd5b806318160ddd1461030557806323b872dd1461032857600080fd5b806301ffc9a71461025457806306fdde0314610289578063081812fc146102ab578063095ea7b3146102f0575b600080fd5b34801561026057600080fd5b5061027461026f366004611ff1565b610684565b60405190151581526020015b60405180910390f35b34801561029557600080fd5b5061029e610769565b6040516102809190612084565b3480156102b757600080fd5b506102cb6102c6366004612097565b6107fb565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610280565b6103036102fe3660046120d9565b610865565b005b34801561031157600080fd5b50600154600054035b604051908152602001610280565b610303610336366004612103565b610950565b34801561034757600080fd5b5061031a600e5481565b34801561035d57600080fd5b50610274610be0565b34801561037257600080fd5b50610303610381366004612233565b610bfa565b34801561039257600080fd5b506103036103a136600461227c565b610c12565b3480156103b257600080fd5b50610303610c7f565b6103036103c9366004612103565b610cc3565b3480156103da57600080fd5b50610274610ce3565b3480156103ef57600080fd5b506102cb6103fe366004612097565b610cfc565b34801561040f57600080fd5b5061030361041e366004612097565b610d07565b34801561042f57600080fd5b5061031a61043e36600461229f565b610d14565b34801561044f57600080fd5b50610303610d96565b34801561046457600080fd5b5061030361047336600461227c565b610da8565b34801561048457600080fd5b50610303610deb565b34801561049957600080fd5b5060085473ffffffffffffffffffffffffffffffffffffffff166102cb565b3480156104c457600080fd5b5061029e610e22565b6103036104db366004612097565b610e31565b3480156104ec57600080fd5b506103036104fb3660046122ba565b610f29565b34801561050c57600080fd5b5061031a600f5481565b34801561052257600080fd5b50610303610fc0565b6103036105393660046122f6565b610ff6565b34801561054a57600080fd5b50610303610559366004612097565b611066565b61030361056c366004612372565b611073565b34801561057d57600080fd5b5061029e611239565b34801561059257600080fd5b5061029e6105a1366004612097565b6112c7565b3480156105b257600080fd5b506103036105c1366004612233565b6113c2565b3480156105d257600080fd5b506103036113d6565b6103036105e9366004612372565b61140b565b3480156105fa57600080fd5b50610274610609366004612444565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260076020908152604080832093909416825291909152205460ff1690565b34801561065057600080fd5b5061030361065f36600461229f565b6115bb565b34801561067057600080fd5b5061030361067f366004612097565b61166f565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061071757507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b8061076357507f5b5e139f000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606002805461077890612477565b80601f01602080910402602001604051908101604052809291908181526020018280546107a490612477565b80156107f15780601f106107c6576101008083540402835291602001916107f1565b820191906000526020600020905b8154815290600101906020018083116107d457829003601f168201915b5050505050905090565b60006108068261167c565b61083c576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060009081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061087082610cfc565b90503373ffffffffffffffffffffffffffffffffffffffff8216146108cf576108998133610609565b6108cf576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061095b826116bc565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109c2576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082815260066020526040902080543380821473ffffffffffffffffffffffffffffffffffffffff881690911417610a35576109ff8633610609565b610a35576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516610a82576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610a8d57600082555b73ffffffffffffffffffffffffffffffffffffffff86811660009081526005602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055918716808252919020805460010190554260a01b177c0200000000000000000000000000000000000000000000000000000000176000858152600460205260408120919091557c020000000000000000000000000000000000000000000000000000000084169003610b7c57600184016000818152600460205260408120549003610b7a576000548114610b7a5760008181526004602052604090208490555b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050505050565b600a5460009060ff1615610bf45750600190565b50600090565b610c02611773565b600c610c0e8282612510565b5050565b610c1a611773565b600a60ff8216610c2d6001546000540390565b610c379190612659565b1115610c6f576040517f5c9a0abb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c7c338260ff166117f4565b50565b610c87611773565b610c8f611932565b610cb7610cb160085473ffffffffffffffffffffffffffffffffffffffff1690565b476119a5565b610cc16001600955565b565b610cde83838360405180602001604052806000815250610ff6565b505050565b600a54600090610100900460ff1615610bf45750600190565b6000610763826116bc565b610d0f611773565b600e55565b600073ffffffffffffffffffffffffffffffffffffffff8216610d63576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205467ffffffffffffffff1690565b610d9e611773565b610cc16000611aff565b610db0611773565b600a805460ff9092166301000000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffff909216919091179055565b610df3611773565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff1662010000179055565b60606003805461077890612477565b610e39611932565b600a5462010000900460ff16610e7b576040517fb35ba98d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600b54610e899190612671565b341015610ec2576040517fcd1c886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb881610ed36001546000540390565b610edd9190612659565b1115610f15576040517f5c9a0abb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f1f33826117f4565b610c7c6001600955565b33600081815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610fc8611773565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b611001848484610950565b73ffffffffffffffffffffffffffffffffffffffff83163b156110605761102a84848484611b76565b611060576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b61106e611773565b600f55565b61107b611932565b600a5460ff166110b7576040517fd23cd50900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600b546110c59190612671565b3410156110fe576040517fcd1c886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb88161110f6001546000540390565b6111199190612659565b1115611151576040517f5c9a0abb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600a5460ff6301000000909104168161119a3373ffffffffffffffffffffffffffffffffffffffff166000908152600560205260409081902054901c67ffffffffffffffff1690565b6111a49190612659565b11156111dc576040517fd900aa8a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111e882868686611cf0565b61121e576040517f17729de500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61122884826117f4565b6112326001600955565b5050505050565b600d805461124690612477565b80601f016020809104026020016040519081016040528092919081815260200182805461127290612477565b80156112bf5780601f10611294576101008083540402835291602001916112bf565b820191906000526020600020905b8154815290600101906020018083116112a257829003601f168201915b505050505081565b60606112d28261167c565b611363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084015b60405180910390fd5b600061136d611d72565b9050600081511161138d57604051806020016040528060008152506113bb565b8061139784611d81565b600d6040516020016113ab939291906126ae565b6040516020818303038152906040525b9392505050565b6113ca611773565b600d610c0e8282612510565b6113de611773565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b611413611932565b600a54610100900460ff16611454576040517fef4604b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600b546114629190612671565b34101561149b576040517fcd1c886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb8816114ac6001546000540390565b6114b69190612659565b11156114ee576040517f5c9a0abb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600a5460ff630100000090910416816115373373ffffffffffffffffffffffffffffffffffffffff166000908152600560205260409081902054901c67ffffffffffffffff1690565b6115419190612659565b1115611579576040517fd900aa8a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61158582868686611ee1565b61121e576040517f5b0aa2ba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115c3611773565b73ffffffffffffffffffffffffffffffffffffffff8116611666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161135a565b610c7c81611aff565b611677611773565b600b55565b60008054821080156107635750506000908152600460205260409020547c0100000000000000000000000000000000000000000000000000000000161590565b60008160005481101561174157600081815260046020526040812054907c01000000000000000000000000000000000000000000000000000000008216900361173f575b806000036113bb57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01600081815260046020526040902054611700565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085473ffffffffffffffffffffffffffffffffffffffff163314610cc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161135a565b6000805490829003611832576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660008181526005602090815260408083208054680100000000000000018802019055848352600490915281206001851460e11b4260a01b178317905582840190839083907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4600183015b8181146118ee57808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46001016118b6565b5081600003611929576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005550505050565b60026009540361199e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161135a565b6002600955565b80471015611a0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161135a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611a69576040519150601f19603f3d011682016040523d82523d6000602084013e611a6e565b606091505b5050905080610cde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161135a565b6008805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290611bd190339089908890889060040161276c565b6020604051808303816000875af1925050508015611c2a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611c27918101906127b5565b60015b611ca1573d808015611c58576040519150601f19603f3d011682016040523d82523d6000602084013e611c5d565b606091505b508051600003611c99576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490505b949350505050565b6000611d69600e54858585604051602001611d439392919092835260609190911b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166020830152603482015260540190565b6040516020818303038152906040528051906020012087611f349092919063ffffffff16565b95945050505050565b6060600c805461077890612477565b606081600003611dc457505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611dee5780611dd8816127d2565b9150611de79050600a8361280a565b9150611dc8565b60008167ffffffffffffffff811115611e0957611e0961213f565b6040519080825280601f01601f191660200182016040528015611e33576020820181803683370190505b509050815b8515611ed857611e49600182612845565b90506000611e58600a8861280a565b611e6390600a612671565b611e6d9088612845565b611e7890603061285c565b905060008160f81b905080848481518110611e9557611e95612881565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611ecf600a8961280a565b97505050611e38565b50949350505050565b6000611d69600f54858585604051602001611d439392919092835260609190911b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166020830152603482015260540190565b600082611f418584611f4a565b14949350505050565b600081815b8451811015611f8f57611f7b82868381518110611f6e57611f6e612881565b6020026020010151611f97565b915080611f87816127d2565b915050611f4f565b509392505050565b6000818310611fb35760008281526020849052604090206113bb565b5060009182526020526040902090565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610c7c57600080fd5b60006020828403121561200357600080fd5b81356113bb81611fc3565b60005b83811015612029578181015183820152602001612011565b838111156110605750506000910152565b6000815180845261205281602086016020860161200e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006113bb602083018461203a565b6000602082840312156120a957600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120d457600080fd5b919050565b600080604083850312156120ec57600080fd5b6120f5836120b0565b946020939093013593505050565b60008060006060848603121561211857600080fd5b612121846120b0565b925061212f602085016120b0565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156121b5576121b561213f565b604052919050565b600067ffffffffffffffff8311156121d7576121d761213f565b61220860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160161216e565b905082815283838301111561221c57600080fd5b828260208301376000602084830101529392505050565b60006020828403121561224557600080fd5b813567ffffffffffffffff81111561225c57600080fd5b8201601f8101841361226d57600080fd5b611ce8848235602084016121bd565b60006020828403121561228e57600080fd5b813560ff811681146113bb57600080fd5b6000602082840312156122b157600080fd5b6113bb826120b0565b600080604083850312156122cd57600080fd5b6122d6836120b0565b9150602083013580151581146122eb57600080fd5b809150509250929050565b6000806000806080858703121561230c57600080fd5b612315856120b0565b9350612323602086016120b0565b925060408501359150606085013567ffffffffffffffff81111561234657600080fd5b8501601f8101871361235757600080fd5b612366878235602084016121bd565b91505092959194509250565b600080600080600060a0868803121561238a57600080fd5b85359450602061239b8188016120b0565b945060408701359350606087013567ffffffffffffffff808211156123bf57600080fd5b818901915089601f8301126123d357600080fd5b8135818111156123e5576123e561213f565b8060051b91506123f684830161216e565b818152918301840191848101908c84111561241057600080fd5b938501935b8385101561242e57843582529385019390850190612415565b999c989b50969960800135979650505050505050565b6000806040838503121561245757600080fd5b612460836120b0565b915061246e602084016120b0565b90509250929050565b600181811c9082168061248b57607f821691505b6020821081036124c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610cde57600081815260208120601f850160051c810160208610156124f15750805b601f850160051c820191505b81811015610bd8578281556001016124fd565b815167ffffffffffffffff81111561252a5761252a61213f565b61253e816125388454612477565b846124ca565b602080601f831160018114612591576000841561255b5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610bd8565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156125de578886015182559484019460019091019084016125bf565b508582101561261a57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561266c5761266c61262a565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156126a9576126a961262a565b500290565b6000845160206126c18285838a0161200e565b8551918401916126d48184848a0161200e565b85549201916000906126e581612477565b600182811680156126fd57600181146127305761275c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008416875282151583028701945061275c565b896000528560002060005b848110156127545781548982015290830190870161273b565b505082870194505b50929a9950505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526127ab608083018461203a565b9695505050505050565b6000602082840312156127c757600080fd5b81516113bb81611fc3565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036128035761280361262a565b5060010190565b600082612840577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000828210156128575761285761262a565b500390565b600060ff821660ff84168060ff038211156128795761287961262a565b019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122011ecf25593fb8dd6fca5fd2ed1de89b1813830b321058529e6f3d8a91ceada1e64736f6c634300080f0033";

type ZeroHeroNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroHeroNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroHeroNFT__factory extends ContractFactory {
  constructor(...args: ZeroHeroNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZeroHeroNFT> {
    return super.deploy(overrides || {}) as Promise<ZeroHeroNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZeroHeroNFT {
    return super.attach(address) as ZeroHeroNFT;
  }
  override connect(signer: Signer): ZeroHeroNFT__factory {
    return super.connect(signer) as ZeroHeroNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroHeroNFTInterface {
    return new utils.Interface(_abi) as ZeroHeroNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZeroHeroNFT {
    return new Contract(address, _abi, signerOrProvider) as ZeroHeroNFT;
  }
}
