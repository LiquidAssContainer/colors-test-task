<script setup lang="ts">
import { ref } from 'vue';
import { useOnClickOutside } from 'shared/lib/useOnClickOutside';
import IconClose from 'shared/ui/icons/close.svg';

const emit = defineEmits(['close']);

const cartElem = ref(null);

useOnClickOutside(cartElem, () => emit('close'));
</script>

<template lang="pug">
.cart(ref="cartElem")
  header.cart__header
    h2.cart__title Корзина
    button.button-close(@click="$emit('close')")
      icon-close.close-icon
  .cart-items
    .cart-items__header
      .cart-items__amount
        | 4 товара
      button.cart-items__clear-btn
        | Очистить список
</template>

<style scoped lang="sass">
.close-icon
  margin: auto
  width: 2.4rem
  color: $color-icon-primary
.cart
  position: fixed
  right: 0
  top: 0
  z-index: 1000

  max-width: 600px
  width: 100%
  min-height: 100vh
  padding: 40px

  background-color: #FFFFFF

  &__header
    display: flex
    justify-content: space-between
    align-items: center

    margin-bottom: 80px

  &__title
    font-weight: 500
    font-size: 30px
    line-height: 88%

    letter-spacing: -0.04em
    color: #1F2020

.button-close
  display: flex
  box-sizing: border-box
  width: 48px
  height: 48px
  left: 512px
  top: 32px
  border-radius: 50%
  background: transparent

    // opacity: 0.1
  border: 1px solid rgba(0, 0, 0, 0.1)

.cart-items__header
  display: flex
  justify-content: space-between

  font-size: 14px

.cart-items__clear-btn
  opacity: 0.4
  font-weight: 300
</style>
