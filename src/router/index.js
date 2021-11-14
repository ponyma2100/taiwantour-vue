import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'
import Activity from '../views/Activity'
import Restaurant from '../views/Restaurant'
import Hotel from '../views/Hotel'

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
  {
    path: '/activity/:city',
    name: 'Activity',
    component: Activity,
    props: true
  },
  {
    path: '/restaurant/:city',
    name: 'Restaurant',
    component: Restaurant,
    props: true
  },
  {
    path: '/hotel/:city',
    name: 'Hotel',
    component: Hotel,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
