<script setup lang="ts">
import IconChevron from './chevron.svg';

interface Props {
  type: 'prev' | 'next';
}

defineProps<Props>();
</script>

<template lang="pug">
button.carousel-button(:class="{ [type]: type }")
  icon-chevron.icon-chevron
</template>

<style scoped lang="sass">
.carousel-button
  position: relative

  width: 25%

  pointer-events: auto
  opacity: 0
  transition: .2s opacity ease-in-out

  &:hover
    opacity: 1

  &.prev
    margin-right: auto
    transform: scale(-1, 1)

  &.next
    margin-left: auto

.icon-chevron
  position: absolute
  bottom: 30%

  width: 2.2rem
  height: 4.2rem

  color: $color-icon-secondary
</style>
