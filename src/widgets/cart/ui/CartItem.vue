<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import IconClose from 'shared/ui/icons/close.svg';

interface Props {
  id: string;
  name: string;
  price: number;
  amount: number;
  imgSrc: string;
}

const store = useStore();
const props = defineProps<Props>();

const increment = () => store.dispatch('cart/increment', props.id);
const decrement = () => store.dispatch('cart/decrement', props.id);
const remove = () => store.dispatch('cart/remove', props.id);

const totalPrice = computed(() => props.price * props.amount);
</script>

<template lang="pug">
li.cart-item
  img.cart-item__img(:src="imgSrc")
  .cart-item__info
    .cart-item__name
      | {{ name }}
    .cart-item__price
      | {{ totalPrice }} ₽
  .cart-item__controls
    button.cart-item__quantity-btn(@click="decrement") -
    .cart-item__quantity
      | {{ amount }}
    button.cart-item__quantity-btn(@click="increment") +
  button.cart-item__remove-btn(@click="remove")
    icon-close.icon-close
</template>

<style scoped lang="sass">
.icon-close
  width: 2.4rem
  color: #d2d2d2
.cart-item
  padding-block: 12px
  border-top: 1px solid lightgrey

  &__quantity-btn
    width: 4rem
    height: 2.4rem

    background-color: $color-bg-button
    border-radius: 4px

.cart-item__controls
  display: flex
  align-items: center
  gap: 2rem

.cart-item__quantity
  font-size: 16px
  color: #1F2020

.cart-item
  display: flex
  align-items: center
  justify-content: space-between

.cart-item__name
  font-weight: 300
  font-size: 16px
  line-height: 112%
  letter-spacing: 0.02em

  color: #1F2020
  margin-bottom: 1.6rem

.cart-item__price
  font-weight: 600
  font-size: 16px
  line-height: 100%

  color: #1F2020

.cart-item__info
  margin-left: .8rem

.cart-item__img
  width: 9.6rem
  height: 9.6rem
  object-fit: cover
</style>
