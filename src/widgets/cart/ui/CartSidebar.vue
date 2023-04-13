<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import IconClose from 'shared/ui/icons/close.svg';
import CartItem from './CartItem.vue';
import { formatNumber } from 'shared/lib/formatNumber';

import { useOnClickOutside } from 'shared/lib/useOnClickOutside';
import { getAmountWord } from '../lib';

const store = useStore();
const emit = defineEmits(['close']);

const cartElem = ref(null);

const items = computed(() => store.state.cart.items);

const totalPrice = computed(() => store.getters['cart/totalPrice']);
const totalAmount = computed(() => store.getters['cart/totalAmount']);
const amountWord = computed(() => getAmountWord(totalAmount.value));

const clear = () => store.dispatch('cart/clear');

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
        | {{ totalAmount }} {{ amountWord }}
      button.cart-items__clear-btn(v-if="totalAmount" @click="clear")
        | Очистить список
    ul.cart-items__list
      cart-item(
        v-for="item in items"
        :key="item.id"
        v-bind="item")
  footer.cart__footer
    .cart__total-price
      .cart__total 
        | Итого
      .cart__sum
        | {{ formatNumber(totalPrice) }}₽
    button.cart__buy-btn
      | Оформить заказ
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
  display: flex
  flex-direction: column

  height: 100%
  max-width: 600px
  width: 100%
  min-height: 100vh
  padding: 40px

  @include to(tablet)
    padding-inline: 2.4rem

  overflow-y: scroll
  overflow-x: hidden

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

  &__footer
    display: flex
    justify-content: space-between
    align-items: flex-end
    gap: 10px

    padding-top: 10px
    margin-top: auto

  &__total-price
    flex-shrink: 0

  &__total
    font-weight: 400
    font-size: 16px
    line-height: 100%
    color: #1F2020
    margin-bottom: 6px

  &__sum
    font-style: normal
    font-weight: 500
    font-size: 30px
    line-height: 100%
    letter-spacing: -0.02em
    color: #1F2020

  &__buy-btn
    width: 100%
    max-width: 24rem

    font-size: 1.2rem
    font-weight: 500
    letter-spacing: 0.06em
    text-transform: uppercase

    color: #1F2020
    background-color: $color-bg-green
    border-radius: .4rem
    height: 5.6rem
    transition: all .2s ease-in-out

    &:hover
      background-color: darken(#7BB899, 10%)

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
  margin-bottom: 1rem

.cart-items__clear-btn
  opacity: 0.4
  font-weight: 300
  transition: all .2s ease-in-out

  &:hover
    opacity: 1
</style>
