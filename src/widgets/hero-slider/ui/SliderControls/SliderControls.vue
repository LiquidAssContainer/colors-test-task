<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  amount: number;
  activeIndex: number;
  setIndex: (index: number | keyof []) => void;
}

const props = defineProps<Props>();
const { amount, activeIndex = 0, setIndex } = toRefs(props);
</script>

<template lang="pug">
.slider-controls
  button.slider-controls__btn(
    v-for="(_, index) in amount" :key="index"
    :class="{active: activeIndex === index }"
    @click="() => setIndex(index)")
      //- | {{ index }}

</template>

<style scoped lang="sass">
.slider-controls
  position: absolute
  height: 3.2rem

  display: flex
  align-items: center
  justify-content: space-between
  gap: 10px

  padding: 13px 24px

  background: rgba(0, 0, 0, 0.4)
  border-radius: 1.6rem
.slider-controls__btn
  @include size(.6rem)

  background: #FFFFFF
  opacity: 0.2
  border-radius: 50%

  &.active
    background: #fff
    opacity: 1
</style>
