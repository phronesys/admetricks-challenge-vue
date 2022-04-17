<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import * as d3 from "d3";

export interface AdmetricksData {
  name: string;
  reach: number;
  frequency: number;
}
export interface Props {
  margin: number | string;
  svgWidth: number | string;
  svgHeight: number | string;
}

const { margin, svgHeight, svgWidth } = defineProps<Props>();
const svgRef = ref(null);
const dataLocal = ref<AdmetricksData[]>();

/* render d3 chart */
const renderChart = (data: AdmetricksData[]) => {
  const svgElement = d3.select(svgRef.value).select("svg");

  if (svgElement !== null) {
    d3.select(svgRef.value).select("svg").remove();
  }

  const width = Number(svgWidth) - Number(margin) * 2;
  const height = Number(svgHeight) - Number(margin) * 2;
  /* create color by reach */
  const quantizeScale = d3
    .scaleQuantize<string>()
    .domain([0, 1])
    .range(["#f4bd6a", "#5ec0bc"]);

  /* create svg element */
  const svg = d3
    .select(svgRef.value)
    .append("svg")
    .attr("width", Number(svgWidth))
    .attr("height", Number(svgHeight))
    .append("g")
    .attr("transform", `translate(${Number(margin)},${Number(margin)})`);

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
    .attr("x", (data: AdmetricksData) => Number(xAxis(data.name)))
    .attr("width", xAxis.bandwidth())
    .attr("fill", (data: AdmetricksData) => quantizeScale(data.reach))
    .attr("height", (data: AdmetricksData) => height - yAxis(data.reach))
    .attr("y", (data: AdmetricksData) => yAxis(data.reach));

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
    .attr(
      "cx",
      (data: AdmetricksData) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2
    )
    .attr("cy", (data: AdmetricksData) => Number(yAxisFreq(data.frequency)))
    .attr("r", 8);

  /* append text to circles */
  svg
    .selectAll("frequencyText")
    .data(data)
    .enter()
    .append("text")
    .attr(
      "x",
      (data: AdmetricksData) => Number(xAxis(data.name)) + xAxis.bandwidth() / 2
    )
    .attr("y", (data: AdmetricksData) => yAxisFreq(data.frequency) - 16)
    .attr("text-anchor", "start")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .text((data: AdmetricksData) => data.frequency);
};

/* add random data */
const addValue = ({ detail }: any) => {
  if (dataLocal.value === undefined)
    return new Error("Can't add value to undefined");

  // update dataLocal and re-render
  dataLocal.value.push(detail);
  renderChart(dataLocal.value);
};
/* remove last data inserted */
const removeValue = () => {
  if (dataLocal.value === undefined)
    return new Error("Can't remove value from undefined");

  // update dataLocal and re-render
  dataLocal.value.pop();
  renderChart(dataLocal.value);
};

/* get initial data to populate dataLocal */
const initializeData = ({ detail }: any) => {
  dataLocal.value = detail;
  if (dataLocal.value !== undefined) renderChart(dataLocal.value);
};

/* lifecycle */
onMounted(() => {
  /* listen to custom event to get initial data */
  document.addEventListener("initialJsonData", initializeData);

  /* listen to custom events to know when to add or remove values */
  document.addEventListener("addBarChartValue", addValue);
  document.addEventListener("removeBarChartValue", removeValue);
});

onUnmounted(() => {
  document.removeEventListener("initialJsonData", initializeData);
  document.removeEventListener("addBarChartValue", addValue);
  document.removeEventListener("removeBarChartValue", removeValue);
});
</script>

<template>
  <div ref="svgRef" id="chart-view">
    <div class="p-8" v-if="!dataLocal">There is no data passed</div>
  </div>
</template>

<style>
g.tick > line,
path.domain {
  display: none;
}
</style>
