<template>
  <div class="home-index">
    <div class="header">
      <div class="left"></div>
      <div class="mid">
        <div class="text">FunPlay</div>
        <div class="text" @click="goAnchor('team')">Team</div>
        <div class="text" @click="goAnchor('road')">Roadmap</div>
        <div class="text" @click="goAnchor('faq')">FAQ</div>
        <div class="text" @click="openLink">WhitePaper</div>
      </div>
      <div class="right">
        <div class="connect" @click="onConnect" v-if="connect === 'CONNECT WALLET'">CONNECT WALLET</div>
        <div class="connected" v-else>{{ connect }}</div>

        <div class="link">
          <div class="discord" @click="onLink('discord')"></div>
          <div class="twitter" @click="onLink('twitter')"></div>
        </div>
      </div>
    </div>
    <div class="mint">
      <div class="text1"></div>
      <div class="text2"></div>
      <div class="mask"></div>
      <div class="logo"></div>
    </div>
    <div class="mint-text">
      <div class="mint-text-num">7777</div>
      <div class="mint-text-mark">coming soon!</div>
    </div>
    <div class="mint-btn" @click="onMint">MINT</div>
    <div class="scroll">
      <vue-seamless-scroll :data="listData" class="warp" :class-option="classOption">
        <ul class="item">
          <li v-for="(item, index) in listData" :key="index">
            <span class="title" v-text="item"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
    <div class="whitepaper" id="whitepaper">
      <div class="whitepaper-title">FunPlay</div>
      <div class="whitepaper-block"></div>
      <div class="whitepaper-content">
        <div class="content-left"></div>
        <div class="content-right">
          <div class="content-right-line1">The Next Generation</div>
          <div class="content-right-line2">DAO-based Game Community</div>
          <div class="content-right-line3">whitepaper</div>
        </div>
      </div>
    </div>
    <div class="road" id="road">
      <div class="logo"></div>
      <div class="roadlogo"></div>
      <div class="roadline"></div>
      <div class="roadtext"></div>
    </div>
    <div class="team" id="team"></div>
    <div class="faq" id="faq">
      <div class="faq-logo"></div>
      <a-collapse v-model="activeKey1" :expand-icon-position="expandIconPosition">
        <a-collapse-panel header="Why Was The Funplay Boy Created">
          <p>
            As the real world is not fair and full of stress, we all need some new IDs to achieve nice <br />
            environment in the virtual world like gamefi world. Then the Funplay Boy was created. It is the <br />ID
            that represents happiness, freedom, equality, simplicity and etc, which could become <br />better and better
            involved in the games.
          </p>
        </a-collapse-panel>
      </a-collapse>

      <a-collapse v-model="activeKey2" :expand-icon-position="expandIconPosition" style="margin-top: 20px">
        <a-collapse-panel header="What Role Does The Funplay Boy Nft Play?">
          <p>
            NFT owners can enjoy the distributed income, vote, and receive airdrops. NFT symbolizes the identity
            <br />of community members and is considered the pass to community activities. As the<br />
            community develops, the Governance NFT will gain better earnings, which can be transferred or <br />
            sold in the NFT market.
          </p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse v-model="activeKey3" :expand-icon-position="expandIconPosition" style="margin-top: 20px">
        <a-collapse-panel header="How To Get Whitelisted?">
          <p>
            Why Was The Funplay Boy Created? As the real world is not fair and full of stress, we all need some new IDs
            to achieve nice environment in the virtual world like gamefi world. Then the Funplay Boy was created. It is
            the ID that represents happiness, freedom, equality, simplicity and etc, which could become better and
            better involved in the games. What Role Does The Funplay Boy Nft Play? NFT owners can enjoy the distributed
            income, vote, and receive airdrops. NFT symbolizes the identity of community members and is considered the
            pass to community activities. As the community develops, the Governance NFT will gain better earnings, which
            can be transferred or sold in the NFT market. How To Get Whitelisted? Equality is the most important thing
            we consider. We will list all the process brightly and be supervised by the community. There will be many
            opportunities to gain a whitelist role, be helpful, be kind, and supportive of the community. More details
            will be listed on twitter and discord. When Will the Funplay Boy Launch? The release of the Funplay Boy is
            determined by the community itself or when our founders feel the community can support the project being
            released. Stay active and ensure to follow twitter and join discord and get notifications. Mint Amount &
            Price? The price to mint a Funplay Boy will be 0.05ETH with 1111 unique boy. How Many Nfts Can I Mint？ Each
            one will be able to mint up to 5 unique Funplay Boys.
          </p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse v-model="activeKey4" :expand-icon-position="expandIconPosition" style="margin-top: 20px">
        <a-collapse-panel header="When Will the Funplay Boy Launch?">
          <p>
            The release of the Funplay Boy is determined by the community itself or when our founders feel the community
            can support the project being released. Stay active and ensure to follow twitter and join discord and get
            notifications.
          </p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse v-model="activeKey5" :expand-icon-position="expandIconPosition" style="margin-top: 20px">
        <a-collapse-panel header="Mint Amount & Price?">
          <p>The price to mint a Funplay Boy will be 0.05ETH with 1111 unique boy.</p>
        </a-collapse-panel>
      </a-collapse>
      <a-collapse v-model="activeKey6" :expand-icon-position="expandIconPosition" style="margin-top: 20px">
        <a-collapse-panel header="How Many Nfts Can I Mint？">
          <p>Each one will be able to mint up to 5 unique Funplay Boys.</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="community">
      <div class="left"></div>
      <div class="right">
        <div class="discord" @click="onLink('discord')"></div>
        <div class="twitter" @click="onLink('twitter')"></div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { ellipsis, gasProcessing } from "../../utils/format";
import vueSeamlessScroll from "vue-seamless-scroll";
import { FunPlayInstance } from "../../request/abis/call";

export default {
  components: {
    vueSeamlessScroll,
  },

  data() {
    return {
      connect: "",
      listData: [
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
        "FunPlay",
      ],
      classOption: {
        direction: 2,
      },

      activeKey1: ["1"],
      activeKey2: ["1"],
      activeKey3: ["1"],
      activeKey4: ["1"],
      activeKey5: ["1"],
      activeKey6: ["1"],

      expandIconPosition: "right",
    };
  },
  computed: {
    account() {
      return this.$store.state.Provider.account;
    },
    net() {
      return this.$store.state.Provider.net;
    },
    web3Js() {
      return this.$store.state.Provider.web3Js;
    },
  },
  watch: {
    account() {
      this.connect = ellipsis(this.account);
    },
    activeKey(key) {
      console.log(key);
    },
    net() {
      console.log(this.net);
    },
  },
  created() {
    this.account ? (this.connect = ellipsis(this.account)) : (this.connect = "CONNECT WALLET");
  },
  methods: {
    onLink(type) {
      if (type === "discord") {
        window.open("https://discord.gg/4n6PWgSk", "_blank");
      } else if (type === "twitter") {
        window.open("https://twitter.com/funplaygroup", "_blank");
      }
    },
    onConnect() {
      this.$store.dispatch("Provider/setWebProvider");
    },
    async onMint() {
      console.log(this.net);
      if (this.net != 3) {
        this.$message.error("Please select the correct network!");
      } else {
        const FunPlayMethods = FunPlayInstance();
        let gas = await FunPlayMethods.methods
          .mintNFTDuringPresale(1)
          .estimateGas({ from: this.account, value: this.web3Js.utils.toWei("0.05", "ether") });
        console.log("gas", gas);
        let gasPrice = await this.web3Js.eth.getGasPrice().then((res) => {
          return res;
        });
        let res = await FunPlayMethods.methods.mintNFTDuringPresale(1).send({
          from: this.account,
          value: this.web3Js.utils.toWei("0.05", "ether"),
          gas: gasProcessing(gas),
          gasPrice: gasPrice,
        });
        console.log(res);
      }
    },
    goAnchor(id) {
      var anchor = document.getElementById(id);
      // chrome
      document.body.scrollTop = anchor.offsetTop;
      // firefox
      document.documentElement.scrollTop = anchor.offsetTop;
      // safari
      window.pageYOffset = anchor.offsetTop;
    },
    openLink() {
      window.open(
        "https://mirror.xyz/0xFBF5b83F534e54870E32f8969dd8F7836AD02CB9/WJJtO9Cal_6y3DI_nJ2JR_NpeKEfzIt78Jktv5hHk7k",
        "_blank",
      );
    },
  },
};
</script>

<style lang="less" scoped>
.home-index {
  width: 100%;
  height: 100%;
  .header {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 100px;
    }
    .mid {
      width: 580px;
      height: 40px;
      font-family: "nanum";
      display: flex;
      font-size: 22px;
      justify-content: space-between;
      align-items: center;
      color: white;
      .text {
        cursor: pointer;
      }
    }
    .right {
      width: 300px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .connect {
        width: 160px;
        height: 36px;
        background-color: #fbff33;
        color: #000000;
        font-family: "nanum";
        text-align: center;
        line-height: 36px;
        font-size: 22px;
      }
      .connected {
        width: 160px;
        height: 36px;
        background-color: #fbff33;
        color: #000000;
        font-family: "nanum";
        text-align: center;
        line-height: 36px;
        font-size: 22px;
      }
      .connect:hover {
        background-color: #f93fbd;
        cursor: pointer;
      }
      .link {
        width: 100px;
        height: 36px;
        display: flex;
        justify-content: space-around;

        .discord {
          width: 36px;
          height: 36px;
          background-image: url("../../assets/images/discord.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
        .discord:hover {
          cursor: pointer;
        }
        .twitter {
          width: 36px;
          height: 36px;
          background-image: url("../../assets/images/twitter.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
        .twitter:hover {
          cursor: pointer;
        }
      }
    }
  }
  .mint {
    height: 280px;
    width: 100%;
    padding-top: 250px;
    position: relative;
    .text1 {
      background-image: url("../../assets/images/FunPlay2.png");
      width: 975px;
      height: 155px;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 0 auto;
      background-position: center center;
    }
    .text2 {
      background-image: url("../../assets/images/FunPlay1.png");
      width: 975px;
      height: 155px;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 0 auto;
      background-position: center center;
      margin-top: -50px;
    }
    .mask {
      width: 347px;
      height: 475px;
      background-image: url("../../assets/images/mask.png");
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      left: 50%;
      margin-left: -170px;
    }
    .logo {
      width: 175px;
      height: 175px;
      background-image: url("../../assets/images/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 50px;
      left: 400px;
    }
  }
  .mint-text {
    color: #fbff33;
    height: 52px;
    width: 310px;
    margin: 0 auto;
    margin-top: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .mint-text-num {
      font-size: 28px;
      font-weight: 600;
    }
    .mint-text-mark {
      font-size: 28px;
      font-family: "nanum";
    }
  }
  .mint-btn {
    width: 250px;
    height: 60px;
    background-color: #fbff33;
    margin: 0 auto;
    font-family: "nanum";
    font-size: 42px;
    text-align: center;
    line-height: 60px;
  }
  .mint-btn:hover {
    cursor: pointer;
  }
  .scroll {
    width: 100%;
    height: 30px;
    margin-top: 50px;
    border-bottom: 1px solid #fbff33;
    border-top: 1px solid #fbff33;
    .warp {
      height: 100%;
      width: 100%;
      overflow: hidden;
      color: white;
      ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        display: flex;

        li,
        a {
          display: block;
          height: 30px;
          line-height: 30px;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          margin-left: 50px;
          font-family: "nanum";
          color: #fbff33;
        }
      }
    }
  }
  .whitepaper {
    height: 400px;
    width: 100%;
    margin-top: 50px;

    .whitepaper-title {
      color: white;
      font-family: "nanum";
      font-size: 60px;
      text-align: center;
    }
    .whitepaper-block {
      width: 72px;
      height: 17px;
      background-color: #f93fbd;
      margin: 0 auto;
    }
    .whitepaper-content {
      height: 240px;
      width: 1000px;
      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      .content-left {
        width: 240px;
        height: 240px;
        background-image: url("../../assets/images/logo2.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
      .content-right {
        width: 600px;
        height: 100%;
        background-color: pink;
        padding-left: 20px;
        border: 0px solid #fbff33;
        background: linear-gradient(to left, #fbff33, #fbff33) left top no-repeat,
          linear-gradient(to bottom, #fbff33, #fbff33) left top no-repeat,
          linear-gradient(to left, #fbff33, #fbff33) right top no-repeat,
          linear-gradient(to bottom, #fbff33, #fbff33) right top no-repeat,
          linear-gradient(to left, #fbff33, #fbff33) left bottom no-repeat,
          linear-gradient(to bottom, #fbff33, #fbff33) left bottom no-repeat,
          linear-gradient(to left, #fbff33, #fbff33) right bottom no-repeat,
          linear-gradient(to left, #fbff33, #fbff33) right bottom no-repeat;
        background-size: 2px 25px, 25px 2px, 2px 25px, 25px 2px;

        .content-right-line1 {
          font-size: 32px;
          color: white;
          margin-top: 50px;
        }
        .content-right-line2 {
          font-size: 32px;
          color: white;
          font-weight: 600;
        }
        .content-right-line3 {
          font-size: 24px;
          color: white;
          font-family: "nanum";
          color: #fbff33;
        }
      }
    }
  }
  .road {
    height: 700px;
    width: 100%;
    margin-top: 150px;
    position: relative;
    .logo {
      width: 130px;
      height: 130px;
      background-image: url("../../assets/images/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      left: 60%;
    }
    .roadlogo {
      width: 257px;
      height: 115px;
      background-image: url("../../assets/images/roadlogo.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;

      top: 20%;
      left: 20%;
    }
    .roadline {
      width: 612px;
      height: 500px;
      background-image: url("../../assets/images/stepline.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;

      top: 20%;
      left: 20%;
    }
    .roadtext {
      width: 1000px;
      height: 500px;
      background-image: url("../../assets/images/steptext.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;

      top: 20%;
      left: 30%;
    }
  }
  .team {
    width: 854px;
    height: 825px;
    margin: 0 auto;
    background-image: url("../../assets/images/team.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .faq {
    min-height: 600px;
    width: 100%;
    .faq-logo {
      width: 145px;
      height: 105px;
      background-image: url("../../assets/images/faq.png");
      margin: 0 auto;
    }
  }
  .community {
    height: 90px;
    width: 65%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .left {
      width: 1034px;
      height: 90px;
      background-image: url("../../assets/images/logo-footer.png");
    }
    .right {
      width: 75px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      .twitter {
        width: 32px;
        height: 32px;
        background-image: url("../../assets/images/twitter.png");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .twitter:hover {
        cursor: pointer;
      }
      .discord {
        width: 32px;
        height: 32px;
        background-image: url("../../assets/images/discord.png");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .discord:hover {
        cursor: pointer;
      }
    }
  }
  .footer {
    height: 100px;
    width: 100%;
    background-image: url("../../assets/images/footer-bg.png");
    margin-top: 50px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .ant-collapse {
    width: 60%;
    background-color: #fbff33;
    border: 0px;
    margin: 0 auto;
    margin-top: 50px;
  }
  /deep/.ant-collapse-item:last-child > .ant-collapse-content {
    background-color: #fbff33;
    color: black;
  }
  /deep/.ant-collapse-header {
    font-weight: 600;
    font-size: 22px;
  }
  /deep/.ant-collapse-content {
    border: 0px;
  }
}
</style>
