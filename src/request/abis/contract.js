import { simpleRpcProvider } from "./provider";
import FunPlayAbi from "@/Abis/FunPlayNFT.json";
const getContract = (abi, address, provider) => {
  let signerOrProvider = provider != undefined ? provider : simpleRpcProvider;
  return new signerOrProvider.eth.Contract(abi, address);
};

export const getFunPlayAbi = (provider) => {
  return getContract(FunPlayAbi, process.env.VUE_APP_FUNPLAYNFT, provider);
};
