<script setup>
import { ref, computed, useSlots } from 'vue';
import { SliderControls } from './SliderControls';
import IconChevron from './icons/chevron.svg';
// import img from './img/vase-with-flowers.jpg';

const activeIndex = ref(0);

const setIndex = (i) => {
  activeIndex.value = i;
};

const slots = useSlots();
console.log(slots);

const slotsCount = computed(() => {
  try {
    const [slot] = slots.default();
    return slot.children.length;
  } catch {
    return 0;
  }
});

const style = computed(() => ({
  '--translate': `${-100 * activeIndex.value}%`,
}));
</script>

<template lang="pug">
.hero-slider__container(:style="style")
  .slider
    slot
    //- template(v-for="slot in slots.default()")
    //-   slide-item
    //- .slide
    //-   img(:src="img")
    //- .slide
    //-   img(:src="img")
    //- .slide
    //-   slot
    //-     | fallback
  slider-controls(:active-index="activeIndex" :amount="slotsCount" :setIndex="setIndex")
  button.slider__btn_next
    icon-chevron.icon-chevron

</template>

<style scoped lang="sass">
.icon-chevron
  width: 20px
  height: 40px
  color: #fff

.hero-slider__container
  --translate: 0

  height: 29vw

  display: flex
  justify-content: center
  align-items: flex-end

  overflow: hidden

.slider
  display: flex
  width: 100%
  height: 100%
  transform: translateX(var(--translate))
  transition: .5s transform ease-in-out

.slide
  flex-shrink: 0
  width: 100%
  height: 100%

  img
    width: 100%
    height: 100%
</style>
