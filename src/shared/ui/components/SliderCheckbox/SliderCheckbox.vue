<script setup lang="ts">
const {
  name,
  label,
  hasText = true,
} = defineProps<{ name: string; label: string; hasText?: boolean }>();
</script>

<template lang="pug">
label
    input(type="checkbox" :name="name")
    .visual
    .text {{label}}
</template>

<style lang="sass" scoped>
label
    display: flex
    align-items: center
    // gap: 12px

.visual
    position: relative
    display: block
    height: 22px
    width: 36px
    margin-right: 12px

    background: #F2F2F2
    border-radius: 40px

    cursor: pointer
    transition: .2s all ease-in-out

input:checked ~ .visual
    background: #7BB899

    &::before
        left: 21px


input
    appearance: none

.visual::before
    content: ''
    position: absolute
    width: 8px
    height: 8px
    left: 7px
    top: 7px
    border-radius: 50%

    background: #1F2020

.text
    font-size: 12px
    line-height: 100%

    letter-spacing: 0.06em
    text-transform: uppercase


    color: #1F2020
</style>
