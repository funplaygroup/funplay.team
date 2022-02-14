<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    net() {
      return this.$store.state.Provider.net;
    },
  },
  watch: {
    net() {
      console.log(this.net);
    },
  },
  beforeCreate() {
    this.$store.dispatch("Provider/setWebProvider");
  },
  create() {
    console.log(this.net);
  },
};
</script>

<style lang="less"></style>
