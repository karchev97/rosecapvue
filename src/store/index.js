import Vue from 'vue'
import Vuex from 'vuex'
import MainSlider from '@/store/export/mainSlider'
import PopProducts from '@/store/export/popProducts'
import Cart from '@/store/export/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MainSlider,
    PopProducts,
    Cart
  }
})
