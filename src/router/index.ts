// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ "@/pages/index.vue"),
  },
  {
    path: "/mouse",
    name: "Mouse",
    component: () =>
      import(/* webpackChunkName: "Mouse" */ "@/pages/mouse.vue"),
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: () =>
      import(/* webpackChunkName: "Pinia" */ "@/pages/Pinia.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
