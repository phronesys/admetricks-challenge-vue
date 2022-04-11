<template>
  <section id="cards">
    <div class="card-grid">
      <am-card
        v-for="(classes, index) in cardClasses"
        :key="index"
        :class="classes"
      ></am-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import AmCard from "../../components/AmCard.vue";
const cardClasses = [
  "row-start-2 row-end-3 col-start-1 col-end-2 sm:w-11/12 justify-self-end",
  "row-start-2 row-end-4 col-start-2 col-end-3",
  "row-start-1 row-end-4 col-start-3 col-end-4",
  "row-start-3 row-end-5 col-start-1 col-end-2",
  "row-start-4 row-end-6 col-start-2 col-end-4",
];
</script>

<style lang="postcss">
section#cards {
  @apply pb-80 max-w-[1400px] w-full flex justify-center mx-auto z-10;
}
section#cards .card-grid {
  @apply h-[400px] w-full px-8 flex flex-col mx-auto sm:grid justify-center gap-8;
  @apply sm:h-[600px];
  @apply lg:h-[800px];
  @apply xl:h-[1000px];
  @apply 2xl:h-[1200px];

  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 10% 18% 27% 37% 8%;
}
</style>
