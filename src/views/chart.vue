<script setup lang="ts">
/*
  implemented as
  https://www.digitalocean.com/community/tutorials/getting-started-with-data-visualization-using-javascript-and-the-d3-library
  https://youtu.be/TOJ9yjvlapY
  https://stackoverflow.com/questions/63720976/d3-v5-center-path-line-in-a-bar-graph
*/
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const mockData = [
    { name: "falabella", reach: 0.54, frequency: 8.13 },
    { name: "paris", reach: 0.25, frequency: 3.06 },
    { name: "owo", reach: 0.3, frequency: 6.06 },
    { name: "miau", reach: 0.21, frequency: 2.06 },
    { name: "waw", reach: 0.21, frequency: 2.06 },
    { name: "1", reach: 0.21, frequency: 2.06 },
    { name: "asoid", reach: 0.21, frequency: 2.06 },
    { name: "sdlkgvj", reach: 0.21, frequency: 2.06 },
    { name: "", reach: 0.21, frequency: 2.06 },
  ];
  const svgWidth: number = 700;

  /* select svg element */
  const svg = d3.select("svg#chart");
  /* reference: https://github.com/d3/d3-scale */
  /*
    - xScale: all the items with the same width
    - domain: tell d3 how many items are
    - rangeRound: tell d3 how much space is available
    - padding: space between bars
  */

  const xScale = d3
    .scaleBand()
    .domain(mockData.map((data) => data.name))
    .rangeRound([0, 500])
    .padding(0.1);
  /*
    yScale: all the bars with proportional height
    - scaleLinear: proportional height for the values
    - domain: uses the value range from dataPoint
    - range: height available (is painted from top to bottom)
  */
  const yScale = d3.scaleLinear().domain([0, 0.54]).range([500, 0]);

  /* create rectangles */
  svg
    .selectAll("rect")
    .data(mockData)
    .enter()
    .append<SVGRectElement>("rect")
    .attr("width", xScale.bandwidth())
    .attr("height", (data) => 420 - yScale(data.reach))
    .attr("y", (data) => yScale(data.reach))
    .attr("x", (data): number => Number(xScale(data.name)));

  svg
    .selectAll("text")
    .data(mockData)
    .enter()
    .append<SVGTextElement>("text")
    .text((data) => data.name)
    .attr("x", (data): number => Number(xScale(data.name)))
    .attr("y", 450);

  /*
  I need to create other chart over this one with frequency
  to show the co-relation between reach and frequency,
  but using points instead of bars
  */
});
</script>

<template>
  <main id="chart-view">
    <svg id="chart" width="500" height="500"></svg>
  </main>
</template>

<style lang="postcss">
main#chart-view {
  @apply grid place-items-center h-screen -mt-2 px-40;
  & > svg {
    @apply border border-admetricks-gray rounded-md;
    /* bars */
    & > rect {
      @apply fill-[#f4bd6a];
      &:hover {
        @apply fill-[#5ec0bc];
      }
    }
  }
}
</style>
