<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  name: string;
  label: string;
}

const props = defineProps<Props>();
const { name, label } = toRefs(props);
</script>

<template lang="pug">
label.input__container
  input.input__control(type="checkbox" :name="name")
  .input__visual
  span.input__label
    | {{label}}
</template>

<style scoped lang="sass">
$width-checkbox: 3.6em
$height-checkbox: 2.2em

$width-mark: .8em

$transition: .2s all ease-in-out

.input
  &__container
    display: flex
    align-items: center
    gap: 1.2em

    font-size: 1rem

    cursor: pointer

  &__control
    appearance: none

  &__visual
    @include size($width-checkbox, $height-checkbox)

    position: relative
    display: block

    flex-shrink: 0

    border-radius: 4.0em
    background: $color-bg-checkbox
    transition: $transition

    &::before
      @include size($width-mark)

      position: absolute
      content: ''
      left: .7em
      // top: calc(50% - $width-mark / 2)
      top: .7em

      border-radius: 50%
      background: $color-typo-primary
      transition: $transition

  &__control:checked ~ .input__visual
    background: $color-bg-checkbox-checked

    &::before
      // left: calc(100% - $width-mark - .7em)
      left: 2.1em

  &__label
    font-size: 1.2em
    letter-spacing: .06em
    text-transform: uppercase
</style>
