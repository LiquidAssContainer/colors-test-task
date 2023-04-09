<script lang="ts" setup>
import { Logo } from './Logo';
import IconSearch from './icons/search.svg';
import IconProfile from './icons/profile.svg';
import IconHeart from './icons/heart.svg';
import { NavLink } from './NavLink';

const lol = 'kek';

const navLinks = [
  { href: '#procuts', label: 'Продукты' },
  { href: '#', label: 'Цвета' },
  { href: '#', label: 'Вдохновение' },
  { href: '#', label: 'Советы' },
  { href: '#', label: 'Найти магазин' },
];
</script>

<template lang="pug">
.header
  logo
  nav.nav
    nav-link(v-for="link in navLinks" :href="link.href" :key="link.href") {{ link.label }}
  .contact
    address
      a.contact__tel(href="tel:+74952217769")
        | +7 (495) 221-77-69
    button.callback
      | Заказать звонок
  .controls
    icon-heart
    icon-profile
    icon-search
    button.controls__btn_cart 4
</template>

<style scoped lang="sass">
.header
  display: flex
  align-items: center
  justify-content: space-between //*

  height: 10.4rem
  padding-inline: 64px

.nav
  display: flex
  gap: 2.4rem

.contact
  line-height: 1

address
  margin-bottom: .2rem

.contact__tel
  font-size: 1.6rem
  font-weight: 500
  font-style: normal
  color: $color-typo-primary

  letter-spacing: -0.02em

.callback
  font-size: 14px
  line-height: 100%
  color: $color-typo-primary

  opacity: 0.3
  transition: .2s all ease-in-out

  &:hover
    opacity: 1

.controls
  display: flex
  gap: 2.8rem

.controls svg
  max-width: 20px

.controls__btn_cart
  @include size(2.4rem)

  display: grid
  place-content: center

  background-color: $color-bg-green
  color: $color-typo-primary

  border-radius: 50%

  font-weight: 500
  font-size: 1.2rem
  letter-spacing: 0.06em
  line-height: 1
</style>
