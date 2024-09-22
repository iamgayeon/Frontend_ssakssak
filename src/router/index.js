import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import authRotes from "./auth";
import boardRotes from "./board";
import travelRoutes from "./travel";
import galleryRoutes from "./gallery";
import StudentStockPage from "@/pages/student/stock/StudentStockPage.vue";
import TeacherStockPage from "@/pages/teacher/stock/TeacherStockPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/student/stock",
      name: "StudentStockPage",
      component: StudentStockPage,
    },
    {
      path: "/teacher/stock",
      component: TeacherStockPage,
    },
    ...authRotes,
    ...boardRotes,
    ...travelRoutes,
    ...galleryRoutes,
  ],
});

export default router;
