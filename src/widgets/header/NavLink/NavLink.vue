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
  font-size: 1.4rem
  letter-spacing: 0.06em
  text-transform: uppercase

  color: $color-typo-primary

  &:hover
    color: $color-typo-link-hover
</style>
