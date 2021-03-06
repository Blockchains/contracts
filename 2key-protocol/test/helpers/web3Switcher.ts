import createWeb3 from "./_web3";
import {rpcUrls} from "../constants/smallConstants";
const { env } = process;
import {generateMnemonic} from "bip39";


// @ts-ignore
const web3Switcher = {
  deployer: () => createWeb3(env.MNEMONIC_DEPLOYER, rpcUrls),
  aydnep: () => createWeb3(env.MNEMONIC_AYDNEP, rpcUrls),
  gmail: () => createWeb3(env.MNEMONIC_GMAIL, rpcUrls),
  test4: () => createWeb3(env.MNEMONIC_TEST4, rpcUrls),
  renata: () => createWeb3(env.MNEMONIC_RENATA, rpcUrls),
  uport: () => createWeb3(env.MNEMONIC_UPORT, rpcUrls),
  gmail2: () => createWeb3(env.MNEMONIC_GMAIL2, rpcUrls),
  aydnep2: () => createWeb3(env.MNEMONIC_AYDNEP2, rpcUrls),
  test: () => createWeb3(env.MNEMONIC_TEST, rpcUrls),
  buyer: () => createWeb3(env.MNEMONIC_BUYER, rpcUrls),
  guest: () => createWeb3('mnemonic words should be here but for some reason they are missing', rpcUrls),
  nikola: () => createWeb3(env.MNEMONIC_NIKOLA,rpcUrls),
  guest_user: () => createWeb3(generateMnemonic(),rpcUrls)
};

export default web3Switcher;
