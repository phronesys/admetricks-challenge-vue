import AmBarChart from "../../components/AmBarChart.vue";
import Chart from "../chart.vue";
import AmButton from "../../components/AmButton.vue";
import { mount, VueWrapper } from "@vue/test-utils";

let wrapper: VueWrapper;

beforeEach(() => {
  wrapper = mount(Chart, {
    global: {
      components: {
        AmBarChart,
        AmButton,
      },
    },
  });
});

afterEach(() => {
  if (wrapper) wrapper.unmount();
});

describe(`ChartView`, async () => {
  test(`will render main.chart`, async () => {
    expect(wrapper.find("main.chart").exists()).toBe(true);
  });
  test(`will render .title #chart-view .footer`, async () => {
    expect(wrapper.find(".title").exists()).toBe(true);
    expect(wrapper.find("#chart-view").exists()).toBe(true);
    expect(wrapper.find(".footer").exists()).toBe(true);
  });
});
