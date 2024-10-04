export default [
  {
    path: '/student/home',
    name: 'StudentHome',
    component: () => import('../pages/student/home/StudentHome.vue'),
  },
  {
    path: '/student/bank',
    name: 'StudentBank',
    component: () => import('../pages/student/bank/StudentBank.vue'),
  },
  {
    path: '/student/event',
    name: 'StudentEvent',
    component: () => import('../pages/student/event/StudentEvent.vue'),
  },
  {
    path: '/student/profile',
    name: 'StudentProfile',
    component: () => import('../pages/student/profile/StudentProfile.vue'),
  },
  {
    path: '/student/store',
    name: 'StudentStore',
    component: () => import('../pages/student/store/StudentStorePage.vue'),
  },
  {
    path: '/student/stock',
    name: 'StudentStock',
    component: () => import('../pages/student/stock/StudentStockPage.vue'),
  },
  {
    path: '/student/event/test',
    name: 'StudentTest',
    component: () => import('../pages/student/event/MoneyPing.vue'),
  },
  {
    path: '/student/auth/login',
    name: 'StudentLogin',
    component: () => import('../pages/student/auth/StudentLogin.vue'),
  },
  {
    path: '/student/auth/changepw',
    name: 'StudentChangepw',
    component: () => import('../pages/student/auth/StudentChangepw.vue'),
  },
  {
    path: '/student/auth/findpw',
    name: 'StudentFindpw',
    component: () => import('../pages/student/auth/StudentFindpw.vue'),
  },
];
