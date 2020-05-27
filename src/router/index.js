import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    alias: '/dashboard',
    children: [
      {
        path: '/dashboard/add-new-movie',
        name: 'AddNewMovie',
        component: () => import('../views/AddNewMovie.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'nav-bar__link--active',
  routes,
});

export default router;
