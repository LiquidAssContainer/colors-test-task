<script setup lang="ts">
import { VueElement, computed } from 'vue';
interface Props {
  heading?: string;
  text?: string;
  backgroundImg?: typeof URL;
}

const props = defineProps<Props>();

const style = computed(() => ({
  backgroundImage: `url(${props.backgroundImg})`,
}));
</script>

<template lang="pug">
.hero-slide(:style="style")
  h2.hero-slide__heading(v-if="props.heading")
    | {{ props.heading }}
  .hero-slide__description(v-if="props.text")
    | {{ props.text }}
//- h2.hero-slide__heading
//-   slot(name="heading")
//- .text
//-   slot(name="text")
</template>

<style scoped lang="sass">
.hero-slide
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 24px

  height: 100%

  background-color: $color-bg-green
  background-size: cover
  background-position: bottom

  color: $color-typo-secondary

  &__heading
    font-size: 72px
    font-weight: 400
    line-height: 88%

    letter-spacing: -0.02em

  &__description
    font-weight: 500
    font-size: 16px
    line-height: 130%

    text-align: center
    letter-spacing: 0.02em

    white-space: pre-wrap
</style>
