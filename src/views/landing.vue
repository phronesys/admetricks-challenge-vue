<template>
  <section id="landing">
    <am-header></am-header>
    <am-features></am-features>
    <am-card-grid></am-card-grid>
  </section>
</template>

<script setup lang="ts">
import AmCardGrid from "../layouts/landing/AmCardGrid.vue";
import AmFeatures from "../layouts/landing/AmFeatures.vue";
import AmHeader from "../layouts/landing/AmHeader.vue";
</script>

<style lang="postcss">
section#landing {
  @apply flex flex-col mx-auto gap-40 pb-80 pt-96;
  @apply text-admetricks-gray bg-admetricks-dark;
  /* using css instead of an image */
  clip-path: polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0);
}
</style>
