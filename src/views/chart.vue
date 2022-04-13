<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from "vue";
interface AdmetricksData {
  name: string;
  reach: number;
  frequency: number;
}

onMounted(() => {
  const mockData = [
    { name: "falabella", reach: 0.54, frequency: 8.13 },
    { name: "paris", reach: 0.25, frequency: 3.06 },
    /*     { name: "owo", reach: 0.3, frequency: 6.06 },
    { name: "miau", reach: 0.21, frequency: 2.06 },
    { name: "waw", reach: 0.4, frequency: 2.06 },
    { name: "1", reach: 0.57, frequency: 2.06 },
    { name: "asoid", reach: 0.1, frequency: 2.06 },
    { name: "sdlkgvj", reach: 0.8, frequency: 2.06 },
    { name: "", reach: 0.45, frequency: 2.06 }, */
  ];
  const margin = {
    top: 32,
    right: 64,
    bottom: 64,
    left: 64,
  };
  const svgWidth = 900;
  const svgHeight = 500;
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;
  const colors = ["#f4bd6a", "#5ec0bc"];
  /* create color by reach */
  const quantizeScale = d3.scaleQuantize<string>().domain([0, 1]).range(colors);

  /* create svg element */
  const svg = d3
    .select("#chart-view")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  /* X axis */
  const xAxis = d3
    .scaleBand()
    .range([0, width])
    .domain(mockData.map((data) => data.name))
    .padding(0.3);

  /* append text to bars using xAxis */
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xAxis))
    .selectAll("text")
    .attr("transform", `translate(-10,0)rotate(-45)`)
    .style("text-anchor", "end"); // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor

  /* Y axis for reach */
  const yAxis = d3.scaleLinear().domain([0, 0.54]).range([height, 0]);
  svg
    .append("g")
    .call(d3.axisLeft(yAxis).tickFormat(d3.format(".2%")).ticks(6));

  /* create bars */
  svg
    .selectAll("reach")
    .data(mockData)
    .enter()
    .append("rect")
    .attr("x", (data) => Number(xAxis(data.name)))
    .attr("width", xAxis.bandwidth())
    .attr("fill", (data) => quantizeScale(data.reach))
    .attr("height", (data) => height - yAxis(data.reach))
    .attr("y", (data) => yAxis(data.reach));

  /* frequency */
  /* Y axis for frequency, just change the domain */
  const yAxisFreq = d3.scaleLinear().domain([0, 8]).range([height, 0]);

  svg
    .append("g")
    .call(d3.axisRight(yAxisFreq).ticks(4))
    .attr("transform", `translate(${width},0)`);

  /* append text to circles */
  /*   svg
    .selectAll("text")
    .data(mockData)
    .enter()
    .append("text")
    .text(data => data.frequency)
    .attr("x", (data) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2)
    .attr("y", (data) => Number(yAxisFreq(data.frequency))); */
  /* lines between circles */
  var line = d3
    .line<AdmetricksData>()
    .x((data: AdmetricksData) => {
      return Number(xAxis(data.name)) + xAxis.bandwidth() / 2;
    })
    .y((data: AdmetricksData) => {
      return margin.top + Number(yAxisFreq(data.frequency));
    });

  svg
    .append("path")
    .datum(mockData.map((data) => data.frequency))
    .attr("fill", "none")
    .attr("stroke", "#5682b0")
    .attr("stroke-width", 2.5)
    .attr("d", line(mockData));

  /* circles */
  svg
    .selectAll("frequency")
    .data(mockData)
    .enter()
    .append("circle")
    .attr("fill", "white")
    .attr("stroke", "#5682b0")
    .attr("stroke-width", 2.5)
    .attr("cx", (data) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2)
    .attr("cy", (data) => margin.top + Number(yAxisFreq(data.frequency)))
    .attr("r", 8);

  svg
    .selectAll("frequencyText")
    .data(mockData)
    .enter()
    .append("text")
    .attr("x", (data) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2)
    .attr("y", (data) => margin.top + yAxisFreq(data.frequency) - 16)
    .attr('text-anchor', 'start')
    .style('font-size', '14px')
    .style('font-weight', '600')
    .text(data => data.frequency)
});
</script>

<template>
  <main id="chart-view"></main>
</template>

<style lang="postcss">
main#chart-view {
  @apply grid place-items-center h-screen -mt-2 px-40;
  & > svg {
    @apply border border-admetricks-gray rounded-md;
    g.tick > line,
    path.domain {
      @apply hidden;
    }
  }
}
</style>
