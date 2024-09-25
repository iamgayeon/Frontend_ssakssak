export default [
    {
      path: '/teacher/home',
      name: 'TeacherHome',
      component: () => import('../pages/teacher/home/TeacherHome.vue'),
    },
    {
        path: '/teacher/class',
        name: 'TeacherClass',
        component: () => import('../pages/teacher/class/TeacherClass.vue'),
      },
    {
      path: '/teacher/student',
      name: 'TeacherStudent',
      component: () => import('../pages/teacher/student/TeacherStudent.vue'),
    },
    {
      path: '/teacher/store',
      name: 'TeacherStore',
      component: () => import('../pages/teacher/store/TeacherStore.vue'),
    },
    {
        path: '/teacher/bank',
        name: 'TeacherBank',
        component: () => import('../pages/teacher/bank/TeacherBank.vue'),
    },
    {
      path: '/teacher/stock',
      name: 'TeacherStock',
      component: () => import('../pages/teacher/stock/TeacherStock.vue'),
    },
    {
        path: '/teacher/reward',
        name: 'TeacherReword',
        component: () => import('../pages/teacher/reward/TeacherReward.vue'),
      },
  ];
  