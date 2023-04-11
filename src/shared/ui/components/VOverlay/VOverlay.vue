<template lang="pug">
.overlay
  slot
</template>

<style scoped lang="sass">
$color-background: #000

.overlay
  position: fixed
  inset: 0
  z-index: 1

  background-color: rgba($color-background, 0.7)
</style>
