<template>
  <img v-if="iconUrl" :src="iconUrl" class="w-8 h-8" />
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "device",
  },
});

const iconUrl = new URL(`../assets/icons/icon-${props.name}.png`, import.meta.url).href;
</script>

<style lang="postcss"></style>
