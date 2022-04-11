<template>
  <main id="chart"></main>
</template>

<script setup lang="ts">
/*
  implemented as 
  https://www.digitalocean.com/community/tutorials/getting-started-with-data-visualization-using-javascript-and-the-d3-library 
*/
import * as d3 from "d3";
import { onMounted } from "vue";

interface AdmetricksData {
  name: string;
  reach: number;
  frequency: number;
}
const barWidth: number = 200;

const calculateBarHeight = (dataPoint: AdmetricksData) => {
  return dataPoint.reach * 100;
};

const calculateXPosition = (
  dataPoint: AdmetricksData,
  index: number,
  offset: number
) => index * (barWidth + 50) + offset;

const calculateYPosition = (
  dataPoint: AdmetricksData,
  index: number,
  offset: number
) => 500 - dataPoint.reach * 100 - 20;

const getBrandName = (dataPoint: AdmetricksData) => {
  return dataPoint.name;
};

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
    .attr("height", calculateBarHeight)
    .attr("width", barWidth)
    .attr("x", (d, i) => calculateXPosition(d, i, 0))
    .attr("y", (d, i) => calculateYPosition(d, i, 0));

  svg.select("rect").attr("id", "falabella");

  svg
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(getBrandName)
    .attr("x", (d, i) => calculateXPosition(d, i, 60))
    .attr("y", 495);

  /* 
  I need to create other chart over this one with frequency
  to show the co-relation between reach and frequency,
  but using points instead of bars
  */
});
</script>

<style lang="postcss">
main#chart {
  @apply grid place-items-center h-screen -mt-2 px-40;
  & > svg > rect {
    @apply fill-[#f4bd6a];
    &#falabella {
      @apply fill-[#5ec0bc];
    }
  }
}
</style>
