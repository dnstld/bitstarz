import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuOpened: true,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
  actions: {},
  modules: {},
});
