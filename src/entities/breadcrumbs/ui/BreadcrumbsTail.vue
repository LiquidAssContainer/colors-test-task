<script setup>
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
  
<style lang="sass" scoped>
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

    &:not(:last-child)
      // margin-right: $gap-items

      &::after
        position: absolute
        content: ''
        right: $right-pos-bullet
        @include size($width-bullet)

        border-radius: 50%
        background: #C4C4C4
        opacity: .3

  &__link
    font-size: 1rem
    line-height: 100%

    letter-spacing: .06em
    text-transform: uppercase

    color: $color-typo-secondary

    opacity: .3
    transition: .2s opacity ease-in-out

    @media (max-width: 767px)
      color: $color-typo-primary

    &:hover
      opacity: 1
</style>
