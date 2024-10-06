export default [
  {
    path: "/student/home",
    name: "StudentHome",
    component: () => import("../pages/student/home/StudentHome.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/bank",
    name: "StudentBank",
    component: () => import("../pages/student/bank/StudentBank.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/event",
    name: "StudentEvent",
    component: () => import("../pages/student/event/StudentEvent.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/profile",
    name: "StudentProfile",
    component: () => import("../pages/student/profile/StudentProfile.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/store",
    name: "StudentStore",
    component: () => import("../pages/student/store/StudentStorePage.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/stock",
    name: "StudentStock",
    component: () => import("../pages/student/stock/StudentStockPage.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/event/test",
    name: "StudentTest",
    component: () => import("../pages/student/event/MoneyPing.vue"),
    meta: { role: "ROLE_STUDENT", requiresAuth: true },
  },
  {
    path: "/student/auth/login",
    name: "StudentLogin",
    component: () => import("../pages/student/auth/StudentLogin.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/student/auth/changepw",
    name: "StudentChangepw",
    component: () => import("../pages/student/auth/StudentChangepw.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/student/auth/findpw",
    name: "StudentFindpw",
    component: () => import("../pages/student/auth/StudentFindpw.vue"),
    meta: { requiresAuth: false },
  },
];
