import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  }
    {
    path: '/OrderConfirm',
    name: 'OrderConfirm',
    component: OrderConfirm
  }
]

const router = new VueRouter({
  routes
})

export default router
