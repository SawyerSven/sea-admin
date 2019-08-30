import Vue from 'vue';

function registerEachComponent(item: any) {
  Vue.component(item.name, item.component);
}

function registerComponents(componentList: any) {
  componentList.map((item: any) => {
    registerEachComponent(item);
  });
}

const components = [
  {
    name: 'TableFilter',
    component: () => import('@/components/global/TableFilter.vue')
  }
];

registerComponents(components);