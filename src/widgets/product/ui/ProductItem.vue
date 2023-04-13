<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import { AddButton } from 'features/add-to-cart/ui';
import { AmountControls } from 'features/change-product-amount';
import { ProductPrice } from 'entities/product-price';

interface Props {
  id: string;
  img: string;
  name: string;
  price: number;
  isAvailable: boolean;
}

const store = useStore();
const props = defineProps<Props>();

const amount = computed(() => store.getters['cart/amountById'](props.id));

const addProduct = () => {
  const { isAvailable, ...product } = props;
  store.dispatch('cart/add', product);
};
</script>

<template lang="pug">
.product(:class="{ 'unavailable': !isAvailable }")
  .product__img-wrapper
    img.product__img(:src="img")
  .product__name
    | {{ name }}
  .product__footer
    product-price(:price="price")
    template(v-if="isAvailable")
      add-button(
        v-if="!amount"
        :id="id"
        :disabled="!isAvailable"
        @click="addProduct")
      amount-controls(v-else :id="id" :amount="amount")
</template>

<style scoped lang="sass">
.product
  display: flex
  flex-direction: column
  gap: 16px

  border-bottom: .1rem solid rgba(0, 0, 0, 0.1)
  padding-bottom: 14px

  @include from(laptop)
    max-width: 27.8rem

    .add-button
      opacity: 0
      transition: .2s opacity ease-in-out

    &:hover .add-button
      opacity: 1

  &.unavailable
    opacity: .5

  &__footer
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
    gap: .5rem 1rem

    height: 3.2rem

  &__price
    font-size: 1.6rem
    font-weight: 600
    line-height: 1

.product__img
  position: absolute
  inset: 0
  width: 100%
  height: 100%
  // object-fit: cover
  object-fit: scale-down

  &-wrapper
    width: 100%
    position: relative
    padding: 50%
.product__name
  font-weight: 300
  font-size: 16px
  line-height: 112%

  letter-spacing: 0.02em

  color: #1F2020
</style>
