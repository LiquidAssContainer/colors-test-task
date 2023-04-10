<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  heading?: string;
  text: string;
  backgroundImg?: typeof URL;
}

const props = defineProps<Props>();

const style = computed(() => ({
  backgroundImage: `url(${props.backgroundImg})`,
}));
</script>

<template lang="pug">
.hero-slide(:style="style")
  h2.hero-slide__heading(v-if="heading")
    | {{ heading }}
  .hero-slide__description
    | {{ text }}
</template>

<style scoped lang="sass">
.hero-slide
  display: flex
  flex-direction: column
  justify-content: center
  gap: 1.25vw //2.4rem

  height: 100%
  padding-inline: 25%

  background-color: $color-bg-green
  background-size: cover
  background-position: bottom

  text-align: center
  color: $color-typo-secondary

  &__heading
    font-size: calc(4.8rem + .9vw) //7.2rem
    font-weight: 400
    line-height: 0.88

    letter-spacing: -0.02em

  &__description
    font-weight: 500
    font-size: calc(1.2rem + .2vw) //1.6rem
    line-height: 1.3
    letter-spacing: 0.02em

    white-space: pre-wrap
</style>
