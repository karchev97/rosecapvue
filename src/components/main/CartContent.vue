<template>
  <div class="table-content">
    <div v-if="products.length > 0">
      <h2>Корзина</h2>
      <table cellspacing="0" class="table-cart">
        <tr v-for="prod in products">
          <td><img :src="'/img/'+currentProd[prod.id].imgs[0]" :alt="currentProd[prod.id].title" width="20px"></td>
          <td>{{ currentProd[prod.id].title }}</td>
          <td>{{ prod.size }}</td>
          <td>
            <div class="product-params__count">
              <span class="count-num">Количество:</span>
              <span class="product-params__count-minus" @click="changeCount('minus', prod.id)"> - </span>
              <span class="product-params__count-num">{{ prod.count }}</span>
              <span class="product-params__count-plus" @click="changeCount('plus', prod.id)"> + </span>
            </div>
          </td>
          <td><strong>{{ currentProd[prod.id].price * prod.count}}</strong> руб.</td>
          <td><button class="delect-elem" @click="deleteProcut(prod.id)" type="button">Удалить</button></td>
        </tr>
      </table>
    </div>
    <h2 v-else>Ваша корзина пуста :(</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      products: this.$store.getters.CART_COUNT,
      currentProd: this.$store.getters.PRODUCTS
    }
  },
  methods: {
    changeCount: function(action, id){
      let obj = {id: id, action: action}
      this.$store.dispatch('changeCountCart', obj)
    },
    deleteProcut: function(id){
      this.$store.dispatch('deleteProduct', id)
    }
  },
  
}
</script>
