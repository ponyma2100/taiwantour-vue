import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview/:city',
    name: 'Overview',
    component: Overview,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
