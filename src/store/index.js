import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
  },
  mutations: {
    SET_EMAIL(state, email) {
      state.email = email;
    },
  },
  actions: {
    setEmail({ commit }, email) {
      return commit('SET_EMAIL', email);
    },
  },
  getters: {
    email: (state) => state.email,
  },
  modules: {
  },
});
