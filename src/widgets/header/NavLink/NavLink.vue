<template lang="pug">
a.navlink(:href="href")
  slot
</template>

<script setup>
const { href } = defineProps({ href: String });
</script>

<style lang="sass" scoped>
.navlink
  font-size: 14px
  // line-height: 100%

  color: $color-typo-primary
  letter-spacing: 0.06em
  text-transform: uppercase

  text-decoration: none
</style>
