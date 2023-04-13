<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

import { SliderCheckbox } from 'shared/ui/components/SliderCheckbox';

interface Filter {
  name: string;
  label: string;
}

const filters: Filter[] = [
  { name: 'new', label: 'Новинки' },
  { name: 'available', label: 'Есть в наличии' },
  { name: 'contract', label: 'Контрактные' },
  { name: 'exclusive', label: 'Эксклюзивные' },
  { name: 'sale', label: 'Распродажа' },
];

const store = useStore();

const form = ref(store.state.products.filters);

watch(form, () => {
  store.dispatch('products/changeFilters', form);
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
