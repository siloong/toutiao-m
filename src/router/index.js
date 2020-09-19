import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('@/views/question/')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/profile/')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
