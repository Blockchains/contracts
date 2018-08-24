/* GENERATED BY TYPECHAIN VER. 0.2.6 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import * as TC from "./typechain-runtime";

export class TwoKeyEventSource extends TC.TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_owner", type: "address" },
          { indexed: false, name: "_campaign", type: "address" }
        ],
        name: "Created",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_campaign", type: "address" }
        ],
        name: "Joined",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_campaign", type: "address" },
          { indexed: true, name: "_escrow", type: "address" },
          { indexed: true, name: "_sender", type: "address" },
          { indexed: false, name: "_tokenID", type: "uint256" },
          { indexed: false, name: "_childContractID", type: "address" },
          { indexed: false, name: "_indexOrAmount", type: "uint256" }
        ],
        name: "Escrow",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_campaign", type: "address" },
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_amount", type: "uint256" }
        ],
        name: "Rewarded",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_campaign", type: "address" },
          { indexed: true, name: "_converter", type: "address" },
          { indexed: true, name: "_tokenID", type: "uint256" },
          { indexed: false, name: "_childContractID", type: "address" },
          { indexed: false, name: "_indexOrAmount", type: "uint256" }
        ],
        name: "Fulfilled",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_campaign", type: "address" },
          { indexed: true, name: "_converter", type: "address" },
          { indexed: true, name: "_tokenID", type: "uint256" },
          { indexed: false, name: "_childContractID", type: "address" },
          { indexed: false, name: "_indexOrAmount", type: "uint256" }
        ],
        name: "Cancelled",
        type: "event"
      },
      {
        constant: false,
        inputs: [{ name: "_owner", type: "address" }],
        name: "created",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_to", type: "address" }],
        name: "joined",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_campaign", type: "address" },
          { name: "_escrow", type: "address" },
          { name: "_sender", type: "address" },
          { name: "_tokenID", type: "uint256" },
          { name: "_childContractID", type: "address" },
          { name: "_indexOrAmount", type: "uint256" }
        ],
        name: "escrow",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_campaign", type: "address" },
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "rewarded",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_campaign", type: "address" },
          { name: "_converter", type: "address" },
          { name: "_tokenID", type: "uint256" },
          { name: "_childContractID", type: "address" },
          { name: "_indexOrAmount", type: "uint256" }
        ],
        name: "fulfilled",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_campaign", type: "address" },
          { name: "_converter", type: "address" },
          { name: "_tokenID", type: "uint256" },
          { name: "_childContractID", type: "address" },
          { name: "_indexOrAmount", type: "uint256" }
        ],
        name: "cancelled",
        outputs: [],
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
  ): Promise<TwoKeyEventSource> {
    const contract = new TwoKeyEventSource(web3, address);
    const code = await TC.promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public createdTx(
    _owner: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "created", [
      _owner.toString()
    ]);
  }
  public joinedTx(
    _to: BigNumber | string
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "joined", [
      _to.toString()
    ]);
  }
  public escrowTx(
    _campaign: BigNumber | string,
    _escrow: BigNumber | string,
    _sender: BigNumber | string,
    _tokenID: BigNumber | number,
    _childContractID: BigNumber | string,
    _indexOrAmount: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "escrow", [
      _campaign.toString(),
      _escrow.toString(),
      _sender.toString(),
      _tokenID.toString(),
      _childContractID.toString(),
      _indexOrAmount.toString()
    ]);
  }
  public rewardedTx(
    _campaign: BigNumber | string,
    _to: BigNumber | string,
    _amount: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "rewarded", [
      _campaign.toString(),
      _to.toString(),
      _amount.toString()
    ]);
  }
  public fulfilledTx(
    _campaign: BigNumber | string,
    _converter: BigNumber | string,
    _tokenID: BigNumber | number,
    _childContractID: BigNumber | string,
    _indexOrAmount: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "fulfilled", [
      _campaign.toString(),
      _converter.toString(),
      _tokenID.toString(),
      _childContractID.toString(),
      _indexOrAmount.toString()
    ]);
  }
  public cancelledTx(
    _campaign: BigNumber | string,
    _converter: BigNumber | string,
    _tokenID: BigNumber | number,
    _childContractID: BigNumber | string,
    _indexOrAmount: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "cancelled", [
      _campaign.toString(),
      _converter.toString(),
      _tokenID.toString(),
      _childContractID.toString(),
      _indexOrAmount.toString()
    ]);
  }

  public CreatedEvent(eventFilter: {
    _owner?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    { _owner: BigNumber | string; _campaign: BigNumber | string },
    { _owner?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new TC.DeferredEventWrapper<
      { _owner: BigNumber | string; _campaign: BigNumber | string },
      { _owner?: BigNumber | string | Array<BigNumber | string> }
    >(this, "Created", eventFilter);
  }
  public JoinedEvent(eventFilter: {
    _to?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    { _to: BigNumber | string; _campaign: BigNumber | string },
    { _to?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new TC.DeferredEventWrapper<
      { _to: BigNumber | string; _campaign: BigNumber | string },
      { _to?: BigNumber | string | Array<BigNumber | string> }
    >(this, "Joined", eventFilter);
  }
  public EscrowEvent(eventFilter: {
    _campaign?: BigNumber | string | Array<BigNumber | string>;
    _escrow?: BigNumber | string | Array<BigNumber | string>;
    _sender?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    {
      _campaign: BigNumber | string;
      _escrow: BigNumber | string;
      _sender: BigNumber | string;
      _tokenID: BigNumber | number;
      _childContractID: BigNumber | string;
      _indexOrAmount: BigNumber | number;
    },
    {
      _campaign?: BigNumber | string | Array<BigNumber | string>;
      _escrow?: BigNumber | string | Array<BigNumber | string>;
      _sender?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        _campaign: BigNumber | string;
        _escrow: BigNumber | string;
        _sender: BigNumber | string;
        _tokenID: BigNumber | number;
        _childContractID: BigNumber | string;
        _indexOrAmount: BigNumber | number;
      },
      {
        _campaign?: BigNumber | string | Array<BigNumber | string>;
        _escrow?: BigNumber | string | Array<BigNumber | string>;
        _sender?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Escrow", eventFilter);
  }
  public RewardedEvent(eventFilter: {
    _campaign?: BigNumber | string | Array<BigNumber | string>;
    _to?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    {
      _campaign: BigNumber | string;
      _to: BigNumber | string;
      _amount: BigNumber | number;
    },
    {
      _campaign?: BigNumber | string | Array<BigNumber | string>;
      _to?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        _campaign: BigNumber | string;
        _to: BigNumber | string;
        _amount: BigNumber | number;
      },
      {
        _campaign?: BigNumber | string | Array<BigNumber | string>;
        _to?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Rewarded", eventFilter);
  }
  public FulfilledEvent(eventFilter: {
    _campaign?: BigNumber | string | Array<BigNumber | string>;
    _converter?: BigNumber | string | Array<BigNumber | string>;
    _tokenID?: BigNumber | number | Array<BigNumber | number>;
  }): TC.DeferredEventWrapper<
    {
      _campaign: BigNumber | string;
      _converter: BigNumber | string;
      _tokenID: BigNumber | number;
      _childContractID: BigNumber | string;
      _indexOrAmount: BigNumber | number;
    },
    {
      _campaign?: BigNumber | string | Array<BigNumber | string>;
      _converter?: BigNumber | string | Array<BigNumber | string>;
      _tokenID?: BigNumber | number | Array<BigNumber | number>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        _campaign: BigNumber | string;
        _converter: BigNumber | string;
        _tokenID: BigNumber | number;
        _childContractID: BigNumber | string;
        _indexOrAmount: BigNumber | number;
      },
      {
        _campaign?: BigNumber | string | Array<BigNumber | string>;
        _converter?: BigNumber | string | Array<BigNumber | string>;
        _tokenID?: BigNumber | number | Array<BigNumber | number>;
      }
    >(this, "Fulfilled", eventFilter);
  }
  public CancelledEvent(eventFilter: {
    _campaign?: BigNumber | string | Array<BigNumber | string>;
    _converter?: BigNumber | string | Array<BigNumber | string>;
    _tokenID?: BigNumber | number | Array<BigNumber | number>;
  }): TC.DeferredEventWrapper<
    {
      _campaign: BigNumber | string;
      _converter: BigNumber | string;
      _tokenID: BigNumber | number;
      _childContractID: BigNumber | string;
      _indexOrAmount: BigNumber | number;
    },
    {
      _campaign?: BigNumber | string | Array<BigNumber | string>;
      _converter?: BigNumber | string | Array<BigNumber | string>;
      _tokenID?: BigNumber | number | Array<BigNumber | number>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        _campaign: BigNumber | string;
        _converter: BigNumber | string;
        _tokenID: BigNumber | number;
        _childContractID: BigNumber | string;
        _indexOrAmount: BigNumber | number;
      },
      {
        _campaign?: BigNumber | string | Array<BigNumber | string>;
        _converter?: BigNumber | string | Array<BigNumber | string>;
        _tokenID?: BigNumber | number | Array<BigNumber | number>;
      }
    >(this, "Cancelled", eventFilter);
  }
}
