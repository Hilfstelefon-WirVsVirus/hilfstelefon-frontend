import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const TASKS_ENDPOINT = 'https://api.myjson.com/bins/teuyw';

export default new Vuex.Store({
  state: {
    isLoading: false,
    email: '',
    tasks: [],
  },
  mutations: {
    IS_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    setEmail({ commit }, email) {
      return commit('SET_EMAIL', email);
    },
    setTasks({ commit }) {
      return Vue.axios.get(TASKS_ENDPOINT)
        .then(({ data }) => {
          commit('SET_TASKS', data);
        });
    },
  },
  getters: {
    email: (state) => state.email,
    allTasks: (state) => state.tasks,
  },
  modules: {
  },
});
