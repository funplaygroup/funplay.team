import Web3 from "web3";
import { message } from "ant-design-vue";
export default {
  // state
  namespaced: "Provider",

  state: {
    provider: {},
    account: "",
    balance: "",
    net: 0,
    web3Js: "",
  },

  mutations: {
    SETPROVIDER: (state, provider) => {
      state.provider = provider;
    },
    SETACCOUNTS: (state, account) => {
      state.account = account;
    },
    SETNET: (state, net) => {
      state.net = net;
    },
    SETBALANCE: (state, balance) => {
      state.balance = balance;
    },
    SETWEB3: (state, web3Js) => {
      state.web3Js = web3Js;
    },
  },

  actions: {
    async setWebProvider({ commit }) {
      var web3Provider;
      if (typeof window.ethereum === "undefined") {
        //没安装MetMask钱包进行弹框提示
        message.warning("请安装MetaMask钱包!");
      } else if (window.ethereum) {
        try {
          // 请求用户授权
          web3Provider = window.ethereum;
          // await web3Provider.request({
          //   method: "wallet_addEthereumChain",
          //   params: [
          //     {
          //       chainId: process.env.VUE_APP_CHAIN_ID,
          //       chainName: process.env.VUE_APP_CHAIN_NAME,
          //       nativeCurrency: {
          //         name: "ETH",
          //         symbol: "eth",
          //         decimals: 18,
          //       },
          //       rpcUrls: [process.env.VUE_APP_RPC_URLS],
          //       blockExplorerUrls: [process.env.VUE_APP_EXPLORER_URL],
          //     },
          //   ],
          // });
          await web3Provider.enable();
        } catch (error) {
          console.log(error);
          // 用户不授权时
          console.error("User denied account access");
        }
      }
      //web3js就是你需要的web3实例
      const web3js = new Web3(web3Provider);
      commit("SETPROVIDER", web3js);
      commit("SETWEB3", web3js);

      web3js.eth.net.getId(function (error, result) {
        if (!error) {
          commit("SETNET", result);
        }
      });
      web3js.eth.getAccounts(function (error, result) {
        if (!error) {
          commit("SETACCOUNTS", result[0]);
          // web3js.eth.getBalance(result[0]).then((res) => {
          //   console.log(res, "余額");
          //   commit("SETBALANCE", res);
          // });
        }
      });
      if (web3Provider) {
        web3Provider.on("networkChanged", function (networkIDstring) {
          commit("SETNET", networkIDstring);
        });
        web3Provider.on("accountsChanged", function (accounts) {
          commit("SETACCOUNTS", accounts[0]);
          // 切换账户显示余额
        });
      }
    },
  },
};
