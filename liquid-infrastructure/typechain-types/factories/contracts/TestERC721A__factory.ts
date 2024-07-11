/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  TestERC721A,
  TestERC721AInterface,
} from "../../contracts/TestERC721A";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    stateMutability: "nonpayable",
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
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4e46542050554e4b0000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f4e465450554e4b0000000000000000000000000000000000000000000000000081525081600090805190602001906200009692919062000445565b508060019080519060200190620000af92919062000445565b5050506000600190505b600a8111620000ff57620000e873c783df8a850f42e7f7e57013759c285caa701eb682620001ee60201b60201c565b600181620000f791906200052e565b9050620000b9565b60be90505b60c88110156200014b576200013473c783df8a850f42e7f7e57013759c285caa701eb682620001ee60201b60201c565b6001816200014391906200052e565b905062000104565b6200017273bf660843528035a5a4921534e156a27e64b231fe60c8620001ee60201b60201c565b6200019973bf660843528035a5a4921534e156a27e64b231fe60c9620001ee60201b60201c565b620001c073bf660843528035a5a4921534e156a27e64b231fe60ca620001ee60201b60201c565b620001e773bf660843528035a5a4921534e156a27e64b231fe60cb620001ee60201b60201c565b50620006e5565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000261576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025890620005ec565b60405180910390fd5b6200027281620003d460201b60201c565b15620002b5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ac906200065e565b60405180910390fd5b620002c9600083836200044060201b60201c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200031b91906200052e565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b8280546200045390620006af565b90600052602060002090601f016020900481019282620004775760008555620004c3565b82601f106200049257805160ff1916838001178555620004c3565b82800160010185558215620004c3579182015b82811115620004c2578251825591602001919060010190620004a5565b5b509050620004d29190620004d6565b5090565b5b80821115620004f1576000816000905550600101620004d7565b5090565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200053b82620004f5565b91506200054883620004f5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000580576200057f620004ff565b5b828201905092915050565b600082825260208201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000620005d46020836200058b565b9150620005e1826200059c565b602082019050919050565b600060208201905081810360008301526200060781620005c5565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600062000646601c836200058b565b915062000653826200060e565b602082019050919050565b60006020820190508181036000830152620006798162000637565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006c857607f821691505b60208210811415620006df57620006de62000680565b5b50919050565b6123bd80620006f56000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611418565b6102bc565b6040516100fb9190611460565b60405180910390f35b61010c61039e565b6040516101199190611514565b60405180910390f35b61013c6004803603810190610137919061156c565b610430565b60405161014991906115da565b60405180910390f35b61016c60048036038101906101679190611621565b6104b5565b005b61018860048036038101906101839190611661565b6105cd565b005b6101a4600480360381019061019f9190611661565b61062d565b005b6101c060048036038101906101bb919061156c565b61064d565b6040516101cd91906115da565b60405180910390f35b6101f060048036038101906101eb91906116b4565b6106ff565b6040516101fd91906116f0565b60405180910390f35b61020e6107b7565b60405161021b9190611514565b60405180910390f35b61023e60048036038101906102399190611737565b610849565b005b61025a600480360381019061025591906118ac565b6109ca565b005b6102766004803603810190610271919061156c565b610a2c565b6040516102839190611514565b60405180910390f35b6102a660048036038101906102a1919061192f565b610ad3565b6040516102b39190611460565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610b67565b5b9050919050565b6060600080546103ad9061199e565b80601f01602080910402602001604051908101604052809291908181526020018280546103d99061199e565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610bd1565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611a42565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611ad4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610c3d565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610c3d565b610ad3565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611b66565b60405180910390fd5b6105c88383610c45565b505050565b6105de6105d8610c3d565b82610cfe565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611bf8565b60405180910390fd5b610628838383610ddc565b505050565b610648838383604051806020016040528060008152506109ca565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611c8a565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611d1c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c69061199e565b80601f01602080910402602001604051908101604052809291908181526020018280546107f29061199e565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b610851610c3d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b690611d88565b60405180910390fd5b80600560006108cc610c3d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610979610c3d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109be9190611460565b60405180910390a35050565b6109db6109d5610c3d565b83610cfe565b610a1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1190611bf8565b60405180910390fd5b610a2684848484611038565b50505050565b6060610a3782610bd1565b610a76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6d90611e1a565b60405180910390fd5b6000610a80611094565b90506000815111610aa05760405180602001604052806000815250610acb565b80610aaa846110ab565b604051602001610abb929190611e76565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cb88361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d0982610bd1565b610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f90611f0c565b60405180910390fd5b6000610d538361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc257508373ffffffffffffffffffffffffffffffffffffffff16610daa84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dd35750610dd28185610ad3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfc8261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610e52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4990611f9e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990612030565b60405180910390fd5b610ecd83838361120c565b610ed8600082610c45565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f28919061207f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7f91906120b3565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611043848484610ddc565b61104f84848484611211565b61108e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110859061217b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156110f3576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611207565b600082905060005b6000821461112557808061110e9061219b565b915050600a8261111e9190612213565b91506110fb565b60008167ffffffffffffffff81111561114157611140611781565b5b6040519080825280601f01601f1916602001820160405280156111735781602001600182028036833780820191505090505b5090505b600085146112005760018261118c919061207f565b9150600a8561119b9190612244565b60306111a791906120b3565b60f81b8183815181106111bd576111bc612275565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111f99190612213565b9450611177565b8093505050505b919050565b505050565b60006112328473ffffffffffffffffffffffffffffffffffffffff16611399565b1561138c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261125b610c3d565b8786866040518563ffffffff1660e01b815260040161127d94939291906122f9565b6020604051808303816000875af19250505080156112b957506040513d601f19601f820116820180604052508101906112b6919061235a565b60015b61133c573d80600081146112e9576040519150601f19603f3d011682016040523d82523d6000602084013e6112ee565b606091505b50600081511415611334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132b9061217b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611391565b600190505b949350505050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113f5816113c0565b811461140057600080fd5b50565b600081359050611412816113ec565b92915050565b60006020828403121561142e5761142d6113b6565b5b600061143c84828501611403565b91505092915050565b60008115159050919050565b61145a81611445565b82525050565b60006020820190506114756000830184611451565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114b557808201518184015260208101905061149a565b838111156114c4576000848401525b50505050565b6000601f19601f8301169050919050565b60006114e68261147b565b6114f08185611486565b9350611500818560208601611497565b611509816114ca565b840191505092915050565b6000602082019050818103600083015261152e81846114db565b905092915050565b6000819050919050565b61154981611536565b811461155457600080fd5b50565b60008135905061156681611540565b92915050565b600060208284031215611582576115816113b6565b5b600061159084828501611557565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115c482611599565b9050919050565b6115d4816115b9565b82525050565b60006020820190506115ef60008301846115cb565b92915050565b6115fe816115b9565b811461160957600080fd5b50565b60008135905061161b816115f5565b92915050565b60008060408385031215611638576116376113b6565b5b60006116468582860161160c565b925050602061165785828601611557565b9150509250929050565b60008060006060848603121561167a576116796113b6565b5b60006116888682870161160c565b93505060206116998682870161160c565b92505060406116aa86828701611557565b9150509250925092565b6000602082840312156116ca576116c96113b6565b5b60006116d88482850161160c565b91505092915050565b6116ea81611536565b82525050565b600060208201905061170560008301846116e1565b92915050565b61171481611445565b811461171f57600080fd5b50565b6000813590506117318161170b565b92915050565b6000806040838503121561174e5761174d6113b6565b5b600061175c8582860161160c565b925050602061176d85828601611722565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117b9826114ca565b810181811067ffffffffffffffff821117156117d8576117d7611781565b5b80604052505050565b60006117eb6113ac565b90506117f782826117b0565b919050565b600067ffffffffffffffff82111561181757611816611781565b5b611820826114ca565b9050602081019050919050565b82818337600083830152505050565b600061184f61184a846117fc565b6117e1565b90508281526020810184848401111561186b5761186a61177c565b5b61187684828561182d565b509392505050565b600082601f83011261189357611892611777565b5b81356118a384826020860161183c565b91505092915050565b600080600080608085870312156118c6576118c56113b6565b5b60006118d48782880161160c565b94505060206118e58782880161160c565b93505060406118f687828801611557565b925050606085013567ffffffffffffffff811115611917576119166113bb565b5b6119238782880161187e565b91505092959194509250565b60008060408385031215611946576119456113b6565b5b60006119548582860161160c565b92505060206119658582860161160c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119b657607f821691505b602082108114156119ca576119c961196f565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611a2c602c83611486565b9150611a37826119d0565b604082019050919050565b60006020820190508181036000830152611a5b81611a1f565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611abe602183611486565b9150611ac982611a62565b604082019050919050565b60006020820190508181036000830152611aed81611ab1565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000611b50603883611486565b9150611b5b82611af4565b604082019050919050565b60006020820190508181036000830152611b7f81611b43565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000611be2603183611486565b9150611bed82611b86565b604082019050919050565b60006020820190508181036000830152611c1181611bd5565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000611c74602983611486565b9150611c7f82611c18565b604082019050919050565b60006020820190508181036000830152611ca381611c67565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611d06602a83611486565b9150611d1182611caa565b604082019050919050565b60006020820190508181036000830152611d3581611cf9565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611d72601983611486565b9150611d7d82611d3c565b602082019050919050565b60006020820190508181036000830152611da181611d65565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611e04602f83611486565b9150611e0f82611da8565b604082019050919050565b60006020820190508181036000830152611e3381611df7565b9050919050565b600081905092915050565b6000611e508261147b565b611e5a8185611e3a565b9350611e6a818560208601611497565b80840191505092915050565b6000611e828285611e45565b9150611e8e8284611e45565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611ef6602c83611486565b9150611f0182611e9a565b604082019050919050565b60006020820190508181036000830152611f2581611ee9565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b6000611f88602983611486565b9150611f9382611f2c565b604082019050919050565b60006020820190508181036000830152611fb781611f7b565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061201a602483611486565b915061202582611fbe565b604082019050919050565b600060208201905081810360008301526120498161200d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061208a82611536565b915061209583611536565b9250828210156120a8576120a7612050565b5b828203905092915050565b60006120be82611536565b91506120c983611536565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120fe576120fd612050565b5b828201905092915050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612165603283611486565b915061217082612109565b604082019050919050565b6000602082019050818103600083015261219481612158565b9050919050565b60006121a682611536565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121d9576121d8612050565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061221e82611536565b915061222983611536565b925082612239576122386121e4565b5b828204905092915050565b600061224f82611536565b915061225a83611536565b92508261226a576122696121e4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006122cb826122a4565b6122d581856122af565b93506122e5818560208601611497565b6122ee816114ca565b840191505092915050565b600060808201905061230e60008301876115cb565b61231b60208301866115cb565b61232860408301856116e1565b818103606083015261233a81846122c0565b905095945050505050565b600081519050612354816113ec565b92915050565b6000602082840312156123705761236f6113b6565b5b600061237e84828501612345565b9150509291505056fea2646970667358221220d8133f7aa9f2e76e7e76135bdb1e65332ac781b44f345da5b1983a821d68e5f164736f6c634300080c0033";

type TestERC721AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC721AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC721A__factory extends ContractFactory {
  constructor(...args: TestERC721AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestERC721A & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestERC721A__factory {
    return super.connect(runner) as TestERC721A__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC721AInterface {
    return new Interface(_abi) as TestERC721AInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestERC721A {
    return new Contract(address, _abi, runner) as unknown as TestERC721A;
  }
}
