/* GENERATED BY TYPECHAIN VER. 0.2.7 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import * as TC from "./typechain-runtime";

export class TwoKeyReg extends TC.TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "owner2name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "", type: "bytes32" }],
        name: "name2owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "owner", type: "address" },
          { indexed: false, name: "name", type: "string" }
        ],
        name: "UserNameChanged",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "previousOwner", type: "address" }],
        name: "OwnershipRenounced",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "previousOwner", type: "address" },
          { indexed: true, name: "newOwner", type: "address" }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        constant: false,
        inputs: [
          { name: "_name", type: "string" },
          { name: "_sender", type: "address" }
        ],
        name: "addName",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_name", type: "string" }],
        name: "addNameByUser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_name", type: "string" }],
        name: "getName2Owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_sender", type: "address" }],
        name: "getOwner2Name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<TwoKeyReg> {
    const contract = new TwoKeyReg(web3, address);
    const code = await TC.promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get owner(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.owner, []);
  }

  public owner2name(arg0: BigNumber | string): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.owner2name, [arg0.toString()]);
  }

  public name2owner(arg0: string): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.name2owner, [arg0.toString()]);
  }

  public getName2Owner(_name: string): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.getName2Owner, [_name.toString()]);
  }

  public getOwner2Name(_sender: BigNumber | string): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.getOwner2Name, [
      _sender.toString()
    ]);
  }

  public renounceOwnershipTx(): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "renounceOwnership",
      []
    );
  }
  public transferOwnershipTx(
    _newOwner: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "transferOwnership",
      [_newOwner.toString()]
    );
  }
  public addNameTx(
    _name: string,
    _sender: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "addName", [
      _name.toString(),
      _sender.toString()
    ]);
  }
  public addNameByUserTx(
    _name: string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "addNameByUser",
      [_name.toString()]
    );
  }

  public UserNameChangedEvent(eventFilter: {}): TC.DeferredEventWrapper<
    { owner: BigNumber | string; name: string },
    {}
  > {
    return new TC.DeferredEventWrapper<
      { owner: BigNumber | string; name: string },
      {}
    >(this, "UserNameChanged", eventFilter);
  }
  public OwnershipRenouncedEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    { previousOwner: BigNumber | string },
    { previousOwner?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new TC.DeferredEventWrapper<
      { previousOwner: BigNumber | string },
      { previousOwner?: BigNumber | string | Array<BigNumber | string> }
    >(this, "OwnershipRenounced", eventFilter);
  }
  public OwnershipTransferredEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
    newOwner?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    { previousOwner: BigNumber | string; newOwner: BigNumber | string },
    {
      previousOwner?: BigNumber | string | Array<BigNumber | string>;
      newOwner?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      { previousOwner: BigNumber | string; newOwner: BigNumber | string },
      {
        previousOwner?: BigNumber | string | Array<BigNumber | string>;
        newOwner?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "OwnershipTransferred", eventFilter);
  }
}
