import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/InterestedQuestion.vue')
      },
      {
        name: 'Profile',
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        name: 'Page1',
        path: 'page1',
        component: () => import('@/views/Example.vue')
      },
      {
        name: 'Question',
        path: 'questions/:id',
        component: () => import('@/views/Question.vue'),
        props: route => ({
          id: route.params.id
        })
      }
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
