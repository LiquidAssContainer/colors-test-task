<script setup lang="ts">
import { ref, computed, useSlots, onBeforeUnmount, watch } from 'vue';
import { CarouselPagination } from './CarouselPagination';
import { CarouselButton } from './CarouselButton';
import { debounce } from '../lib';

const activeIndex = ref(0);

const slots = useSlots();

const slotsCount = computed((): number => {
  try {
    const slot = slots?.default?.()[0];
    const length = slot?.children?.length;
    return (length as any) || 0;
  } catch {
    return 0;
  }
});

const hasPrev = computed(() => activeIndex.value > 0);
const hasNext = computed(() => activeIndex.value < slotsCount.value - 1);
const style = computed(() => ({
  '--translate': `${-100 * activeIndex.value}%`,
}));

const [switchSlide, clearSwitchSlide] = debounce(() => {
  if (hasNext.value) {
    activeIndex.value += 1;
  } else {
    activeIndex.value = 0;
  }
  //TODO
}, 500000);

watch(activeIndex, switchSlide, { immediate: true });

onBeforeUnmount(() => {
  clearSwitchSlide();
});
</script>

<template lang="pug">
.carousel(:style="style")
  .carousel__slider
    slot
  carousel-pagination(
    :active-index="activeIndex"
    :amount="slotsCount"
    @set-index="activeIndex = $event")
  .carousel__controls
    carousel-button(v-if="hasPrev" type="prev" @click="activeIndex--")
    carousel-button(v-if="hasNext" type="next" @click="activeIndex++")
</template>

<style scoped lang="sass">
.carousel
  --translate: 0

  display: flex
  justify-content: center

  height: 29vw

  overflow: hidden

  &__slider
    display: flex

    min-width: 100%
    height: 100%

    transform: translateX(var(--translate))
    transition: .5s transform ease-in-out

  &__controls
    position: absolute
    inset: 0

    display: flex

    pointer-events: none

.carousel-pagination
  position: absolute
  bottom: 2vw //3.9rem
  margin-inline: auto
</style>
