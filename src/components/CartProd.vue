<template>
  <main>
    <Product></Product>
    <PopProducts></PopProducts>
    <SubScribe></SubScribe>
  </main>
</template>

<script>
import Product from '@/components/main/Product'
import PopProducts from '@/components/main/PopProducts'
import SubScribe from '@/components/main/SubScribe'

export default {
  components: {
    Product,
    PopProducts,
    SubScribe
  }
}
</script>
