## Admetricks challenge

This is the first part of the admetricks challenge, that consist on creating two components:

- [X] Responsive landing page
- [X] D3 chart
- [ ] ~~AngularJS Microfront~~

The idea is to incorporate this components into an AngularJS App as a single-spa, containing the Vue app as a component with views...
But I couldn't do the AngularJs part because of time, I spend quite a while on learning D3, and I did enjoy it 

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

### Reference D3

- https://www.digitalocean.com/community/tutorials/getting-started-with-data-visualization-using-javascript-and-the-d3-library
- https://youtu.be/TOJ9yjvlapY
- https://stackoverflow.com/questions/63720976/d3-v5-center-path-line-in-a-bar-graph
- https://observablehq.com/@d3/learn-d3-scales?collection=@d3/learn-d3
- https://stackoverflow.com/questions/46976677/d3-typescript-set-element-to-an-attribute-of-the-path-element

and much more stackoverflow...
I should have used this 😳 https://c3js.org/examples.html


