<template lang="pug">
.carousel-slide
  slot
</template>

<style scoped lang="sass">
.carousel-slide
  @include size(100%)
  flex-shrink: 0
</style>
