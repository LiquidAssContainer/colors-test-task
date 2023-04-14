<script setup lang="ts">
import { ref } from 'vue';

import { AppLogo } from './AppLogo';
import { NavLink } from './NavLink';

import IconSearch from './icons/search.svg';
import IconProfile from './icons/profile.svg';
import IconHeart from './icons/heart.svg';
import IconMenu from './icons/burger-menu.svg';
import IconClose from 'shared/ui/icons/close.svg';
import { OpenCartButton } from './OpenCartButton';

defineEmits(['openCart']);

const navLinks = [
  { href: '#procuts', label: 'Продукты' },
  { href: '#colors', label: 'Цвета' },
  { href: '#', label: 'Вдохновение' },
  { href: '#', label: 'Советы' },
  { href: '#', label: 'Найти магазин' },
];

const isMenuOpen = ref(false);
</script>

<template lang="pug">
.app-header
  button.menu-btn.mobile-only(@click="isMenuOpen = !isMenuOpen")
    icon-close.menu-btn__icon(v-if="isMenuOpen")
    icon-menu.menu-btn__icon(v-else)
  .nav__container
    app-logo
    nav.nav(:data-opened="isMenuOpen")
      nav-link(v-for="link in navLinks" :href="link.href" :key="link.href")
        | {{ link.label }}
  .desktop-controls
    .contact
      address
        a.contact__tel(href="tel:+74952217769")
          | +7 (495) 221-77-69
      button.callback
        | Заказать звонок
    .controls
      icon-heart.controls__icon
      icon-profile.controls__icon
      icon-search.controls__icon
      open-cart-button(@open-cart="$emit('openCart')")
  open-cart-button.mobile-only(@open-cart="$emit('openCart')")
</template>

<style scoped lang="sass">
.menu-btn
  flex-shrink: 0
  width: 2.4rem

  &__icon
    color: $color-icon-primary

.app-header
  @include padding-inline

  position: relative

  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between //*
  gap: 15%

  max-width: 1920px
  height: 10.4rem
  padding-block: 1.5rem
  margin-inline: auto

.nav__container
  display: flex
  align-items: center
  // justify-content: space-between
  justify-content: center
  flex-grow: 1
  gap: 2.4rem

.nav
  display: flex
  gap: 2.4rem

  background-color: $color-bg-primary
  margin-left: auto

  @include to(tablet)
    position: absolute
    left: 0
    top: 100%
    z-index: 200

    width: 100%
    padding: 0 20px 20px
    border-bottom: 1px solid $grey-1

    flex-direction: column

    &[data-opened="false"]
      display: none

.desktop-controls
  display: flex
  align-items: center
  // gap: 6vw
  gap: 2.4rem
  flex-grow: 1
  // justify-content: space-between
  justify-content: center

  @include to(tablet)
    display: none

.contact
  line-height: 1

address
  margin-bottom: .2rem

.contact__tel
  font-size: 1.6rem
  font-weight: 500
  font-style: normal
  letter-spacing: -0.02em

  color: $color-typo-primary

.callback
  font-size: 1.4rem
  line-height: 1

  color: $color-typo-primary
  opacity: 0.3
  transition: .2s all ease-in-out

  &:hover
    opacity: 1

.controls
  display: flex
  gap: 2.8rem
  margin-left: auto

.controls__icon
  color: $color-icon-primary
  max-width: 2rem

.mobile-only
  @include from(laptop)
    display: none
</style>
