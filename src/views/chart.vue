<template>
  <main class="chart">
    <div class="title">
      <h4>Alcance y frecuencia por top Marcas</h4>
      <div class="flex items-center divide-x">
        <img src="../assets/icons/icon-download.svg" alt="" />
        <img src="../assets/icons/icon-menu.svg" alt="" />
      </div>
    </div>
    <am-bar-chart margin="64" svg-height="400" svg-width="900"></am-bar-chart>
    <div class="footer">
      <div class="reach">Alcance</div>
      <div class="frequency">Frecuencia</div>
    </div>
  </main>
  <div class="flex flex-row gap-4 justify-center mt-6">
    <am-button type="secondary" @click="addValue"> Add value </am-button>
    <am-button type="tertiary" @click="removeValue"> Remove value </am-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AmBarChart, { AdmetricksData } from "../components/AmBarChart.vue";
import AmButton from "../components/AmButton.vue";
import jsonData from "../services/data.json";
import faker from "@faker-js/faker";

const addValue = () => {
  const name = faker.company.companyName();
  const randomValue: AdmetricksData = {
    name,
    reach: Math.random(),
    frequency: Number((Math.random() * 10).toFixed(2)),
  };
  const customEvent = new CustomEvent("addBarChartValue", {
    detail: randomValue,
  });
  document.dispatchEvent(customEvent);
};

const removeValue = () => {
  const customEvent = new CustomEvent("removeBarChartValue");
  document.dispatchEvent(customEvent);
};

const sendInitialJsonData = () => {
  const data: any = jsonData.data;
  const customEvent = new CustomEvent("initialJsonData", {
    detail: data,
  });
  document.dispatchEvent(customEvent);
};

onMounted(() => {
  sendInitialJsonData();
});
</script>

<style lang="postcss">
main.chart {
  @apply max-w-[900px] h-max shadow-md mx-auto mt-40 rounded-lg overflow-hidden;
  & > .title {
    @apply pl-4 flex flex-row items-center justify-between divide-x;
    @apply bg-gray-50 text-gray-500;
    & img {
      @apply p-2 cursor-pointer;
    }
  }
  & > .footer {
    @apply flex flex-row justify-center items-center gap-6 py-3 text-sm;
    .reach {
      &::before {
        @apply content-[''] block bg-[#5682b0] w-12 h-3;
      }
    }
    .frequency {
      &::before {
        @apply content-[''] block bg-white rounded-full border-2 border-[#5682b0] w-4 h-4;
      }
    }
    .reach,
    .frequency {
      @apply flex flex-row items-center gap-2;
    }
  }
}
</style>
