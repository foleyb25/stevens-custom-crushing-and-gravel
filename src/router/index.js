import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomeView.vue"),
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../pages/ProductView.vue"),
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../pages/ServicesView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../pages/ContactView.vue"),
    },
    {
      path: "/location",
      name: "Location",
      component: () => import("../pages/LocationView.vue"),
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: () => import("../pages/JobsView.vue"),
    },
    {
      path: "/jobs/:id",
      name: "Job",
      component: () => import("../pages/JobView.vue"),
    },
  ],
});

export default router;
