import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    }
  ]
})
