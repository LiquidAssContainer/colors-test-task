<script setup lang="ts">
// ну типа просто хардкод
const links = [
  { href: '#home', title: 'Главная' },
  { href: '#products', title: 'Продукты' },
  { href: '#paints', title: 'Краски' },
];
</script>

<template lang="pug">
ul.bread-crumbs
  li.bread-crumbs__item(v-for="{ href, title } in links" :key="title")
    a.bread-crumbs__link(:href="href")
      | {{title}}
</template>
  
<style scoped lang="sass">
$gap-items: 1.9rem
$width-bullet: .3rem
$right-pos-bullet: calc(($gap-items + $width-bullet) / -2)

.bread-crumbs
  display: flex
  gap: $gap-items

  &__item
    position: relative

    display: flex
    align-items: center

    &:not(:last-child)::after
      @include size($width-bullet)

      position: absolute
      content: ''
      right: $right-pos-bullet

      border-radius: 50%
      background: #C4C4C4

      @include from(laptop)
        opacity: .3

  &__link
    font-size: 1rem
    line-height: 1

    letter-spacing: .06em
    text-transform: uppercase

    color: $color-typo-secondary

    opacity: .3
    transition: .2s opacity ease-in-out

    @include to(tablet)
      color: $color-typo-primary

    &:hover
      opacity: 1
</style>
