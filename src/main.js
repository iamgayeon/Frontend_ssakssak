import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue-awesome-paginate/dist/style.css';
import './assets/main.css';
import './assets/css/kidz.css';
import './assets/css/theme.min.css';



import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAwesomePaginate from 'vue-awesome-paginate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

// 필요한 아이콘 라이브러리를 추가하세요
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);

app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);

app.mount('#app');
