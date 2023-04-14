

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
defineEmits(['openCart']);

const cartItemsAmount = computed(() => store.getters['cart/totalAmount']);
</script>

<template lang="pug">
button.open-cart-button(@click="$emit('openCart')")
  | {{ cartItemsAmount }}
</template>

<style scoped lang="sass">
.open-cart-button
  @include size(2.4rem)

  display: grid
  place-content: center

  background-color: $color-bg-green

  border-radius: 50%

  font-weight: 500
  font-size: 1.2rem
  letter-spacing: 0.06em
  line-height: 1

  color: $color-icon-primary
</style>
