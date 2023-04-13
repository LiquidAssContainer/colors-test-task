<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue';
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

// const checkedFilters = ref([]);

const form = reactive(
  filters.reduce((acc: any, { name }: Filter) => {
    acc[name] = false;
    return acc;
  }, {}),
);

watch(form, () => {
  console.log(form);
  store.dispatch('products/changeFilters', { ...form });
});

// console.log(form);
</script>

<template lang="pug">
.filters
  slider-checkbox(
    v-for="filter in filters"
    :key="filter.name"
    v-bind="filter"
    v-model="form[filter.name]")
</template>

<style scoped lang="sass">
.filters
  width: 100%
  max-width: 280px

  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 10px
</style>
