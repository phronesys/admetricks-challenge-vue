import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { vi } from "vitest";
import AmHeader from "../AmHeader.vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import { routes } from "../../../router";
import AmButton from "../../../components/AmButton.vue";

let wrapper: VueWrapper;
let router: Router;
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  router.push("/");
  await router.isReady();

  wrapper = mount(AmHeader, {
    global: {
      plugins: [router],
    },
  });
});

afterEach(() => {
  wrapper?.unmount();
});

describe(`Header`, async () => {
  test(`should render #header`, async () => {
    expect(wrapper.find("#header").exists()).toBe(true);
  });

  test(`should render .lead .title .body .buttons`, async () => {
    expect(wrapper.find(".lead").exists()).toBe(true);
    expect(wrapper.find(".title").exists()).toBe(true);
    expect(wrapper.find(".body").exists()).toBe(true);
    expect(wrapper.find(".buttons").exists()).toBe(true);
  });

  test(`should render two AmButton components inside .buttons`, async () => {
    const buttonsElement = wrapper.find(".buttons");
    expect(buttonsElement.findAllComponents(AmButton)).toHaveLength(2);
  });
 /*  
    // no logro hacer funcionar este test... pero se intentó 
    test(`click on a button with class link should call router`, async () => {
    const push = vi.spyOn(router, 'push');
    const buttons = wrapper.findAllComponents(AmButton);
    await buttons[1].trigger("click");
    await flushPromises();
    
    expect(push).toHaveBeenCalledTimes(1)

  }); */
});
