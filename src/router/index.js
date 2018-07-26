import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
