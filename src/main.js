import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n';
import axios from './axios';

Vue.config.productionTip = false;

Vue.use(axios);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
