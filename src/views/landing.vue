<template>
  <section id="landing">
    <main>
      <am-header></am-header>
      <div class="devices">
        <am-card alternative class="w-[530px] h-[405px]"></am-card>
        <am-card alternative class="w-[260px] h-[486px]"></am-card>
      </div>
    </main>

    <am-features></am-features>

    <am-card-grid></am-card-grid>
  </section>
</template>

<script setup lang="ts">
import AmCard from "../components/AmCard.vue";
import AmCardGrid from "../layouts/landing/AmCardGrid.vue";
import AmFeatures from "../layouts/landing/AmFeatures.vue";
import AmHeader from "../layouts/landing/AmHeader.vue";
</script>

<style lang="postcss">
section#landing {
  @apply text-admetricks-gray bg-admetricks-dark;
  /* using css instead of an image */
  clip-path: polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0);
}

section#landing main {
  @apply pl-[400px] pr-[270px] pt-[540px] pb-52 flex flex-row justify-center;
  & .devices {
    @apply relative w-[680px];
    & > .card {
      @apply absolute;

      &:first-child {
        @apply left-12;
      }
      &:last-child {
        @apply right-0 -translate-y-1/2 top-1/2;
      }
    }
  }
}
</style>
