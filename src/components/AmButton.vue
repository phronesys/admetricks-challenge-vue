<template>
  <button class="button" :class="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="postcss" global>
.button {
  @apply py-2 px-7 rounded-full font-semibold;

  &.primary {
    @apply bg-admetricks-primary text-admetricks-dark;
  }
  &.secondary {
    @apply bg-admetricks-secondary text-admetricks-dark;
  }
  &.tertiary {
    @apply bg-admetricks-tertiary text-admetricks-dark;
  }
  &.link {
    @apply bg-none text-white;
    @apply hover:underline;
  }
  &:not(&.link) {
    @apply transform hover:scale-110 active:scale-95 transition duration-200;
  }
}
</style>
