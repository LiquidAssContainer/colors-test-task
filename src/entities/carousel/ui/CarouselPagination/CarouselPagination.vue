<script setup lang="ts">
interface Props {
  amount: number;
  activeIndex: number;
}

interface Emits {
  (e: 'setIndex', index: number): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template lang="pug">
.carousel-pagination
  button.carousel-pagination__btn(
    v-for="(_, index) in amount" 
    :key="index" 
    :class="{ active: activeIndex === index }"
    @click="$emit('setIndex', index)")
</template>

<style scoped lang="sass">
$height-controls: 3.2em
$size-button-visible: .6em
$size-button-actual: calc($size-button-visible + .8em)

.carousel-pagination
  display: flex
  align-items: center
  justify-content: space-between

  height: $height-controls
  padding-inline: 2em

  font-size: 1rem

  background: rgba(0, 0, 0, 0.4)
  border-radius: 1.6em

  &__btn
    @include size($size-button-actual)

    display: flex
    justify-content: center
    align-items: center

    font-size: inherit

    opacity: 0.2
    border-radius: 50%

    &::before
      @include size($size-button-visible)

      position: absolute
      content: ''

      background: $color-icon-secondary
      border-radius: 50%

    &.active
      opacity: 1

    &:hover:not(.active)
      opacity: 0.6
</style>
