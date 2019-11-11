<template>
  <main>
    <MainSlider></MainSlider>
    <PopProducts></PopProducts>
    <SubScribe></SubScribe>
  </main>
</template>

<script>
import MainSlider from '@/components/main/MainSlider'
import PopProducts from '@/components/main/PopProducts'
import SubScribe from '@/components/main/SubScribe'

export default {
  components: {
    MainSlider,
    PopProducts,
    SubScribe
  }
}
</script>
