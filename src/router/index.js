import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(''),
    redirect: '/',
    children: [
      {
        path: '/sample',
        name: 'sample',
        component: () => import('')
      }
    ]
  }
]

const router = new VueRouter({routes});

export default router;