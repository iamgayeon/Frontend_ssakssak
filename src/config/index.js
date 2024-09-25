// src/config/index.js
export default {
  title: 'KB Fullstack',
  subtitle: '(Vue+Spring)',
  menus: [
    {
      title: '홈',
      url: '/board/list',
    },
    {
      title: '매점',
      url: '/travel/list',
    },
    {
      title: '은행',
      url: '/student/bank',
    },
    {
      title: '주식',
      url: '/stock/list',
    },
    {
      title: '이벤트',
      url: '/student/event',
    },
    {
      title: '프로필',
      url: '/profile/list',
    },
  ],

  accoutMenus: {
    login: {
      url: '/auth/login',
      title: '로그인',
      icon: 'fa-solid fa-right-to-bracket',
    },
    join: {
      url: '/auth/join',
      title: '회원가입',
      icon: 'fa-solid fa-user-plus',
    },
  },
};
