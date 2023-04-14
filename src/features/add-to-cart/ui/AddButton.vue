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

  color: $color-icon-primary

  @include to(tablet)
    width: 4rem
    height: 2.4rem

    background: $color-bg-button
    border-radius: .6rem

    &__icon
      width: 1.6rem

  @include from(laptop)
    width: 8rem
    height: 3.2rem

    background: $color-bg-green
    border-radius: .8rem

    &__icon
      width: 2rem
</style>
