<script setup lang="ts">
const { img, price, amount, name } = defineProps<{
  img;
  price;
  amount;
  name;
}>();
</script>

<template lang="pug">
li.cart-item
    img
    .cart-item__info
</template>

<style lang="sass" scoped></style>
