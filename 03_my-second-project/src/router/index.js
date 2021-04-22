import Vue from 'vue'
import VueRouter from 'vue-router'
// const TheMealList = require('경로')
import TheLunch from '../views/TheLunch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/meal',
    name: 'Meal',
    component: TheLunch
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
