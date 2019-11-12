export default {
  state: {
    products: []
  },
  mutations: {
    addToCart(state, obj){
      //console.log(this.getters.CART_COUNT)
      state.products.push(obj)
    }
  },
  actions: {
    addToCart(context, obj){
      context.commit('addToCart', obj)
    }
  },
  getters: {
    CART_COUNT: state => {
      return state.products
    }
  }
}
