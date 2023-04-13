<script setup lang="ts">
import IconPlus from 'shared/ui/icons/plus.svg';

interface Props {
  id: string;
  disabled: boolean;
}

interface Emits {
  (e: 'click'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template lang="pug">
button.add-button(@click="$emit('click')" :disabled="disabled")
  icon-plus.add-button__icon
</template>

<style scoped lang="sass">
.add-button
  display: grid
  place-content: center

  width: 8rem
  height: 3.2rem

  background: $color-bg-green
  border-radius: 8px
  opacity: 0

  transition: .2s opacity ease-in-out

  border: none
  cursor: pointer
  outline: none

  &__icon
    width: 2rem
</style>
