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
  </div>
</template>

<script>
import { isMobile_pc } from "../../utils/tools";
export default {
  data() {
    return {
      ismOrpc: "",
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
  methods: {},
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
}
</style>
