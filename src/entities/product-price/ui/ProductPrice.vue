<script setup lang="ts">
import { formatNumber } from 'shared/lib/formatNumber';

interface Props {
  price: number;
}

defineProps<Props>();
</script>

<template lang="pug">
.product-price
  | {{ formatNumber(price) }} ₽
</template>

<style scoped lang="sass">
.product-price
  font-size: 1.6rem
  font-weight: 600
  line-height: 1

  color: $color-typo-primary
</style>
