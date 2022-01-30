import * as VueRouter from "vue-router";
import Home from "@/pages/home.vue";
const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/layout",
      },
      {
        path: "theme",
        component: () => import("@/pages/theme.vue"),
      },
      {
        path: "layout",
        component: () => import("@/pages/layout.vue"),
      },
      {
        path: "row",
        component: () => import("@/pages/row.vue"),
      },
      {
        path: "icon",
        component: () => import("@/pages/icon.vue"),
      },
      {
        path: "button",
        component: () => import("@/pages/button.vue"),
      },
      {
        path: "checkbox",
        component: () => import("@/pages/checkbox.vue"),
      },
      {
        path: "table",
        component: () => import("@/pages/table.vue"),
      },
    ],
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
