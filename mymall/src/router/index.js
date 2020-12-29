import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import Order from '@/components/Order'
import Goods from '@/components/Goods'
import Login from '@/components/Login'
import Registry from '@/components/Registry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    }
    
    // {
    //   path: '/registry',
    //   name: 'Registry',
    //   component: Registry
    // }
  ]
})
