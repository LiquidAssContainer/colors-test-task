<script setup lang="ts">
const { onClose } = defineProps<{ onClose: any }>();
</script>

<template lang="pug">
.cart__wrapper
    .cart
        header.cart__header
            h2.cart__title Корзина
            button.button-close(@click="onClose") X
        .cart-items
            .cart-items__header
                .cart-items__amount
                    | 4 товара
                button.cart-items__clear-btn
                    | Очистить список
                    
</template>

<style lang="sass" scoped>

.cart
    position: fixed
    right: 0
    top: 0
    max-width: 600px
    width: 100%
    min-height: 100vh
    padding: 40px
    background-color: #FFFFFF

    &__wrapper
        position: fixed
        background-color: rgba(0, 0, 0, 0.3)
        z-index: 1
        inset: 0

    &__header
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 80px

    &__title
        font-weight: 500
        font-size: 30px
        line-height: 88%

        letter-spacing: -0.04em
        color: #1F2020

.button-close
    box-sizing: border-box
    width: 48px
    height: 48px
    left: 512px
    top: 32px
    border-radius: 50%
    background: transparent

    // opacity: 0.1
    border: 1px solid rgba(0, 0, 0, 0.1)

.cart-items__header
    display: flex
    justify-content: space-between

    font-size: 14px

.cart-items__clear-btn
    opacity: 0.4
    font-weight: 300
</style>
