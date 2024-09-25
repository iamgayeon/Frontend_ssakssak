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
  ];
  