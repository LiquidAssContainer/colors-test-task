<template lang="pug">
.product
  .product__img-wrapper
    img.product__img(:src="img")
  .product__name {{name}}
  .product__footer
    .product__price {{formatPrice(price)}}
    button.product__button_add
      icon-plus
        
</template>

<script setup lang="ts">
import IconPlus from './plus.svg';
const formatPrice = (price: number) => {
  return `${String(price)} ₽`;
};

const { img, name, price } = defineProps<{
  img: string;
  name: string;
  price: number;
}>();
</script>

<style lang="sass">
.product
  display: flex
  flex-direction: column
  gap: 16px

  max-width: 300px
  border-bottom: 1px solid rgba(0, 0, 0, 0.1)
  padding-bottom: 14px

  &:hover .product__button_add
    opacity: 1

  &__footer
    display: flex
    justify-content: space-between
    align-items: center

  &__price
    font-weight: 600
    font-size: 16px
    line-height: 100%

  &__button_add
    display: grid
    place-content: center

    width: 80px
    height: 32px

    background: #7BB899
    border-radius: 8px
    opacity: 0

    transition: .2s opacity ease-in-out

    border: none
    cursor: pointer
    outline: none

.product__img
  position: absolute
  inset: 0
  width: 100%
  height: 100%
  object-fit: cover

  &-wrapper
    width: 100%
    position: relative
    padding: 50%
.product__name
  // margin-bottom: 16px
  font-weight: 300
  font-size: 16px
  line-height: 112%

  letter-spacing: 0.02em

  color: #1F2020
</style>
