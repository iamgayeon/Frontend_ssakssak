export default [
  {
    path: "/teacher/home",
    name: "TeacherHome",
    component: () => import("../pages/teacher/home/TeacherHome.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/class",
    name: "TeacherClass",
    component: () => import("../pages/teacher/class/TeacherClass.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/student",
    name: "TeacherStudent",
    component: () => import("../pages/teacher/student/TeacherStudent.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/store",
    name: "TeacherStore",
    component: () => import("../pages/teacher/store/TeacherStore.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/bank",
    name: "TeacherBank",
    component: () => import("../pages/teacher/bank/TeacherBank.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/stock",
    name: "TeacherStock",
    component: () => import("../pages/teacher/stock/TeacherStockPage.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/reward",
    name: "TeacherReword",
    component: () => import("../pages/teacher/reward/TeacherRewardPage.vue"),
    meta: { role: "ROLE_TEACHER", requiresAuth: true },
  },
  {
    path: "/teacher/auth/login",
    name: "TeacherLogin",
    component: () => import("../pages/teacher/auth/TeacherLogin.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/teacher/auth/findid",
    name: "TeacherFindid",
    component: () => import("../pages/teacher/auth/TeacherFindid.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/teacher/auth/findpw",
    name: "TeacherFindpw",
    component: () => import("../pages/teacher/auth/TeacherFindpw.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/teacher/auth/signup",
    name: "TeacherSignup",
    component: () => import("../pages/teacher/auth/TeacherSignup.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/teacher/alarm",
    component: () => import("../pages/alarm/Alarm.vue"),
    meta: { requiresAuth: false },
  },
];
