<template>
  <div class="card-grid">
    <am-card v-for="(n, index) in 5" :key="index"></am-card>
  </div>
</template>

<script setup lang="ts">
import AmCard from "../../components/AmCard.vue";
</script>

<style lang="postcss">
.card-grid {
  @apply grid mx-auto h-[1000px] w-[1200px];
}
</style>
