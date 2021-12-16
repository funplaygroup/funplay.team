<template>
  <div class="home">
    <div class="header">
      <a-row v-if="ismOrpc === 'PCoperation'">
        <a-col :xs="4">
          <div class="logo"></div>
        </a-col>
        <a-col :xs="16"> </a-col>
        <a-col :xs="4">
          <div class="tab">
            <div class="tab-home">HOME</div>
            <div class="tab-about">ABOUT AS</div>
            <div class="tab-contact">CONTACT</div>
          </div>
        </a-col>
      </a-row>

      <a-row v-if="ismOrpc === 'Moperation'">
        <a-col :xs="4">
          <div class="logo"></div>
        </a-col>
        <a-col :xs="16"> </a-col>
        <a-col :xs="4"> </a-col>
      </a-row>
    </div>
    <a-row v-if="ismOrpc === 'PCoperation'" class="banner-row-pc"> </a-row>
    <a-row v-if="ismOrpc === 'Moperation'" class="banner-row-mc"> </a-row>
    <a-row v-if="ismOrpc === 'PCoperation'" class="about-row-pc">
      <div class="about-title">ABOUT US</div>
      <div class="about-desc">
        We are a funny community!<br />
        We are a win-win community!<br />
        We will lead more people into the meta universe!
      </div>
    </a-row>
    <a-row v-if="ismOrpc === 'Moperation'" class="about-row-mc">
      <div class="about-title">ABOUT US</div>
      <div class="about-desc">
        We are a funny community!<br />
        We are a win-win community!<br />
        We will lead more people into the meta universe!
      </div>
    </a-row>
    <a-row v-if="ismOrpc === 'PCoperation'" class="sub-row-pc">
      <div class="sub-title">Get the latest news about us!</div>
      <div class="sub-form">
        <a-input placeholder="Enter you email" class="sub-input" v-model="input" />
        <div class="sub-btn" @click="onClick">Subscribe</div>
      </div>
    </a-row>
    <a-row v-if="ismOrpc === 'Moperation'" class="sub-row-mc">
      <div class="sub-title-mc">Get the latest news about us!</div>
      <div class="sub-form-mc">
        <a-input placeholder="Enter you email" class="sub-input-mc" v-model="input" />
        <div class="sub-btn-mc" @click="onClick">Subscribe</div>
      </div>
    </a-row>
    <a-row class="footer-row-pc">
      <div class="footer-logo-pc"></div>
      <div class="footer-community-pc"></div>
    </a-row>
  </div>
</template>

<script>
import { isMobile_pc } from "../../utils/tools";
export default {
  data() {
    return {
      ismOrpc: "",
      input: "",
    };
  },
  created() {
    if (isMobile_pc()) {
      //手机端
      this.ismOrpc = "Moperation";
    } else {
      //pc端

      this.ismOrpc = "PCoperation";
    }
    console.log(this.ismOrpc);
  },
  methods: {
    onClick() {
      if (this.input != "") {
        this.openNotificationWithIcon("success", "Success", "Successfully subscribed！");
      } else {
        this.openNotificationWithIcon("warning", "Warning", "Please input your email");
      }
    },
    openNotificationWithIcon(type, message, desc) {
      this.$notification[type]({
        message: message,
        description: desc,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  background-color: gray;
  .header {
    height: 60px;
    background-color: #000000;
    /deep/.ant-row,
    .ant-col {
      height: 100%;
      .logo {
        width: 60px;
        height: 60px;
        background-color: #e61f19;
        background-image: url("../../assets/images/logo.png");
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .tab {
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tab-home {
          border-bottom: 1px solid #e61f19;
          color: #e61f19;
        }
      }
    }
  }
  .banner-row-pc {
    width: 100%;
    height: 900px;
    background-image: url("../../assets/images/pcBanner.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    // /deep/.ant-col {
    //   height: 100%;
    // }
  }
  .banner-row-mc {
    width: 100%;
    height: 769px;
    background-image: url("../../assets/images/mcBanner.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    // /deep/.ant-col {
    //   height: 100%;
    // }
  }
  .about-row-pc {
    height: 250px;
    background-color: #121212;
    .about-title {
      text-align: center;
      color: white;
      font-weight: 600;
      font-size: 36px;

      padding-top: 20px;
    }
    .about-desc {
      text-align: center;

      color: white;
      font-size: 26px;
      padding-top: 20px;
    }
  }
  .about-row-mc {
    min-height: 200px;
    background-color: #121212;
    .about-title {
      text-align: center;
      color: white;
      font-weight: 600;
      font-size: 32px;
      padding-top: 20px;
    }
    .about-desc {
      text-align: center;

      color: white;
      font-size: 18px;
      padding-top: 20px;
    }
  }
  .sub-row-pc {
    width: 100%;
    height: 290px;
    background-color: #e61f19;
    .sub-title {
      width: 30%;

      text-align: center;
      font-size: 36px;
      color: white;
      font-weight: 600;
      padding-top: 20px;
      margin: 0 auto;
      margin-top: 40px;
    }
    .sub-form {
      width: 28%;
      height: 32px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 20px;
    }
    .sub-input {
      width: 50%;
    }
    .sub-btn {
      width: 170px;
      height: 100%;
      background-color: #000000;
      color: white;
      text-align: center;
      line-height: 32px;
    }
    .sub-btn:hover {
      cursor: pointer;
    }
  }
  .sub-row-mc {
    height: 160px;
    background-color: #e61f19;
    padding-top: 20px;
    .sub-title-mc {
      text-align: center;
      color: white;

      font-size: 24px;
    }
    .sub-form-mc {
      width: 60%;

      margin: 0 auto;
    }
    .sub-input-mc {
      width: 100%;
      margin: 0 auto;
      margin-top: 10px;
    }
    .sub-btn-mc {
      background-color: #000000;
      color: white;
      text-align: center;
      margin: 0 auto;

      margin-top: 10px;
      height: 30px;
      width: 80%;
      line-height: 32px;
    }
  }
  .footer-row-pc {
    height: 300px;
    background: #000;
    .footer-logo-pc {
      height: 60px;
      width: 60px;
      background-color: #e61f19;
      margin: 0 auto;
      margin-top: 20px;
      background-image: url("../../assets/images/logo.png");
      background-size: 70%;

      background-repeat: no-repeat;
      background-position: center;
    }
    .footer-community-pc {
      width: 307px;
      height: 101px;
      background-image: url("../../assets/images/community-icon-pc.png");
      background-repeat: no-repeat;
      background-size: contain;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
}
</style>
