<template lang="pug">
.app-logo
  | Colors
</template>

<style scoped lang="sass">
$size-dot-elem: .8rem

.app-logo
  position: relative
  padding-right: 1.2rem

  font-family: "TT Hoves"
  font-size: 2.2rem
  font-weight: 700 //400
  line-height: 1
  text-transform: uppercase

  color: $color-typo-primary
  user-select: none

  &::after
    @include size($size-dot-elem)

    position: absolute
    content: ''
    top: .2rem
    right: 0

    border-radius: 50%
    background-color: $color-typo-primary
</style>
