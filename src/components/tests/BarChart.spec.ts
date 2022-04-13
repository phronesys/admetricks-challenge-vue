import { mount, VueWrapper } from "@vue/test-utils";
import AmBarChart, { AdmetricksData, Props } from "../AmBarChart.vue";
import { reactive } from "vue";

const data: AdmetricksData[] = reactive([
  {
    name: "ripley",
    reach: 0.4,
    frequency: 6,
  },
]);

describe(`BarChart`, async () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(AmBarChart, {
      props: {
        data,
        margin: 64,
        svgWidth: 900,
        svgHeight: 400,
        colors: ["red", "white"],
      },
    });
  });
  afterEach(() => {
    if (wrapper) wrapper.unmount();
  });

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

  test(`should render rect elements as data.length`, async () => {
    const allRect = wrapper.findAll("rect");
    expect(allRect.length).toEqual(data.length);
  });

  test(`should render rect elements as data.length increases`, async () => {
    const exampleBrand: AdmetricksData = {
      name: "mercadoLibre",
      reach: 0.7,
      frequency: 5,
    };
    const exampleBrand2: AdmetricksData = {
      name: "mercadoLiebre",
      reach: 0.7,
      frequency: 5,
    };
    /* data.length === 1 */
    let allRect = wrapper.findAll("rect");
    expect(allRect.length).toEqual(data.length);

    data.push(exampleBrand);
    await wrapper.setProps({
      data,
    });

    /* data.length === 2 */
    allRect = wrapper.findAll("rect");
    expect(allRect.length).toEqual(data.length);

    data.push(exampleBrand2);
    await wrapper.setProps({
      data,
    });

    /* data.length === 3 */
    allRect = wrapper.findAll("rect");
    expect(allRect.length).toEqual(data.length);
  });
});
