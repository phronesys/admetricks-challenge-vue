<template>
  <div class="feature">
    <!-- icon -->
    <am-icon></am-icon>
    <h4>
      <slot name="title"></slot>
    </h4>
    <p>
      <slot name="body"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import AmIcon from './AmIcon.vue';
const props = defineProps({
  iconName: {
    type: String,
    default: 'device'
  }
});
</script>

<style lang="postcss">
.feature {
  @apply flex flex-col gap-2;
  & > h4 {
    @apply text-lg text-white;
  }
}
</style>
