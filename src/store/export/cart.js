export default {
  state: {
    products: []
  },
  mutations: {
    addToCart(state, obj){
      //console.log(state.products)
      state.products.push(obj)
    },
    changeCountCart(state, obj){
      for(var i = 0; i < state.products.length; i++){
        if((state.products[i].id == obj.id) && (state.products[i].size == obj.size)){
          if(obj.action == 'plus') state.products[i].count++
          else if(obj.action == 'minus') {
            if(state.products[i].count == 1) continue
            else state.products[i].count--
          }
          continue
        }
      }
    },
    deleteProduct(state, id){
      for(var i = 0; i < state.products.length; i++){
        if(state.products[i].id == id){
          state.products.splice(i, 1)
          continue
        }
      }
    }
  },
  actions: {
    addToCart(context, obj){
      context.commit('addToCart', obj)
    },
    changeCountCart(context, obj){
      context.commit('changeCountCart', obj)
    },
    deleteProduct(context, id){
      context.commit('deleteProduct', id)
    }
  },
  getters: {
    CART_COUNT: state => {
      return state.products
    }
  }
}
