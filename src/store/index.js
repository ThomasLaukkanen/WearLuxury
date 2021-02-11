import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      '5895af63-e246-42bc-b629-bf607f004da7': {
        brand: 'Dior',
        name: 'Jacket',
        price: '2900',
        items: 2,
        color: 'black',
        size: 'xl'
      },

      '94a1304a-8a25-459c-aa9a-e439e25261a9': {
        brand: 'Hugo boss',
        name: 'Dress',
        price: '2499',
        items: 5,
        color: 'red',
        size: 'sm'
      }
    }
  },
  mutations: {
    setCartItems(name) {
      this.state.cart(name)
    }
  },
  actions: {},
  modules: {}
})
