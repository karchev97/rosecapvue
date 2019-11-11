<template>
  <!-- Слайдер -->
    <article class="slider">
      <div class="main-slider">
        <nav class="main-slider__nav-items">
          <ul class="main-slider__nav-item">
            <li v-for="(slide, key) in slides" :class="{active: (key == siSHowid)}" @click="goSlide(key)"></li>
          </ul>
        </nav>
        <section class="main-slider-content">
          <transition enter-active-class="animated fadeIn">
            <h1 class="main-slider-content__title" :key="slides[siSHowid].title">{{ slides[siSHowid].title }}</h1>
          </transition>
          <transition enter-active-class="animated fadeInDown">
          <strong class="main-slider-content__strong-text" :key="slides[siSHowid].sub_title">{{ slides[siSHowid].sub_title }}</strong>
          </transition>
          <div class="main-slider-content__default-text" :key="slides[siSHowid].description">{{ slides[siSHowid].description }}</div>
          <ul class="main-slider-content__price-items" :key="slides[siSHowid].price">
            <li>Цена: {{ slides[siSHowid].price }} руб</li>
            <li><a :href="slides[siSHowid].link_to"><span class="ti-shopping-cart-full"></span> Добавить в корзину</a></li>
          </ul>
        </section>
      </div>
      
    </article>
</template>

<script>
export default {
  data(){
    return{
      siSHowid: 0,
      timer: '',
      slides: [
        {
          title: "Full winter kit",
          sub_title: "Какой-то дополнительный текст",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          price: "10.000",
          link_to: "#"
        },
        {
          title: "Another title for example",
          sub_title: "Какой-то дополнительный текст 2",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit 2",
          price: "130.000",
          link_to: "#"
        },
        {
          title: "Revolution product",
          sub_title: "Подзаголовок продаваемого товара",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit 2",
          price: "99.000",
          link_to: "#"
        }
      ]
    }
  },
  methods: {
    goSlide: function(id){
      this.siSHowid = id;
      clearInterval(this.timer);
      this.autoSlde();
    },
    autoSlde: function(){
      this.timer = setInterval(function(){
        ((this.slides.length - 1) == this.siSHowid) ? this.siSHowid = 0 : this.siSHowid++;
      }.bind(this), 7000)
    }
  },
  computed: {
    
  },
  beforeMount(){
    this.autoSlde();
  }
}
</script>

<style lang="scss">
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
