<script setup lang="ts">
import { Teleport, Transition, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

import { AppHeader } from 'widgets/header';
import { FilterProducts } from 'features/filter-products';
import { ProductItem } from 'widgets/product';
import { CartSidebar } from 'widgets/cart';

import { BreadcrumbsTail } from 'entities/breadcrumbs';
import { CarouselSlide, VCarousel } from 'entities/carousel/ui';
import { HeroSlide } from 'entities/hero-slide';

import { VOverlay } from 'shared/ui/components/VOverlay';
import { CustomSelect } from 'shared/ui/components/CustomSelect';

import { heroSlides } from './heroSlides';
import { useDisableBodyScroll } from 'shared/lib/useDisableBodyScroll';
import { BottomSheet } from 'shared/ui/components/BottomSheet';

const store = useStore();

const sortOptions = [
  { value: 'expensive', label: 'Сначала дорогие' },
  { value: 'cheap', label: 'Сначала дешёвые' },
  { value: 'popular', label: 'Сначала популярные' },
  { value: 'new', label: 'Сначала новые' },
];

const selectedSort = ref(store.state.products.sort);
const isCartOpen = ref(false);
const areFiltersOpen = ref(false);

const products = computed(() => store.getters['products/items']);
const productsAmount = computed(() => store.state.products.amount);

watch(selectedSort, () => {
  store.dispatch('products/changeSort', selectedSort.value);
});

useDisableBodyScroll(isCartOpen);
</script>

<template lang="pug">
app-header(@open-cart="isCartOpen = true")
.hero
  breadcrumbs-tail
  v-carousel
    carousel-slide(v-for="slide in heroSlides")
      hero-slide(v-bind="slide")
main.main
  filter-products
  section.catalog
    .catalog__header
      button.catalog__filters-btn(@click="areFiltersOpen = true")
        | Фильтры
      .product-amount
        | {{ productsAmount }} товаров
      .product-order
        custom-select(:options="sortOptions" v-model="selectedSort")
    .product-list
      product-item(
        v-for="{ id, img, name, price, features: { available } } in products"
        :key="id"
        v-bind="{ id, img, name, price }"
        :is-available="available")
teleport(to="body")
  transition(name="overlay-fade")
    v-overlay(v-if="isCartOpen")
  transition(name="cart-translate")
    cart-sidebar(v-if="isCartOpen" @close="isCartOpen = false")
  v-overlay(v-if="areFiltersOpen")
    bottom-sheet(v-if="areFiltersOpen" @close="areFiltersOpen = false")
      filter-products

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

.main
  @include padding-inline

  display: flex
  gap: 20px
  padding-top: 7.2rem
  padding-bottom: 7.5%

  max-width: 1920px
  margin-inline: auto
  // padding-inline: 64px
  // grid-template-columns: 360px, 1fr

.catalog
  width: 100%

.catalog__header
  display: flex
  justify-content: space-between

  margin-bottom: 44px

.catalog__filters-btn, .product-amount
  font-size: 1.2rem
  font-weight: 500
  line-height: 1.2
  letter-spacing: 0.06em
  text-transform: uppercase

  color: #1F2020

.catalog__filters-btn
  @include from(laptop)
    display: none

.product-amount
  @include to(tablet)
    display: none

.product-list
  display: flex
  flex-wrap: wrap
  gap: 16px 24px

  clip-path: inset(0 0 .2rem 0)

footer
  background-color: black
  height: 300px

.cart-translate-enter-active
  animation: translate .4s

.cart-translate-leave-active
  animation: translate .4s reverse
  overflow: hidden

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
