<template>
  <div class="home" id = "home">
    <div class="header">
      <a-row v-if="ismOrpc === 'PCoperation'">
        <a-col :xs="4">
          <div class="logo"></div>
        </a-col>
        <a-col :xs="16"> </a-col>
        <a-col :xs="4">
          <div class="tab">
            <div id = "home_btn" @click="goAnchor('home','home_btn')">HOME</div>
            <div id = "about_btn" class="tab-about" @click="goAnchor('about','about_btn')">ABOUT AS</div>
            <!-- <div class="tab-contact" @click="goAnchor('contact')">CONTACT</div> -->
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
    <a-row v-if="ismOrpc === 'PCoperation'" class="banner-row-pc" id="banner">
    </a-row>
    <a-row v-if="ismOrpc === 'Moperation'" class="banner-row-mc" id="banner">
    </a-row>
    <a-row v-if="ismOrpc === 'PCoperation'" class="about-row-pc" id="about">
      <div class="about-title">ABOUT US</div>
      <div class="about-desc">
        We are a funny community!<br />
        We are a win-win community!<br />
        We will lead more people into the meta universe!
      </div>
    </a-row>
    <a-row v-if="ismOrpc === 'Moperation'" class="about-row-mc" id="about">
      <div class="about-title">ABOUT US</div>
      <div class="about-desc">
        We are a funny community!<br />
        We are a win-win community!<br />
        We will lead more people into the meta universe!
      </div>
    </a-row>
    <a-row v-if="ismOrpc === 'PCoperation'" class="sub-row-pc" id="contact">
      <div class="sub-title">Get the latest news about us!</div>
      <div class="sub-form">
        <a-input
          placeholder="Enter you email"
          class="sub-input"
          v-model="input"
        />
        <div class="sub-btn" @click="onClick">Subscribe</div>
      </div>
    </a-row>
    <a-row v-if="ismOrpc === 'Moperation'" class="sub-row-mc" id="contact">
      <div class="sub-title-mc">Get the latest news about us!</div>
      <div class="sub-form-mc">
        <a-input
          placeholder="Enter you email"
          class="sub-input-mc"
          v-model="input"
        />
        <div class="sub-btn-mc" @click="onClick">Subscribe</div>
      </div>
    </a-row>
    <a-row class="footer-row-pc">
      <!-- <div class="footer-logo-pc"></div> -->
      <div class="footer-community-pc-twitter" @click="toTwitter"></div>
      <div class="footer-community-pc-github" @click="toGithub"></div>
    </a-row>
    <!-- © 2021 Polygon technology -->
    <a-row class="footer-copyright">
      <div class="footer-copyright-txt">© 2021 funplay group</div>
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
  mounted() {
      for (var i = 0; i < 200; i++) {

      var starStyle =
        'animation: twinkle ' +
        (Math.random() * 5 + 5) +
        "s linear " +
        (Math.random() * 5 + 5) +
        "s infinite; top: " +
        Math.random() * document.getElementById("banner").clientHeight/3 +
        "px; left: " +
        Math.random() * document.getElementById("banner").clientWidth +
        'px;"';

      var abc = document.createElement('div');
      abc.className = 'star';
      abc.style.cssText = starStyle;
      var ref = document.getElementById('about');
      var  list = document.getElementById('home');
      list.insertBefore(abc, ref);
    }
  },
  methods: {
    onClick() {
      if (this.input != "") {
        this.openNotificationWithIcon(
          "success",
          "Success",
          "Successfully subscribed！"
        );
      } else {
        this.openNotificationWithIcon(
          "warning",
          "Warning",
          "Please input your email"
        );
      }
    },
    openNotificationWithIcon(type, message, desc) {
      this.$notification[type]({
        message: message,
        description: desc,
      });
    },
    goAnchor(id,btn_id) {
      if (btn_id == "home_btn") {
        var homebtn = document.getElementById("home_btn");
        homebtn.style.color="#ff0000"
        var aboutbtn = document.getElementById("about_btn");
        aboutbtn.style.color="#ffffff"
      } else{
        var homebtn = document.getElementById("home_btn");
        homebtn.style.color="#ffffff"
        var aboutbtn = document.getElementById("about_btn");
        aboutbtn.style.color="#ff0000"
      }
      var anchor = document.getElementById(id);
      // chrome
      document.body.scrollTop = anchor.offsetTop;
      // firefox
      document.documentElement.scrollTop = anchor.offsetTop;
      // safari
      window.pageYOffset = anchor.offsetTop;
    },
    toTwitter() {
      window.open("https://twitter.com/funplaygroup", "_blank");
    },
    toGithub() {
      window.open("https://github.com/funplaygroup", "_blank");
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
    width: 100%;
    position: fixed;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0);
    /deep/.ant-row,
    .ant-col {
      height: 100%;
      padding-top: 2px;

      .logo {
        width: 60px;
        height: 60px;
        display: fixed;
        background-image: url("../../assets/images/Group 19.png");
        background-repeat: no-repeat;
        background-size: contain;
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
      .tab:hover {
        cursor: pointer;
      }
    }
  }
  .banner-row-pc {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/pcBanner.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .banner-row-mc {
    width: 100%;
    height: 769px;
    background-image: url("../../assets/images/mcBanner.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .about-row-pc {
    height: 300px;
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
    height: 300px;
    background-color: #e61f19;
    .sub-title {
      min-width: 30%;

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
      margin-top: 30px;
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
    height: 150px;
    background: #000;
    display: flex;
    justify-content: center;
    .footer-community-pc-twitter {
      width: 50px;
      height: 50px;
      background-image: url("../../assets/images/twitter-svg.svg");
      background-repeat: no-repeat;
      background-size: contain;
      margin-top: 50px;
      margin-inline: 20px;
      cursor: pointer;
    }
    .footer-community-pc-github {
      width: 50px;
      height: 50px;
      background-image: url("../../assets/images/github-svg.svg");
      background-repeat: no-repeat;
      background-size: contain;
      margin-top: 50px;
      margin-inline: 20px;
      cursor: pointer;
    }
  }
  .footer-copyright{
    height: 50px;
    background: #000;
    display: flex;
    justify-content: center;
    .footer-copyright-txt{
      color: white;
    }
  }

}
</style>

<style>
.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255,255,255,0.0);
  border-radius: 5px;
}

  @keyframes twinkle {
    0% {
      transform: scale(1, 1);
      background: rgba(255, 255, 255, 0);
      animation-timing-function: ease-in;
    }
    60% {
      transform: scale(0.8, 0.8);
      background: rgba(255, 255, 255, 1);
      animation-timing-function: ease-out;
    }
    80% {
      background: rgba(255, 255, 255, 0);
      transform: scale(1, 1);
    }
    100% {
      background: rgba(255, 255, 255, 0);
      transform: scale(1, 1);
    }
  }

</style>
