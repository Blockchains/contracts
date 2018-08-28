/* GENERATED BY TYPECHAIN VER. 0.2.7 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import * as TC from "./typechain-runtime";

export class WhitelistedCrowdsale extends TC.TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [
          { name: "_operator", type: "address" },
          { name: "_role", type: "string" }
        ],
        name: "checkRole",
        outputs: [],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "ROLE_WHITELISTED",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_operator", type: "address" },
          { name: "_role", type: "string" }
        ],
        name: "hasRole",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_operators", type: "address[]" }],
        name: "removeAddressesFromWhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_operator", type: "address" }],
        name: "removeAddressFromWhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "rate",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "weiRaised",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "wallet",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
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
        constant: false,
        inputs: [{ name: "_operator", type: "address" }],
        name: "addAddressToWhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        inputs: [{ name: "_operator", type: "address" }],
        name: "whitelist",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_operators", type: "address[]" }],
        name: "addAddressesToWhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_beneficiary", type: "address" }],
        name: "buyTokens",
        outputs: [],
        payable: true,
        stateMutability: "payable",
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
        constant: true,
        inputs: [],
        name: "token",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      { payable: true, stateMutability: "payable", type: "fallback" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "purchaser", type: "address" },
          { indexed: true, name: "beneficiary", type: "address" },
          { indexed: false, name: "value", type: "uint256" },
          { indexed: false, name: "amount", type: "uint256" }
        ],
        name: "TokenPurchase",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "operator", type: "address" },
          { indexed: false, name: "role", type: "string" }
        ],
        name: "RoleAdded",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "operator", type: "address" },
          { indexed: false, name: "role", type: "string" }
        ],
        name: "RoleRemoved",
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
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<WhitelistedCrowdsale> {
    const contract = new WhitelistedCrowdsale(web3, address);
    const code = await TC.promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get ROLE_WHITELISTED(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.ROLE_WHITELISTED, []);
  }

  public get rate(): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.rate, []);
  }

  public get weiRaised(): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.weiRaised, []);
  }

  public get wallet(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.wallet, []);
  }

  public get owner(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.owner, []);
  }

  public get token(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.token, []);
  }

  public checkRole(
    _operator: BigNumber | string,
    _role: string
  ): Promise<void> {
    return TC.promisify(this.rawWeb3Contract.checkRole, [
      _operator.toString(),
      _role.toString()
    ]);
  }

  public hasRole(
    _operator: BigNumber | string,
    _role: string
  ): Promise<boolean> {
    return TC.promisify(this.rawWeb3Contract.hasRole, [
      _operator.toString(),
      _role.toString()
    ]);
  }

  public whitelist(_operator: BigNumber | string): Promise<boolean> {
    return TC.promisify(this.rawWeb3Contract.whitelist, [_operator.toString()]);
  }

  public removeAddressesFromWhitelistTx(
    _operators: string[]
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "removeAddressesFromWhitelist",
      [_operators.map(val => val.toString())]
    );
  }
  public removeAddressFromWhitelistTx(
    _operator: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "removeAddressFromWhitelist",
      [_operator.toString()]
    );
  }
  public renounceOwnershipTx(): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "renounceOwnership",
      []
    );
  }
  public addAddressToWhitelistTx(
    _operator: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "addAddressToWhitelist",
      [_operator.toString()]
    );
  }
  public addAddressesToWhitelistTx(
    _operators: string[]
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "addAddressesToWhitelist",
      [_operators.map(val => val.toString())]
    );
  }
  public buyTokensTx(
    _beneficiary: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.IPayableTxParams> {
    return new TC.DeferredTransactionWrapper<TC.IPayableTxParams>(
      this,
      "buyTokens",
      [_beneficiary.toString()]
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

  public TokenPurchaseEvent(eventFilter: {
    purchaser?: BigNumber | string | Array<BigNumber | string>;
    beneficiary?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    {
      purchaser: BigNumber | string;
      beneficiary: BigNumber | string;
      value: BigNumber | number;
      amount: BigNumber | number;
    },
    {
      purchaser?: BigNumber | string | Array<BigNumber | string>;
      beneficiary?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        purchaser: BigNumber | string;
        beneficiary: BigNumber | string;
        value: BigNumber | number;
        amount: BigNumber | number;
      },
      {
        purchaser?: BigNumber | string | Array<BigNumber | string>;
        beneficiary?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "TokenPurchase", eventFilter);
  }
  public RoleAddedEvent(eventFilter: {
    operator?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    { operator: BigNumber | string; role: string },
    { operator?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new TC.DeferredEventWrapper<
      { operator: BigNumber | string; role: string },
      { operator?: BigNumber | string | Array<BigNumber | string> }
    >(this, "RoleAdded", eventFilter);
  }
  public RoleRemovedEvent(eventFilter: {
    operator?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    { operator: BigNumber | string; role: string },
    { operator?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new TC.DeferredEventWrapper<
      { operator: BigNumber | string; role: string },
      { operator?: BigNumber | string | Array<BigNumber | string> }
    >(this, "RoleRemoved", eventFilter);
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
