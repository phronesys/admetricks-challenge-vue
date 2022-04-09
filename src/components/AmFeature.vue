<template>
  <div class="feature">
    <am-icon :name="iconName" class="w-8 h-8"></am-icon>
    <h4>
      <slot name="title"></slot>
    </h4>
    <p>
      <slot name="body"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import AmIcon from "./AmIcon.vue";
const { iconName = "device" } = defineProps<{
  iconName: string;
}>();

</script>

<style lang="postcss">
.feature {
  @apply flex flex-col gap-2 min-w-[260px];
  & > h4 {
    @apply text-lg text-white font-semibold;
  }
  & > p {
    @apply leading-5;
  }
}
</style>
