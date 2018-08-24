/* GENERATED BY TYPECHAIN VER. 0.2.6 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import * as TC from "./typechain-runtime";

export class ERC20Basic extends TC.TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "from", type: "address" },
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_who", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<ERC20Basic> {
    const contract = new ERC20Basic(web3, address);
    const code = await TC.promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get totalSupply(): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.totalSupply, []);
  }

  public balanceOf(_who: BigNumber | string): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.balanceOf, [_who.toString()]);
  }

  public transferTx(
    _to: BigNumber | string,
    _value: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "transfer", [
      _to.toString(),
      _value.toString()
    ]);
  }

  public TransferEvent(eventFilter: {
    from?: BigNumber | string | Array<BigNumber | string>;
    to?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    {
      from: BigNumber | string;
      to: BigNumber | string;
      value: BigNumber | number;
    },
    {
      from?: BigNumber | string | Array<BigNumber | string>;
      to?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        from: BigNumber | string;
        to: BigNumber | string;
        value: BigNumber | number;
      },
      {
        from?: BigNumber | string | Array<BigNumber | string>;
        to?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Transfer", eventFilter);
  }
}
