<template lang="pug">
a.navlink(:href="href")
  slot
</template>

<script setup lang="ts">
const { href } = defineProps<{ href: string }>();
</script>

<style lang="sass" scoped>
.navlink
  font-size: 14px
  // line-height: 100%

  color: $color-typo-primary
  letter-spacing: 0.06em
  text-transform: uppercase

  &:hover
    color: $color-typo-link-hover
</style>
