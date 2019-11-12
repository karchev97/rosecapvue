<template>
  <div class="home">
    <Header></Header>
    <CartContent></CartContent>
  </div>
</template>

<script>

import Header from '@/components/header/Header.vue'
import CartContent from '@/components/main/CartContent.vue'

  export default {
    name: 'home',
    components:{
      Header,
      CartContent
    } 
  }

</script>
