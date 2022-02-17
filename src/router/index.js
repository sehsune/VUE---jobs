import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import NotFound from '../views/NotFound.vue'
import JobsParameters from '../views/JobsParameters.vue'

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
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobsParameters',
    component: JobsParameters
  },
  // redirect //
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall 404 //
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
