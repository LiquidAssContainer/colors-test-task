<script setup lang="ts">
import { useStore } from 'vuex';
import IconMinus from 'shared/ui/icons/minus.svg';
import IconPlus from 'shared/ui/icons/plus.svg';

interface Props {
  id: string;
  amount: number;
}

const store = useStore();
const props = defineProps<Props>();

const increment = () => store.dispatch('cart/increment', props.id);
const decrement = () => store.dispatch('cart/decrement', props.id);
</script>

<template lang="pug">
.amount-controls
  button.amount-controls__amount-btn(@click="decrement")
    icon-minus.amount-btn__icon
  .amount-controls__amount
    | {{ amount }}
  button.amount-controls__amount-btn(@click="increment")
    icon-plus.amount-btn__icon
</template>

<style scoped lang="sass">
.amount-controls
  display: flex
  align-items: center

  &__amount
    width: 4.8rem

    font-size: 1.6rem
    text-align: center

  &__amount-btn
    display: grid
    place-content: center

    width: 4rem
    height: 2.4rem

    background-color: $color-bg-button
    border-radius: 4px

.amount-btn__icon
  width: 1.6rem
  color: $color-icon-primary
</style>
