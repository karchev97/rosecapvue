<template>
  <header class="header-class">
    <div class="full-width-block full-width-block--contact">
      <div class="contact-block">
        <ul class="contact-block__data">
          <li><span class="ti-email"></span> <a href="mailto:info@test.ru">info@test.ru</a></li>
          <li><span class="ti-headphone-alt"></span> <a href="tel:+7 (800) 555-35-35">8 (800) 555-35-35</a></li>
        </ul>
        <ul class="contact-block__soc-items">
          <li class="contact-block__soc-item"><a href="#"><span class="ti-twitter-alt"></span></a></li>
          <li class="contact-block__soc-item"><a href="#"><span class="ti-facebook"></span></a></li>
          <li class="contact-block__soc-item"><a href="#"><span class="ti-google"></span></a></li>
          <li class="contact-block__soc-item"><a href="#"><span class="ti-instagram"></span></a></li>
        </ul>
      </div>
    </div>
    
    <div class="full-width-block">
      <nav class="main-nav">
        <div class="nav-items">
          <span class="ti-view-list menu-icon" @click="isOpen = !isOpen"></span>
          <router-link to="/" class="nav-items__logo"><img src="/img/logo.png" alt="Логотип"></router-link>
          <transition name="slide-fade">
          <ul class="nav-items__ul-items" v-show="isOpen">
            <li class="nav-items__ul-item"><router-link to="/">Главная</router-link></li>
            <li class="nav-items__ul-item"><router-link to="/product">Продукция</router-link></li>
          </ul>
          </transition>
        </div>

        <ul class="shop-nav">
          <li class="shop-nav__item"><a href="#"><span class="ti-search"></span></a></li>
          <li class="shop-nav__item"><a href="#"><span class="ti-shopping-cart"></span></a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      isOpen: false
    }
  },
  methods: {
    showMenu: function(){
      (window.innerWidth < 800) ? this.isOpen = false : this.isOpen = true;
    }
  },
  created(){
    window.onresize = () => this.showMenu();
    this.showMenu();
  }
}
</script>
