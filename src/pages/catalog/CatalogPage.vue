<script setup>
import { ref } from 'vue';

import { Header as VHeader } from 'widgets/header';
import Product from 'widgets/product/Product.vue';
import Cart from 'widgets/cart/Cart.vue';
import { HeroSlider } from 'widgets/hero-slider';
import { SliderCheckbox } from 'shared/ui/components/SliderCheckbox';
import { BreadcrumbsTail } from 'entities/breadcrumbs';
import SlideItem from 'widgets/hero-slider/ui/SlideItem.vue';
import { HeroSlide } from 'entities/hero-slide';

import imgVase from './img/vase-with-flowers.jpg';
// import { Logo } from 'widgets/header/Logo';

// const Exp = <Logo />;

const isOpen = ref(false);
</script>

<template lang="pug">
v-header
.hero
  breadcrumbs-tail
  hero-slider
    slide-item(v-for="_ in 6")
      hero-slide(heading="Краски" text="Идеально подходят для стен и других поверхностей.\nНайди свой идеальный цвет!" :backgroundImg="imgVase")
button(@click="() => isOpen = true") openmodal
cart(v-if="isOpen" :onClose="() => isOpen = false")
main
  .filters
    slider-checkbox(label="покупайте деньги")
    slider-checkbox(label="покупайте деньги")
    slider-checkbox(label="покупайте деньги")
    slider-checkbox(label="распродажа")
  section
    .product-amount
      | {{428}} товаров
    .product-list
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
footer
</template>

<style scoped lang="sass">
.hero
  position: relative
.bread-crumbs
  position: absolute
  z-index: 1
  top: 3vh
  left: 3.33vw
main
  @include padding-inline

  display: flex
  padding-top: 72px
  padding-bottom: 7.5%
  // padding-inline: 64px
    // grid-template-columns: 360px, 1fr
.product-amount
  margin-bottom: 44px
  font-weight: 500
  font-size: 12px
  line-height: 15px
  letter-spacing: 0.06em

  text-transform: uppercase
.product-list
  display: flex
  flex-wrap: wrap
  gap: 16px 24px

.filters
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 10px
  width: 360px

footer
  background-color: black
  height: 300px
</style>
