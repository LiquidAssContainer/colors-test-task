<script setup lang="ts">
interface Props {
  href: string;
}

defineProps<Props>();
</script>

<template lang="pug">
a.navlink(:href="href")
  slot
</template>

<style scoped lang="sass">
.navlink
  font-size: 14px
  // line-height: 100%

  color: $color-typo-primary
  letter-spacing: 0.06em
  text-transform: uppercase

  &:hover
    color: $color-typo-link-hover
</style>
