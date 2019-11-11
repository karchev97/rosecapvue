import Vue from 'vue'
import Vuex from 'vuex'
import MainSlider from '@/store/export/mainSlider'
import PopProducts from '@/store/export/popProducts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MainSlider,
    PopProducts
  }
})
