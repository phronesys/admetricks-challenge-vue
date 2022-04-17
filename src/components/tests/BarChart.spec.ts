import { mount, VueWrapper } from "@vue/test-utils";
import AmBarChart from "../AmBarChart.vue";

/* TODO: repair these tests, I need to find a way to test json import */

let wrapper: VueWrapper;
beforeEach(() => {
  wrapper = mount(AmBarChart, {
    props: {
      url: "../services/data",
      margin: 64,
      svgWidth: 900,
      svgHeight: 400,
    },
  });
});
afterEach(() => {
  wrapper?.unmount();
});

describe(`BarChart`, async () => {
  test(`should render an svg when mounted`, async () => {
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  test(`should render passed data.name inside svg`, async () => {
    const dataName = "ripley";
    const svg = wrapper.find("svg").element.textContent;
    expect(svg).toContain(dataName);
  });

  test(`should render rect element`, async () => {
    expect(wrapper.find("rect").exists()).toBe(true);
  });
});
