import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const TASKS_ENDPOINT = 'https://api.myjson.com/bins/176m6w';

export default new Vuex.Store({
  state: {
    isLoading: false,
    email: '',
    tasks: [],
    selectedTasks: [],
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
    SELECT_TASK(state, taskId) {
      const selectedTask = state.tasks.find((task) => task.id === taskId);
      state.selectedTasks = [...new Set([...state.selectedTasks, selectedTask])];
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
    selectTask({ commit }, taskId) {
      return commit('SELECT_TASK', taskId);
    },
  },
  getters: {
    email: (state) => state.email,
    allTasks: (state) => state.tasks,
    selectedTasks: (state) => state.selectedTasks,
    openTasks: (state) => state.tasks.filter((task) => task.status === 'OPEN'),
    unassignedTasks: (state) => state.tasks.filter((task) => task.status === 'UNASSIGNED'),
    inProgressTasks: (state) => state.tasks.filter((task) => task.status === 'PROGRESS'),
  },
});
