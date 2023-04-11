<script setup lang="ts">
import { ref, watch } from 'vue';

import { AppLogo } from './AppLogo';
import { NavLink } from './NavLink';

import IconSearch from './icons/search.svg';
import IconProfile from './icons/profile.svg';
import IconHeart from './icons/heart.svg';
import IconMenu from './icons/burger-menu.svg';
import IconClose from 'shared/ui/icons/close.svg';

defineEmits(['openCart']);

const navLinks = [
  { href: '#procuts', label: 'Продукты' },
  { href: '#', label: 'Цвета' },
  { href: '#', label: 'Вдохновение' },
  { href: '#', label: 'Советы' },
  { href: '#', label: 'Найти магазин' },
];

const isMenuOpen = ref(false);
watch(isMenuOpen, () => console.log(isMenuOpen.value));
</script>

<template lang="pug">
.app-header
  button.menu-btn(@click="isMenuOpen = !isMenuOpen")
    icon-close(v-if="isMenuOpen")
    icon-menu(v-else)
  app-logo
  nav.nav
    nav-link(v-for="link in navLinks" :href="link.href" :key="link.href")
      | {{ link.label }}
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
    button.controls__btn_cart(@click="$emit('openCart')") 4
</template>

<style scoped lang="sass">
.menu-btn
  flex-shrink: 0
  width: 2.4rem

  @include from(laptop)
    // appearance: none
    display: none //TODO

.app-header
  @include padding-inline

  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between //*

  height: 10.4rem
  // padding-inline: 64px

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
  color: $color-icon-primary
  max-width: 2rem

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
