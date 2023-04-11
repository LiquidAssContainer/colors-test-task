<script setup lang="ts">
import { computed, reactive, ref, toRef, watch, watchEffect } from 'vue';
import IconTriangle from './triangle.svg';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  modelValue: string;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isExpanded = ref(false);

const selectedLabel = computed(() => {
  const selected = props.options.find(
    (item) => item.value === props.modelValue,
  );
  return selected?.label;
});

const selectedRef = ref({ value: props.modelValue });

const selected = computed({
  get() {
    return selectedRef.value.value;
  },
  set(value) {
    selectedRef.value = { value };
  },
});

watch(selectedRef, () => {
  emit('update:modelValue', selected.value);
  isExpanded.value = false;
});
</script>

<template lang="pug">
.custom-select
  button.custom-select__btn(@click="isExpanded = !isExpanded")
    span.custom-select__label
      | {{ selectedLabel }}
    icon-triangle
  ul.custom-select__options(v-if="isExpanded")
    li.custom-select__option(
      v-for="{ value, label } in options"
      :class="{selected: value === modelValue}"
      @click="selected = value")
      | {{ label }}
</template>

<style scoped lang="sass">
.custom-select
  position: relative

  &__btn
    display: flex
    align-items: center
    gap: .5rem

  &__label
    white-space: nowrap

  &__options
    position: absolute
    top: 0
    right: 0
    z-index: 10

    min-width: 28rem

    background-color: $color-bg-primary

  &__option
    padding: 1.6rem 2.4rem
    white-space: nowrap

    cursor: pointer

    &.selected
      background-color: $color-bg-green

    &:hover:not(.selected)
      background-color: lighten($color-bg-green, 10%)

  &__label, &__option
    font-weight: 500
    font-size: 1.2rem
    line-height: 1.2
    letter-spacing: 0.06em
    text-transform: uppercase

    color: $color-typo-primary
</style>
