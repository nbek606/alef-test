import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Preview from '../views/Preview.vue'

import { RouteName } from './util'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteName.Home,
    component: Home
  },
  {
    path: '/preview',
    name: RouteName.Preview,

    component: Preview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
