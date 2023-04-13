<script setup lang="ts">
import { useStore } from 'vuex';
import { AddButton } from 'features/add-to-cart/ui';
import { AmountControls } from 'features/change-product-amount';
import { computed } from 'vue';
// import IconPlus from 'shared/ui/icons/plus.svg';

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

const formatPrice = (price: number) => {
  return `${String(price)} ₽`;
};
</script>

<template lang="pug">
.product
  .product__img-wrapper
    img.product__img(:src="img")
  .product__name
    | {{ name }}
  .product__footer
    .product__price
      | {{ formatPrice(price) }}
    add-button(v-if="!amount" @click="addProduct" :id="id" :disabled="!isAvailable")
    amount-controls(v-else :id="id" :amount="amount")
</template>

<style scoped lang="sass">
.product
  display: flex
  flex-direction: column
  gap: 16px

  max-width: 27.8rem
  border-bottom: .1rem solid rgba(0, 0, 0, 0.1)
  padding-bottom: 14px

  &:hover .add-button
    opacity: 1

  &__footer
    display: flex
    justify-content: space-between
    align-items: center

  &__price
    font-size: 1.6rem
    font-weight: 600
    line-height: 1

.amount-controls
  height: 3.2rem

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
  // margin-bottom: 16px
  font-weight: 300
  font-size: 16px
  line-height: 112%

  letter-spacing: 0.02em

  color: #1F2020
</style>
