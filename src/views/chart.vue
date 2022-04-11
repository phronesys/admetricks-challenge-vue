<template>
  <main id="chart"></main>
</template>

<script setup lang="ts">
/* reference https://www.digitalocean.com/community/tutorials/getting-started-with-data-visualization-using-javascript-and-the-d3-library */
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const data = [
    { name: "falabella", reach: 0.54, frequency: 8.13 },
    { name: "paris", reach: 0.25, frequency: 3.06 },
  ];

  /* create svg */
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  /* create rectangles */
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("height", (dataPoint) => dataPoint.reach * 100)
    .attr("width", 30)
    .attr("x", (dataPoint, index) => index * 60 + 25)
    .attr("y", (dataPoint) => 500 - (dataPoint.reach * 100));

  /*  */
});
</script>

<style lang="postcss">
main#chart {
  @apply grid place-items-center h-screen -mt-2;
}
</style>
