

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
defineEmits(['openCart']);

const cartItemsAmount = computed(() => store.getters['cart/totalAmount']);
</script>

<template lang="pug">
button.controls__btn_cart(@click="$emit('openCart')")
  | {{ cartItemsAmount }}
</template>

<style scoped lang="sass">
</style>
