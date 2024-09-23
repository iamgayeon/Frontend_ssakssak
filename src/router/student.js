export default [
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
  ];
  