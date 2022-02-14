import Web3 from "web3";

export const simpleRpcProvider = new Web3(new Web3.providers.HttpProvider(process.env.VUE_APP_RPC_URLS));

export default null;
