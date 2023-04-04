<script setup>
import { reactive, onBeforeUnmount } from 'vue';
import { nanoid } from 'nanoid';

import { Stopwatch } from 'widgets/stopwatch';
import { AddStopwatchButton } from 'features/add-stopwatch';

const stopwatches = reactive([]);

const onAdd = () => {
  stopwatches.push({
    id: nanoid(),
    time: 0,
    timestamp: Date.now(),
    pauseTimestamp: Date.now(),
    isPaused: true,
  });
};

const onTogglePause = (stopwatchId, value) => {
  const stopwatch = stopwatches.find(({ id }) => stopwatchId === id);
  if (!stopwatch) return;

  stopwatch.isPaused = value;

  // сдвиг timestamp после возобновления таймера (в зависимости от длительности паузы)
  const currTime = Date.now();

  if (value) {
    stopwatch.pauseTimestamp = currTime;
  } else {
    stopwatch.timestamp += currTime - stopwatch.pauseTimestamp;
  }
};

const onRemove = (stopwatchId) => {
  const index = stopwatches.findIndex(({ id }) => stopwatchId === id);
  if (index !== -1) {
    stopwatches.splice(index, 1);
  }
};

const onStop = (stopwatchId) => {
  const stopwatch = stopwatches.find(({ id }) => stopwatchId === id);
  if (!stopwatch) return;

  stopwatch.isPaused = true;
  stopwatch.time = 0;
  stopwatch.timestamp = Date.now();
  stopwatch.pauseTimestamp = Date.now();
};

// сравниваются таймстампы, чтобы не было потери точности из-за setInterval
const interval = setInterval(() => {
  for (const stopwatch of stopwatches) {
    if (stopwatch.isPaused) continue;

    const { time, timestamp } = stopwatch;
    const diff = Math.floor((Date.now() - timestamp) / 1000);

    // if (diff > time) {
    stopwatch.time = diff;
    // }
  }
}, 20);

onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <main class="main">
    <ul class="list">
      <li v-for="stopwatch in stopwatches" :key="stopwatch.id">
        <stopwatch
          :stopwatch="stopwatch"
          :onTogglePause="onTogglePause"
          :onStop="onStop"
          :onRemove="onRemove"
        />
      </li>
      <add-stopwatch-button @click="onAdd" />
    </ul>
  </main>
</template>

<style lang="sass" scoped>
$card-width: min(225px, 100%)

@mixin grid-cols($amount, $width: $card-width)
  grid-template-columns: repeat($amount, $width)

.main
  padding: 72px 10px

.list
  display: grid
  justify-content: center
  gap: 45px 50px

  @media (min-width: 1024px)
    @include grid-cols(3)

  @media (min-width: 768px) and (max-width: 1023px)
    @include grid-cols(2)

  @media (max-width: 767px)
    @include grid-cols(1)
</style>
