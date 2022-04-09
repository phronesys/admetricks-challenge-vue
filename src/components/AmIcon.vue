<template>
  <img v-if="iconUrl" :src="iconUrl" class="w-full h-full" />
</template>

<script setup lang="ts">
const { name = "device" } = defineProps<{
  name?: string;
}>();

const baseUrl = `../assets/icons/icon-${name}.png`;
const iconUrl = new URL(baseUrl, import.meta.url).href;
</script>

<style lang="postcss"></style>
