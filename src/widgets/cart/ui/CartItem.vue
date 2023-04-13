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
  amount-controls(:id="props.id" :amount="props.amount")
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

.cart-item__info
  margin-left: .8rem

.cart-item__img
  @include size(9.6rem)

  position: relative
  bottom: 1rem

  display: block
  object-fit: cover

  &-wrapper
    flex-shrink: 0
    overflow: hidden
</style>
