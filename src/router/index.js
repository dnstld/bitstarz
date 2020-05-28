import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
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
    // only to progress bar simulation
    beforeEnter(routeTo, routeFrom, next) {
      setTimeout(() => {
        next();
      }, 3000);
    },
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

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.configure({ minimum: 0.5, showSpinner: false });
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
