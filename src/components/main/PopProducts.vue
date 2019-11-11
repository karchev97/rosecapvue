<template>
  <article class="popProd">
      <div class="titles-block">
        <h2 class="titles-block__item-h2">Популярные <span>товары</span></h2>
        <h4 class="titles-block__item-h4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laborum!</h4>
      </div>

      <!-- Блок со слайдером -->
      <div class="products">
        <div class="pop-products">
          
          <!-- :style="{ 'margin-left': key == 0 ? (leftOffset != 0 ? leftOffset + 'px' : '1%') : ' ' }" -->
          <article class="pop-products-item" v-for="(product, key) in products" >
            <router-link :to="'product/'+product.id" class="pop-products-item__link">
              <div class="pop-products-item__img">
                  <img :src="'/img/'+product.imgs[0]" alt="Пальто">
                </div>
              <h3 class="pop-products-item__title">{{ product.title }}</h3>
              <h4 class="pop-products-item__price">{{ product.price }} руб.</h4>

            <div class="pop-products-item-choose">
              <div class="pop-products-item-choose__size">размеры : <span v-for="size in product.size">{{ size }} ,</span></div>

              <ul class="pop-products-item-choose__action-items">
                <li class="pop-products-item-choose__action-item"><span class="ti-shopping-cart"></span></li>
                <li class="pop-products-item-choose__action-item"><span class="ti-heart"></span></li>
              </ul>
            </div>
            </router-link>
          </article>

        </div>
        <!-- Навигация по слайдеру -->
        <ul class="pop-products-nav">
          <li class="pop-products-nav__item" @click="rlSlide('left')"><span class="ti-angle-left"></span></li>
          <li class="pop-products-nav__item" @click="rlSlide('right')"><span class="ti-angle-right"></span></li>
        </ul>
      </div>
    </article>
</template>

<script>
export default {
  data(){
    return {
      products: this.$store.getters.PRODUCTS,
      leftOffset: 0,
    }
  },
  methods: {
    rlSlide: function(action){
      var blockScroll = document.querySelector('.pop-products')
      var widthScroll = blockScroll.scrollWidth / this.products.length;
      console.log(widthScroll);

      var step = 0;
      const scroll = setInterval(function(){
        if(action == 'right'){
          blockScroll.scrollLeft += 10;
          step += 10;
          if(step >= widthScroll){
            console.log(blockScroll.scrollLeft);
            clearInterval(scroll);
          }
        } else{
          blockScroll.scrollLeft -= 10;
          step += 10;
          if(step >= widthScroll){
            console.log(blockScroll.scrollWidth);
            clearInterval(scroll);
          }
        }
        
      }, 15);
    }
  },
  beforeMount(){
    
  }
}
</script>
