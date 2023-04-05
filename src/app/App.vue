<script setup>
import { Header as VHeader } from 'widgets/header';
import SliderCheckbox from 'shared/ui/components/SliderCheckbox/SliderCheckbox.vue';
import Product from 'widgets/product/Product.vue';
import Cart from 'widgets/cart/Cart.vue';
import './styles/main.sass';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template lang="pug">
v-header
button(@click="() => isOpen = true") openmodal
cart(v-if="isOpen" :onClose="() => isOpen = false")
main
    .filters
        slider-checkbox(label="покупайте деньги")
        slider-checkbox(label="покупайте деньги")
        slider-checkbox(label="покупайте деньги")
        slider-checkbox(label="распродажа")
    section
        .product-amount
            | {{428}} товаров
        .product-list
            product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
            name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
            product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
            name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
            product(img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Multicolored_tempera_paints.jpg/1920px-Multicolored_tempera_paints.jpg"
            name="Какой-то тестовый товар lorem ipsum VUEX-1337" price=8800)
footer
</template>

<style lang="sass" scoped>
main
    display: flex
    padding-top: 72px
    padding-bottom: 7.5%
    padding-inline: 64px
    // grid-template-columns: 360px, 1fr
.product-amount
    margin-bottom: 44px
    font-weight: 500
    font-size: 12px
    line-height: 15px
    letter-spacing: 0.06em

    text-transform: uppercase
.product-list
    display: flex
    flex-wrap: wrap
    // display: grid
    // grid-template-columns: 300px
    gap: 16px 24px

.filters
    display: flex
    flex-direction: column
    gap: 10px
    width: 360px

footer
    background-color: black
    height: 300px
</style>
