import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/SampleView.vue')
      },
      {
        name: 'Page1',
        path: 'page1',
        component: () => import('@/views/Example.vue')
      },

    ]
  },
  {
    path: '/welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/Error404.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
]

export default routes
