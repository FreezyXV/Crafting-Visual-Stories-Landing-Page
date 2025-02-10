import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import ServicesPage from "@/components/ServicesSection.vue";
import StoriesPage from "@/components/HappyStories.vue";
import ContactPage from "@/components/ContactSection.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/services", component: ServicesPage },
  { path: "/stories", component: StoriesPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
    history: createWebHashHistory(), // 👈 Use Hash Mode for GitHub Pages
    routes,
  });

export default router;
