<template>
  <div class="card" :class="{ alternative }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  alternative: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="postcss">
.card {
  @apply w-full h-full p-5 bg-[#EEF2FA] rounded-[40px];
  &.alternative {
    @apply bg-admetricks-dark border border-white rounded-[32px];
  }
}
</style>
