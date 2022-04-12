import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: 'home',
        alias: '',
        component: () => import('@/views/InterestedQuestion.vue')
      },
      {
        name: 'Profile',
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        name: 'FindQuestion',
        path: 'FindQuestion',
        component: () => import('@/views/FindQuestion.vue')
      },
      {
        name: 'AskQuestion',
        path: 'askQuestion',
        component: () => import('@/views/PostQuestion.vue')
      },
      {
        name: 'Users',
        path: 'Users',
        component: () => import('@/views/Users.vue')
      },
      {
        name: 'Page1',
        path: 'page1',
        component: () => import('@/views/Example.vue')
      },
      {
        name: 'Tags',
        path: 'tags/:name',
        component: () => import('@/views/TagPage.vue'),
        props: route => ({
          name: route.params.name
        })
      },


      {
        name: 'Question',
        path: 'questions/:id',
        component: () => import('@/views/Question.vue'),
        props: route => ({
          id: route.params.id
        })
      },

      {
        name: 'UserProfile',
        path: 'users/:id',
        component: () => import('@/views/userProfiles.vue'),
        props: route => ({
          id: route.params.id
        })
      }
    ]
  },

  // {
  //   name: 'Tag',
  //   path: 'tags/:name',
  //   component: () => import('@/views/TagPage.vue'),
  //   props: route => ({
  //     name: route.params.name
  //   })
  // },

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
