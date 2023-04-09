<script setup></script>

<template lang="pug">
.logo Colors
</template>

<style lang="sass" scoped>
$size-dot-elem: .8rem
.logo
  position: relative
  font-family: "TT Hoves"
  // font-weight: 400
  font-size: 2.2rem
  line-height: 1
  text-transform: uppercase
  color: #1F2020
  padding-right: 1.2rem

  user-select: none

  &::after
    @include size($size-dot-elem)

    position: absolute
    content: ''
    top: 2px
    right: 0

    border-radius: 50%
    background-color: $color-typo-primary
</style>
