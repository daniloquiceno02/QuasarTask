import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/LoginPage.vue'),
    // component: () => import('layouts/MainLayout.vue'),
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/Register',
    component: () => import('pages/RegisterPage.vue'),
    // component: () => import('layouts/MainLayout.vue'),
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/Task',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/TaskPage.vue') }],
  },
  {
    path: '/Panel',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PanelPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
