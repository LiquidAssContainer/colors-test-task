<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import { AmountControls } from 'features/change-product-amount';
import { ProductPrice } from 'entities/product-price';
import IconClose from 'shared/ui/icons/close.svg';

interface Props {
  id: string;
  name: string;
  price: number;
  amount: number;
  img: string;
}

const store = useStore();
const props = defineProps<Props>();

const remove = () => store.dispatch('cart/remove', props.id);

const totalPrice = computed(() => props.price * props.amount);
</script>

<template lang="pug">
li.cart-item
  .cart-item__img-wrapper
    img.cart-item__img(:src="img")
  .cart-item__info
    .cart-item__name
      | {{ name }}
    product-price(:price="totalPrice")
  .cart-item__controls
    amount-controls(:id="id" :amount="amount")
    button.cart-item__remove-btn(@click="remove")
      icon-close.icon-close
</template>

<style scoped lang="sass">
.cart-item
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  row-gap: 1rem

  padding-block: 12px
  border-top: 1px solid lightgrey

  &__name
    max-width: 20rem
    margin-bottom: 1.6rem

    font-size: 1.6rem
    font-weight: 300
    line-height: 1.12
    letter-spacing: 0.02em

    color: #1F2020

  &__info
    flex-grow: 100
    margin-left: .8rem

  &__controls
    display: flex

    justify-content: space-between
    flex-grow: 1
    gap: 4rem

  &__img
    @include size(9.6rem)

    position: relative
    bottom: 1rem

    display: block
    object-fit: cover

    &-wrapper
      flex-shrink: 0
      overflow: hidden

.icon-close
  width: 2.4rem
  color: #d2d2d2
</style>
