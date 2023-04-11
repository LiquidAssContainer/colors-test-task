<script setup lang="ts">
import { Teleport, Transition, ref } from 'vue';

import { AppHeader } from 'widgets/header';
import { FilterProducts } from 'features/filter-products';
import Product from 'widgets/product/Product.vue';
import { CartSidebar } from 'widgets/cart';

import { BreadcrumbsTail } from 'entities/breadcrumbs';
import { CarouselSlide, VCarousel } from 'entities/carousel/ui';
import { HeroSlide } from 'entities/hero-slide';

import { VOverlay } from 'shared/ui/components/VOverlay';
import { CustomSelect } from 'shared/ui/components/CustomSelect';

import { heroSlides } from './heroSlides';

const isCartOpen = ref(false);

const sortOptions = [
  { value: 'expensive', label: 'Сначала дорогие' },
  { value: 'cheap', label: 'Сначала дешёвые' },
  { value: 'popular', label: 'Сначала популярные' },
  { value: 'new', label: 'Сначала новые' },
];

const selectedSort = ref(sortOptions[0].value);
</script>

<template lang="pug">
app-header(@open-cart="isCartOpen = true")
.hero
  breadcrumbs-tail
  v-carousel
    carousel-slide(v-for="slide in heroSlides")
      hero-slide(v-bind="slide")
teleport(to="body")
  transition(name="overlay-fade")
    v-overlay(v-if="isCartOpen")
  transition(name="cart-translate")
    cart-sidebar(v-if="isCartOpen" @close="isCartOpen = false")
main
  filter-products
  section
    .catalog__header
      .product-amount
        | {{428}} товаров
      .product-order
        custom-select(:options="sortOptions" v-model="selectedSort")
    .product-list
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" :price="8800")
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" :price="8800")
      product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
      name="Какой-то тестовый товар lorem ipsum VUEX-1337" :price="8800")
footer
</template>

<style scoped lang="sass">
.hero
  position: relative

  @include to(tablet)
    @include padding-inline
    padding-top: 1.6rem

    &::before
      position: absolute
      content: ''
      top: 0
      width: 100%
      height: .1rem

      background: $color-border-primary
      opacity: 0.06
.bread-crumbs
  @include from(laptop)
    @include padding-inline

    position: absolute
    z-index: 1
    padding-top: 1.7vw
    // top: 3vh
    // left: 3.33vw

.carousel
  @include to(tablet)
    display: none

main
  @include padding-inline

  display: flex
  padding-top: 7.2rem
  padding-bottom: 7.5%
  // padding-inline: 64px
  // grid-template-columns: 360px, 1fr

.catalog__header
  display: flex
  justify-content: space-between

  margin-bottom: 44px
.product-amount
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

.cart-translate-enter-active
  animation: translate .5s
  // transform: scale(2)

.cart-translate-leave-active
  animation: translate .4s reverse

.overlay-fade-enter-active, .overlay-fade-leave-active
  transition: opacity .4s ease-in-out

.overlay-fade-enter-from, .overlay-fade-leave-to
  opacity: 0

@keyframes translate
  from
    transform: translateX(100%)
  to
    transform: translateX(0)
</style>
