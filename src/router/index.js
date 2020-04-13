import Vue from 'vue'
import VueRouter from 'vue-router'

import EventList from '../views/EventList.vue'
import EventCreate from '../views/EventCreate.vue'
import EventShow from '../views/EventShow.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  }
  // {
  //   path: '/about-us',
  //   name: 'About',
  //   component: About
  // },
  // {
  //   path: '/about',
  //   redirect: { name: 'About' }
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
