<script setup lang="ts">
import { ref } from 'vue';
import { useOnClickOutside } from 'shared/lib/useOnClickOutside';

const emit = defineEmits(['close']);

const elemRef = ref(null);

useOnClickOutside(elemRef, () => emit('close'));
</script>

<template lang="pug">
.bottom-sheet(ref="elemRef")
  slot
</template>

<style scoped lang="sass">
.bottom-sheet
  position: fixed
  left: 0
  right: 0
  bottom: 0
  z-index: 1000

  height: 66%
  padding: 54px 24px

  background: $color-bg-primary
  border-radius: 24px 24px 0 0

  &::before
    @include size(2.8rem, .4rem)

    position: absolute
    content: ''
    top: 1.2rem
    left: calc(50% - 1.4rem)

    background: #1F2020
    border-radius: 40px
    opacity: 0.6
</style>
