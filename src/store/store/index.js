import Vue from "vue";
import Vuex from "vuex";
import Provider from "./module/provider";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Provider,
  },
});
