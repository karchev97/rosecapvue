<template>
  <div class="home">
    <Header></Header>
    <CartProd></CartProd>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import CartProd from '@/components/CartProd.vue'

  export default {
    name: 'home',
    components:{
      Header,
      CartProd
    }
  }

</script>
