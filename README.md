## Admetricks challenge (Web component export)

- This branch will not be merged into master, because library is exported here... master has a website to see the landing
- I had to make this repo public to use npm without much configuration (or paying xD): [package](https://www.npmjs.com/package/@phronesyss/bar-chart)
- When building this project you will get a library export (which is created using rollup under the hood and is treeshakeable) with the BarChart Web Component ready to use
- To communicate with the component we need to use CustomEvents:
  - `initialJsonData`: pass initial json data
  - `addBarChartValue`: add value to local data
  - `removeBarChartValue`

## To run this project
To compile use Node v16 or newer

```bash
git clone https://github.com/phronesys/admetricks-challenge-vue
```

```
cd admetricks-challenge-vue && npm i && npm run dev
```

Will open the app in http://localhost:3000 on the landing page, click on any of the buttons in there or add `/chart` to the url to see the d3 chart.

### Tools used

- vue 3 (script setup)
- vueuse
- vue-router
- typescript
- vitest (similar to jest with hmr)
- tailwindcss
- D3

### Reference Web Components
- custom elements (wc) best practices: https://web.dev/index.md/
- vue and web components: https://vuejs.org/guide/extras/web-components.html
- microfrontend using web components: https://medium.com/swlh/micro-frontend-using-web-components-e9faacfc101b
- vite build as lib: https://vitejs.dev/guide/build.html#library-mode

### Reference D3

- https://www.digitalocean.com/community/tutorials/getting-started-with-data-visualization-using-javascript-and-the-d3-library
- https://youtu.be/TOJ9yjvlapY
- https://stackoverflow.com/questions/63720976/d3-v5-center-path-line-in-a-bar-graph
- https://observablehq.com/@d3/learn-d3-scales?collection=@d3/learn-d3
- https://stackoverflow.com/questions/46976677/d3-typescript-set-element-to-an-attribute-of-the-path-element

and much more stackoverflow...
I should have used this 😳 https://c3js.org/examples.html


