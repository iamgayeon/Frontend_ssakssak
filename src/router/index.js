import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/student/home/StudentHome.vue';
import authRotes from './auth';
import boardRotes from './board';
import galleryRoutes from './gallery';
import studentRoutes from './student';
import StudentStockPage from "@/pages/student/stock/StudentStockPage.vue";
import TeacherStockPage from "@/pages/teacher/stock/TeacherStockPage.vue";
import teacherRoutes from './teacher';

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
    ...galleryRoutes,
    ...studentRoutes,
    ...teacherRoutes
  ],
});

export default router;
