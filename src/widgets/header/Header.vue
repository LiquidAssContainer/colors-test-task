<script setup>
import { Logo } from './Logo';
import IconSearch from './icons/search.svg';
import IconProfile from './icons/profile.svg';
import IconHeart from './icons/heart.svg';
import { NavLink } from './NavLink';

const navLinks = [
  { href: '#', label: 'Продукты' },
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
    //- nav-link Тесто2
  .contact
    address +7 (495) 221-77-69
    button.callback Заказать звонок
  .controls
    icon-heart
    icon-profile
    icon-search
</template>

<style lang="sass" scoped>
.header
  display: flex
  align-items: center
  height: 104px
  padding-inline: 64px

.nav
  display: flex
  gap: 24px

address
  font-weight: 500
  font-size: 16px
  line-height: 100%
  font-style: normal

  letter-spacing: -0.02em

.controls svg
  max-width: 20px
</style>
