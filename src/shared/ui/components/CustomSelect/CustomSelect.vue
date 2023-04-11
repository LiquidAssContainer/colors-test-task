<script setup lang="ts">
import { Teleport, computed, ref, watch } from 'vue';
import { VOverlay } from 'shared/ui/components/VOverlay';
import IconTriangle from './triangle.svg';

import { useOnClickOutside } from 'shared/lib/useOnClickOutside';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  modelValue: string;
  isNative?: boolean;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  isNative: false,
});
const emit = defineEmits<Emits>();

const isExpanded = ref(false);
const optionsElem = ref(null);

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
  set(value: string) {
    selectedRef.value = { value };
  },
});

watch(selectedRef, () => {
  emit('update:modelValue', selected.value);
  isExpanded.value = false;
});

useOnClickOutside(optionsElem, () => {
  if (isExpanded.value) {
    isExpanded.value = false;
  }
});
</script>

<template lang="pug">
.custom-select(v-if="!isNative")
  button.custom-select__btn(@click="isExpanded = !isExpanded")
    span.custom-select__label
      | {{ selectedLabel }}
    icon-triangle
  ul.custom-select__options(v-if="isExpanded" ref="optionsElem")
    li.custom-select__option(
      v-for="{ value, label } in options"
      :class="{ selected: value === modelValue }"
      @click="selected = value")
      | {{ label }}
teleport(to="body")
  v-overlay(v-if="isExpanded")
//- label.custom-select__btn(v-else)
//-   span.custom-select__label
//-     | {{ selectedLabel }}
//-   icon-triangle
//-   select.hidden
//-     option.custom-select__btn(v-for="{ value, label } in options" :value="value")
//-       | {{ label }}
</template>

<style scoped lang="sass">
// .hidden
//   appearance: none
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
