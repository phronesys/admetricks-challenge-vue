<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import * as d3 from "d3";

export interface AdmetricksData {
  name: string;
  reach: number;
  frequency: number;
}
export interface Props {
  data: AdmetricksData[];
  margin: number;
  svgWidth: number;
  svgHeight: number;
  colors: string[];
}
const { data, margin, svgHeight, svgWidth, colors } = defineProps<Props>();
const svgRef = ref(null);

onMounted(() => {
  watchEffect(() => {
    const svgElement = d3.select(svgRef.value).select("svg");

    if (svgElement !== null) {
      d3.select(svgRef.value).select("svg").remove();
    }

    const width = svgWidth - margin * 2;
    const height = svgHeight - margin * 2;
    /* create color by reach */
    const quantizeScale = d3
      .scaleQuantize<string>()
      .domain([0, 1])
      .range(colors);

    /* create svg element */
    const svg = d3
      .select(svgRef.value)
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", `translate(${margin},${margin})`);

    /* X axis */
    const xAxis = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((data: AdmetricksData) => data.name))
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
    const yAxis = d3.scaleLinear().domain([0, 0.5]).range([height, 0]);
    svg
      .append("g")
      .call(d3.axisLeft(yAxis).tickFormat(d3.format(".2%")).ticks(6));

    /* create bars */
    svg
      .selectAll("reach")
      .data(data)
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

    var line = d3
      .line<AdmetricksData>()
      .x((data: AdmetricksData) => {
        return Number(xAxis(data.name)) + xAxis.bandwidth() / 2;
      })
      .y((data: AdmetricksData) => {
        return Number(yAxisFreq(data.frequency));
      });

    svg
      .append("path")
      .datum(data.map((data: AdmetricksData) => data.frequency))
      .attr("fill", "none")
      .attr("stroke", "#5682b0")
      .attr("stroke-width", 2.5)
      .attr("d", line(data));

    /* circles */
    svg
      .selectAll("frequency")
      .data(data)
      .enter()
      .append("circle")
      .attr("fill", "white")
      .attr("stroke", "#5682b0")
      .attr("stroke-width", 2.5)
      .attr("cx", (data) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2)
      .attr("cy", (data) => Number(yAxisFreq(data.frequency)))
      .attr("r", 8);

    /* append text to circles */
    svg
      .selectAll("frequencyText")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (data) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2)
      .attr("y", (data) => yAxisFreq(data.frequency) - 16)
      .attr("text-anchor", "start")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .text((data) => data.frequency);
  });
});
</script>

<template>
  <div ref="svgRef" id="chart-view"></div>
</template>

<style lang="postcss">
#chart-view {
  & > svg {
    g.tick > line,
    path.domain {
      @apply hidden;
    }
  }
}
</style>
