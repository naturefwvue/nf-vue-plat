import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import listPage from '../views/DockList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list/:pageId',
    name: 'listPage',
    meta: { title: '列表页面' },
    props: true,
    component: listPage
    // components: {
    //  default: () => import('../views/classical/question-main-introduce.vue'),
    //  answerList: () => import('../views/classical/question-main-answers.vue')
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
