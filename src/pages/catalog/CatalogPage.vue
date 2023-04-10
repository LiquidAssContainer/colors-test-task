<script setup lang="ts">
import { ref } from 'vue';

import { Header as VHeader } from 'widgets/header';
import { FilterProducts } from 'features/filter-products';
import Product from 'widgets/product/Product.vue';
import Cart from 'widgets/cart/Cart.vue';

import { BreadcrumbsTail } from 'entities/breadcrumbs';
import { CarouselSlide, VCarousel } from 'entities/carousel/ui';
import { HeroSlide } from 'entities/hero-slide';

import { heroSlides } from './heroSlides';

const isOpen = ref(false);
</script>

<template lang="pug">
v-header
//- button(@click="() => isOpen = true") openmodal
.hero
  breadcrumbs-tail
  v-carousel
    carousel-slide(v-for="slide in heroSlides")
      hero-slide(v-bind="slide")
cart(v-if="isOpen" :onClose="() => isOpen = false")
main
  filter-products
  section
    .product-amount
      | {{428}} товаров
    .product-list
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" :price="8800")
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
footer
</template>

<style scoped lang="sass">
$mobile: (max-width: 767px)
.hero
  position: relative

  @media (max-width: 767px)
    padding-top: 16px

    &::before
      position: absolute
      content: ''
      top: 0
      width: 100%
      height: 1px
      // border-top: 1px solid #1F2020

      background: #1F2020
      opacity: 0.06
.bread-crumbs
  position: absolute
  z-index: 1
  top: 3vh
  left: 3.33vw

.hero-slider__container
  @media (max-width: 767px)
    display: none

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

footer
  background-color: black
  height: 300px
</style>
