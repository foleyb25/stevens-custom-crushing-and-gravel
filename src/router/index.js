import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomeView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../pages/ProductView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../pages/ServicesView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../pages/ContactView.vue"),
      meta: { scrollToTop: true },
    },
    {
      path: "/location",
      name: "Location",
      component: () => import("../pages/LocationView.vue"),
      meta: { scrollToTop: true },
    },
  ],
});

export default router;
