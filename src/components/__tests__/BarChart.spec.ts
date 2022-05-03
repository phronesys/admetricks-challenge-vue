import { render, RenderResult, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import AmBarChart, { AdmetricksData } from "../AmBarChart.vue";

/* https://www.youtube.com/watch?v=FJRuG85tXV0 */

describe(`BarChart`, async () => {
  const props = {
    margin: 64,
    svgWidth: 900,
    svgHeight: 400,
  };
  const data: AdmetricksData[] = [
    { name: "owo", reach: 0.5, frequency: 6 },
    // { name: "owo", reach: 0.5, frequency: 6 },
    // { name: "owo", reach: 0.5, frequency: 6 },
    // { name: "owo", reach: 0.5, frequency: 6 },
    // { name: "owo", reach: 0.5, frequency: 6 },
    // { name: "owo", reach: 0.5, frequency: 6 },
  ];
  let renderer: RenderResult;
  beforeEach(() => {
    renderer = render(AmBarChart, { props })
  })
  beforeAll(() => {
    renderer?.unmount();
  })

  it(`should render a div element where chart-view
  will be appended`, async () => {
    const chartView = document.querySelector("#chart-view");

    expect(chartView).toBeTruthy();
    expect(chartView?.tagName).toBe("DIV");
  });

  it(`should render a placeholder text inside`, async () => {
    const placeholderText = "There is no data passed";
    const chartView = document.querySelector("#chart-view");

    expect(chartView?.textContent).toBe(placeholderText);
  });

  it(`should render an svg after 'initialJsonData' CustomEvent
  is dispatched`, async () => {
    const chartView = document.querySelector("#chart-view");

    expect(chartView?.innerHTML).not.toContain("svg");
    document.dispatchEvent(
      new CustomEvent("initialJsonData", {
        detail: data,
      })
    );
    expect(chartView?.innerHTML).toContain("svg");
  });

  it(`should have n° rect elements as data.length`, async () => {
    const chartView = document.querySelector("#chart-view");
    document.dispatchEvent(
      new CustomEvent("initialJsonData", {
        detail: data,
      })
    );
    const allRects = chartView?.querySelectorAll("rect");

    expect(allRects?.length).toEqual(data.length);
  });

  it(`should add a rect element if we dispatch 'addBarChartValue' 
  CustomEvent with an AdmetricksData type object in detail`, async () => {
    const chartView = document.querySelector("#chart-view");
    document.dispatchEvent(
      new CustomEvent("initialJsonData", {
        detail: data,
      })
    );

    /* initially */
    const initialNumberOfRects = data.length;

    const object: AdmetricksData = {
      name: "batman",
      reach: 0.5,
      frequency: 6,
    };
    document.dispatchEvent(
      new CustomEvent("addBarChartValue", {
        detail: object,
      })
    );

    const allRects = chartView?.querySelectorAll("rect");
    expect(allRects?.length).toEqual(initialNumberOfRects + 1);
  });

  it(`should remove a rect element if we dispatch 
  'removeBarChartValue'`, async () => {
    const chartView = document.querySelector("#chart-view");
    document.dispatchEvent(
      new CustomEvent("initialJsonData", {
        detail: data,
      })
    );
    /* initially, have 1 rect */
    const initialNumberOfRects = data.length;
    document.dispatchEvent(new CustomEvent("removeBarChartValue"));

    const allRects = chartView?.querySelectorAll("rect");
    expect(allRects?.length).toEqual(initialNumberOfRects - 1);
  });
});
