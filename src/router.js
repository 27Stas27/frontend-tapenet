import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feed',
      name: 'Feed',
      component: () => import(/* webpackChunkName: "about" */ './views/Feed.vue')
    },
    {
      path: '/discover',
      name: 'Discover',
      component: () => import(/* webpackChunkName: "about" */ './views/Discover.vue')
    }
  ]
})
