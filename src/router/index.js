import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: () => import( /* webpackChunkName: "home" */ '../views/Home'),
  redirect: '/recommend',
  children: [{
      path: 'recommend',
      name: 'recommend',
      component: () => import( /* webpackChunkName: "recommend" */ '../views/Recommend')
    },
    {
      path: 'singers',
      name: 'singers',
      component: () => import( /* webpackChunkName: "singers" */ '../views/Singers')
    },
    {
      path: 'rank',
      name: 'rank',
      component: () => import( /* webpackChunkName: "rank" */ '../views/Rank.vue')
    }
  ]
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router