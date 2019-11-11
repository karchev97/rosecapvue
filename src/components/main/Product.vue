<template>
  <article class="product-cart">
      <div class="product-slider">
        <div class="product-slider__main-img">
          <img src="img/Product3.png" alt="Пальто">
        </div>
        <ul class="product-slider__another-imgs">
          <li><img src="img/Product1.png" alt="Пальто"></li>
          <li><img src="img/Product2.png" alt="Пальто"></li>
          <li><img src="img/Product3.png" alt="Пальто"></li>
          <li><img src="img/Product3.png" alt="Пальто"></li>
        </ul>
      </div>
      <div class="product-info">
        <h1 class="product-info__title">Full product name</h1>
        <h3 class="product-info__sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, saepe.</h3>
        <p class="product-info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, optio commodi recusandae obcaecati nulla fugiat quis, maiores quia fugit animi molestias, unde consequatur deserunt quisquam minima eligendi expedita reiciendis sed tenetur doloremque assumenda. Quas nihil omnis tenetur recusandae, minus culpa?</p>
        <div class="product-params">
          <div class="product-params__size">
            <span class="product-params__text">Выберите размер:</span>
            <ul class="product-params__size-items">
              <li class="product-params__size-item"><span>S</span> - </li>
              <li class="product-params__size-item"><span class="active">M</span> - </li>
              <li class="product-params__size-item"><span>L</span> - </li>
              <li class="product-params__size-item"><span>XL</span> - </li>
            </ul>
          </div>
          <div class="product-params__count">
            <span>Количество:</span>
            <span class="product-params__count-minus"> - </span>
            <span class="product-params__count-num">1</span>
            <span class="product-params__count-plus"> + </span>
          </div>
        </div>
        <div class="product-action">
          <h4 class="product-action__price">Цена: 12 000 руб</h4>
          <button class="product-action__go-order" type="button"><span class="ti-shopping-cart"></span> Добавить в корзину</button>
        </div>
      </div>
    </article>
</template>

<script>
export default {
  
}
</script>
