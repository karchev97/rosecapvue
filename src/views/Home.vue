<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Main from '@/components/Main.vue'

  export default {
    name: 'home',
    components:{
      Header,
      Main
    } 
  }

</script>
