<template>
  <section id="landing">
    <Header></Header>
    <div class="devices">
      <AmCardVue alternative class="w-[530px] h-[405px]"></AmCardVue>
      <AmCardVue alternative class="w-[260px] h-[486px]"></AmCardVue>
    </div>
  </section>
</template>

<script setup lang="ts">
import AmCardVue from "../components/AmCard.vue";
import Header from "../layouts/landing/Header.vue";
</script>

<style lang="postcss">
section#landing {
  @apply text-admetricks-gray bg-admetricks-dark;
  @apply pl-[400px] pr-[270px] pt-[540px] pb-52 flex flex-row justify-center;

  /* using css instead of an image */
  clip-path: polygon(50% 15%, 100% 0, 100% 100%, 0 100%, 0 0);
}

section#landing .devices {
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
</style>
