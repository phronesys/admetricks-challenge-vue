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
        AmButton
      },
    }
  })
})

afterEach(() => {
  if (wrapper) wrapper.unmount();
})

describe(`ChartView`, async () => {
  test(`will render main.chart`, async () => {
    expect(wrapper.find('main.chart').exists()).toBe(true);
  })
  test(`will render .title #chart-view .footer`, async () => {
    expect(wrapper.find('.title').exists()).toBe(true);
    expect(wrapper.find('#chart-view').exists()).toBe(true);
    expect(wrapper.find('.footer').exists()).toBe(true);
  })
  test(`will contain 2 buttons, with 'add value' 
  and 'remove value' as text, respectively`, async () => {
    const buttons = wrapper.findAllComponents(AmButton)
    expect(buttons).toHaveLength(2);
    expect(buttons[0].text()).toEqual('Add value');
    expect(buttons[1].text()).toEqual('Remove value');
  })
  test(`clicking on Add value button 
  will add an extra 'rect' element to the svg
  and clicking on Remove value button 
  will remove the last rect from svg`, async () => {
    /* initially we have 2 rects */
    let allRect = wrapper.findAll('rect');
    expect(allRect.length).toEqual(2);

    const buttons = wrapper.findAllComponents(AmButton)

    await buttons[0].trigger('click');
    allRect = wrapper.findAll('rect');
    expect(allRect.length).toBe(3);

    await buttons[0].trigger('click');
    allRect = wrapper.findAll('rect');
    expect(allRect.length).toBe(4);

    await buttons[1].trigger('click');
    allRect = wrapper.findAll('rect');
    expect(allRect.length).toBe(3);

    await buttons[1].trigger('click');
    allRect = wrapper.findAll('rect');
    expect(allRect.length).toBe(2);
  })
})