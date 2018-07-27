import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/msite/Msite'
import Order from '@/pages/order/Order'
import Profile from '@/pages/profile/Profile'
import Search from '@/pages/search/Search'

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
