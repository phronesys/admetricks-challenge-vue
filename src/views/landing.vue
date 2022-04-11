<template>
  <main id="landing">
    <div class="lines">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <am-header></am-header>
    <am-features></am-features>
    <am-card-grid></am-card-grid>
  </main>
</template>

<script setup lang="ts">
import AmCardGrid from "../layouts/landing/AmCardGrid.vue";
import AmFeatures from "../layouts/landing/AmFeatures.vue";
import AmHeader from "../layouts/landing/AmHeader.vue";
</script>

<style lang="postcss">
main#landing {
  @apply flex flex-col mx-auto gap-40 relative overflow-hidden;
  @apply text-admetricks-gray bg-admetricks-dark;
  /* using css instead of an image */
  clip-path: polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0);

  & > .lines {
    @apply min-w-[1120px] min-h-full flex justify-between -z-20;
    @apply absolute -translate-x-1/2 left-1/2 pb-80;
    span {
      @apply min-h-full min-w-[1px] bg-admetricks-gray/10;
    }
  }
}
</style>
