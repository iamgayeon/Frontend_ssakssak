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
  {
    path: '/student/store',
    name: 'StudentStore',
    component: () => import('../pages/student/store/StudentStorePage.vue'),
  },
  {
    path: '/reward',
    component: () => import('../pages/teacher/reward/TeacherRewardPage.vue')
  }
];
