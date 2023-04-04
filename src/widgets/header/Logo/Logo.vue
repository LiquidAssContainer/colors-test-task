<script setup></script>

<template lang="pug">
.logo Colors
</template>

<style lang="sass" scoped>
.logo
  position: relative

  font-family: 'TT Hoves'
  font-size: 30px
  line-height: 26px
  text-transform: uppercase
  color: #1F2020

  &::after
    $size: 8px
    position: absolute
    content: ''
    top: 0
    right: -2px

    width: $size
    height: $size
    border-radius: 50%
    background-color: #1F2020
</style>
