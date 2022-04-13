import { createRouter, createWebHashHistory } from 'vue-router';

/* views */
import Landing from '../views/landing.vue';
import Chart from '../views/chart.vue';

export const routes = [
  { path: '/', component: Landing },
  { path: '/chart', component: Chart },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})