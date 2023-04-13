<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import { SliderCheckbox } from 'shared/ui/components/SliderCheckbox';
import { filters } from '../model';

const store = useStore();

const form = computed({
  get() {
    return store.state.products.filters;
  },
  set(value) {
    store.dispatch('products/changeFilters', value);
  },
});
</script>

<template lang="pug">
.filter-products
  slider-checkbox(
    v-for="filter in filters"
    :key="filter.name"
    :value="filter.name"
    v-bind="filter"
    v-model="form")
</template>

<style scoped lang="sass">
.filter-products
  width: 100%
  max-width: 280px

  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 10px
</style>
