import axios from 'axios';
import store from './store';

const config = {
  api: {
    baseURL: '/',
  },
};

/**
 * Main axios instance - use this rather then the node module
 */

const axiosInstance = axios.create({
  baseURL: config.api.baseURL,
  // withCredentials: true,
  headers: { 'content-type': 'application/json' },
});

axiosInstance.interceptors.request.use((axiosConfig) => {
  store.commit('IS_LOADING', true);
  return axiosConfig;
}, (error) => {
  store.commit('IS_LOADING', false);
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use((response) => {
  store.commit('IS_LOADING', false);
  return response;
}, (error) => {
  store.commit('IS_LOADING', false);
  return Promise.reject(error);
});

export default {
  install: (Vue) => {
    // eslint-disable-next-line no-param-reassign
    Vue.axios = axiosInstance;
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$axios = axiosInstance;
  },
};
