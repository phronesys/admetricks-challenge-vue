<template>
  <Landing></Landing>
</template>

<script setup lang="ts">
import Landing from "./views/landing.vue";
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-admetricks-light m-0 pt-2 selection:bg-admetricks-secondary selection:text-white;
}
</style>
