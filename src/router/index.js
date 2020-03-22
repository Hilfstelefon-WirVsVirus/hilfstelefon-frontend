import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import MyTasks from '../views/MyTasks.vue';
import AllTasks from '../views/AllTasks.vue';
import EditTask from '../views/EditTask.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: AllTasks,
      },
      {
        path: 'mytasks',
        component: MyTasks,
      },
      {
        path: 'edit/:id',
        component: EditTask,
      },
    ],
  },
  {
    path: '/impress',
    name: 'Impress',
    component: () => import(/* webpackChunkName: "impress" */ '../views/Impress.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
