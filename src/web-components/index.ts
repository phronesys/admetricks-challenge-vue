/* 
in this part I found a good approach would be to use web components
because we can wrap an especific part of the app or the entire app,
maybe I'm wrong, but I hope is this way

A thing I'd like on using web components, is that we can create 
new code with Vue 3 and use that temporary in old codebases 
(ex: AngularJS and Vue 2), without having to maintain the same code 
on different codebases, this is really good as a pre-migration strategy,
by getting new features on parts that we don't need to change now

custom elements (wc) best practices: https://web.dev/index.md/
vue and web components: https://vuejs.org/guide/extras/web-components.html
microfrontend using web components: https://medium.com/swlh/micro-frontend-using-web-components-e9faacfc101b

*/

import { defineCustomElement } from "vue";
import AmBarChart from "../components/AmBarChart.vue";

const BarChart = defineCustomElement(AmBarChart);
customElements.define("bar-chart", BarChart);

export default BarChart;
/* instantiate the custom element */
/* document.body.appendChild(
  new BarChart({
    data: [
      { name: 'batman', reach: 0.6, frequency: 5 },
      { name: 'robin', reach: 0.2, frequency: 8 }
    ],
    margin: 64,
    "svgHeight": 400,
    "svgWidth": 900,
    colors: ["#f4bd6a", "#5ec0bc"],
  })
);
 */