import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuOpened: true,
    isMoviesOverviewOpened: true,
    userName: 'johndoe2000',
    userTotalStars: 8,
    userProgreesBarValue: 66,
    totalMovies: '1,846',
    totalMoviesSeen: '1,402',
    totalMoviesUntilNextLevel: '546',
    totalMoviesProgressBarValue: 86,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
    TOGGLE_MOVIES_OVERVIEW(state) {
      state.isMoviesOverviewOpened = !state.isMoviesOverviewOpened;
    },
  },
  actions: {},
  modules: {},
});
