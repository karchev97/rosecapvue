<template>
  <article class="product-cart">
      <div :class="[ 'modal', showModal ? 'modal--show' : '', !modalError ? 'modal--red' : '']">
        <span v-if="modalError" class="ti-arrow-circle-down"></span>
        <span v-else class="ti-face-sad"></span>
        {{ textModal }}
      </div>
      <div class="product-slider">
        <div class="product-slider__main-img">
          <img :src="'/img/'+product.imgs[img]" alt="Пальто">
        </div>
        <ul class="product-slider__another-imgs">
          <li v-for="(img, key) in product.imgs" @click="changeImg(key)"><img :src="'/img/'+img" alt="Пальто"></li>
        </ul>
      </div>
      <div class="product-info">
        <h1 class="product-info__title">{{ product.title }}</h1>
        <h3 class="product-info__sub-title">{{ product.sub_title }}</h3>
        <p class="product-info__description">{{ product.description }}</p>
        <div class="product-params">
          <div class="product-params__size">
            <span class="product-params__text">Выберите размер:</span>
            <ul class="product-params__size-items">
              <li class="product-params__size-item" v-for="(size, key) in product.size">
                <span :class="{active: activeSize == key}" @click="chooseSize(key)">{{ size }}</span>
              </li>
            </ul>
          </div>
          <div class="product-params__count">
            <span>Количество:</span>
            <span class="product-params__count-minus" @click="minusCount()"> - </span>
            <span class="product-params__count-num">{{ count }}</span>
            <span class="product-params__count-plus" @click="plusCount()"> + </span>
          </div>
        </div>
        <div class="product-action">
          <h4 class="product-action__price">Цена: {{ product.price }} руб</h4>
          <button class="product-action__go-order" type="button" @click="addToCart()"><span class="ti-shopping-cart"></span> Добавить в корзину</button>
        </div>
      </div>
    </article>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      product: {},
      img: 0,
      activeSize: null,
      count: 1,
      showModal: false,
      modalError: null,
      textModal: '', 
      timer: ''
    }
  },
  methods: {
    changeImg: function(key){
      this.img = key
    },
    chooseSize: function(key){
      this.activeSize = key
    },
    minusCount: function(){
      if(this.count > 1) 
        this.count--
    },
    plusCount: function(){
      this.count++
    },
    addToCart: function(){
      clearTimeout(this.timer)

      if(this.activeSize == null){
        this.modalError = false
        this.textModal = 'Выберите пожалуйста размер'
      } 
      
      else{
        this.modalError = true
        let obj = {id: this.id, size: this.product.size[this.activeSize], count: this.count}
        
        for(var i = 0; i < this.$store.getters.CART_COUNT.length; i++){
          if((this.$store.getters.CART_COUNT[i].id == obj.id) && (this.$store.getters.CART_COUNT[i].size == obj.size)){
            this.modalError = false
            this.textModal = 'Вы уже добавили данный товар :('
            continue
          }
        }

        if(this.modalError){
          this.$store.dispatch('addToCart', obj)
          this.textModal = 'Товар был успешно добавлен в корзину'
        }
      }

      this.showModal = true
      this.timer = setTimeout(function(){
        this.showModal = false
      }.bind(this), 4000)
    },

    productInit: function(){
      this.id = this.$route.params.id
      this.count = 1
      for(var i = 0; i < this.$store.getters.PRODUCTS.length; i++){
        if(this.$store.getters.PRODUCTS[i].id == this.id){
          this.product = this.$store.getters.PRODUCTS[i];
          continue;
        }
      }
    }
  },
  beforeMount(){
    this.productInit();
  },
  watch: {
    $route:function () {
      this.activeSize = null
      this.productInit()
    }
  },
}
</script>
