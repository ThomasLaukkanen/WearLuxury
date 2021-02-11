import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      '5895af63-e246-42bc-b629-bf607f004da7': {
        name: 'Jacket',
        price: '2900'
      },
      'd6b95aeb-70ef-4a85-97d4-e916a2039cf9': {
        name: 'Bluse',
        price: '1200'
      },
      '94a1304a-8a25-459c-aa9a-e439e25261a9': {
        name: 'Dress',
        price: '2499'
      },
      '9a1a0092-ecd2-4504-a25f-2204c725da0c': {
        name: 'Shoe',
        price: '1900'
      },

      'f1a0821f-e80b-4939-acb2-b5104bf30aad': {
        name: 'Jacket',
        price: '2900'
      },
      '99f75432-4cf4-4e32-964a-1d4815d94f55': {
        name: 'Shirt',
        price: '1200'
      },
      'f8079e75-a3cf-42b3-90f0-f962d8cd1142': {
        name: 'Pants',
        price: '1900'
      },
      'e53eefe1-6e93-4336-8da0-5a6d699ce98e': {
        name: 'Shoe',
        price: '1900'
      }
    },
    inCart: []
  },
  mutations: {
    addCart(state, uuid) {
      state.inCart.push(uuid)
    }
    // ADD_TO_CART(state, uuid) {
    //  state.inCart.push(uuid)
    //}
  },
  actions: {
    //addToCart(context, uuid) {
    //  context.commit('ADD_TO_CART', uuid)
    // }
  },
  modules: {}
})
