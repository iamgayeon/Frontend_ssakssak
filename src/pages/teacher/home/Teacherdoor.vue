<template>
  <div class="dashboard-container">
    <!-- 좌측 바로가기 카드 -->
    <div class="shortcut-card">
      <h4>금융 싹싹 서비스 바로가기</h4>
      <div class="shortcut-list">
        <div v-for="(service, index) in services" :key="index" class="shortcut-item">
          <a :href="service.url" target="_blank">
            <img :src="service.icon" :alt="service.title" />
            <p>{{ service.title }}</p>
          </a>
        </div>
      </div>
    </div>

    <!-- 우측 주식 뉴스 섹션 -->
    <div class="news-card">
      <h3>주식 뉴스</h3>
      <div class="news-content">
        <ul class="list-group">
          <li class="list-group-item border-0 px-0 py-2 d-flex justify-content-between align-items-center"
              v-for="(news, idx) in newsData" :key="idx"
              style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); transition: background-color 0.3s;">
            <span class="fw-semibold">{{ news.title }}</span>
            <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteNews(news.title)">
              <i class="bi bi-trash"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- 새 뉴스 생성 모달 -->
    <StockCreateNewsModal v-if="isCreateModal" @submitForm="handleFormSubmit" @close="openCreateModal"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StockCreateNewsModal from '@/components/layouts/student/stock/StockNewsCreate.vue';
import classIcon from '@/assets/images/class_ico.gif'
import stuIcon from '@/assets/images/stu_ico.gif'
import jobIcon from '@/assets/images/job_ico.gif'
import storeIcon from '@/assets/images/store_ico.gif'
import stockIcon from '@/assets/images/stock_ico.gif'
import reward1 from '@/assets/images/reward1_ico.gif'
import reward2 from '@/assets/images/reward2_ico.gif'

// 외부 데이터 파일에서 주식 뉴스 데이터 가져오기
import { newsData as initialNewsData } from '@/api/newData.js';

// 서비스 데이터
const services = ref([
  { title: '학급추가+', icon: classIcon, url: '/teacher/class' },
  { title: '학생관리', icon: stuIcon, url: '/teacher/student' },
  { title: '직업관리', icon: jobIcon, url: '/teacher/student' },
  { title: '매점관리', icon: storeIcon, url: '/teacher/store' },
  { title: '주식등락률관리', icon: stockIcon, url: '/teacher/stock' },
  { title: '리워드 추가', icon: reward1, url: '/teacher/reward' },
  { title: '리워드 지급', icon: reward2, url: '/teacher/reward' },
]);

// 주식 뉴스 데이터
const newsData = ref([...initialNewsData]); // 초기 뉴스 데이터를 불러와서 사용

// 새 뉴스 삭제
const deleteNews = (title) => {
  newsData.value = newsData.value.filter(news => news.title !== title);
}

// 새 뉴스 생성 모달 관련 상태
const isCreateModal = ref(false);

const openCreateModal = () => {
  isCreateModal.value = !isCreateModal.value;
}

// 새 뉴스 제출 처리
const handleFormSubmit = (formData) => {
  newsData.value.push(formData);
  openCreateModal(); // 모달 닫기
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: stretch;
}

.shortcut-card {
  background-color: #f8f9fa;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-basis: 70%; /* 7:3 비율 */
  display: flex;
  flex-direction: column;
}

.news-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-basis: 30%; /* 7:3 비율 */
  display: flex;
  flex-direction: column;
  min-height: 300px; /* 최소 높이 설정 */
}

.news-content {
  overflow-y: auto;
  max-height: 200px;
}

.shortcut-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.shortcut-item {
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px; /* 아이템 상단 여백 추가 */
}

.shortcut-item a {
  text-decoration: none;
  color: inherit;
  font-size: 1.2em; /* 텍스트 크기 증가 */
}

.shortcut-item img {
  width: 70px; /* 아이콘 크기 증가 */
  height: 70px; /* 아이콘 크기 증가 */
  margin-bottom: 10px;
}

.news-card ul {
  list-style-type: none;
  padding: 0;
}

.news-card ul li {
  margin-bottom: 10px;
}

.news-card ul li a {
  color: #007bff;
  text-decoration: none;
}

.news-card ul li a:hover {
  text-decoration: underline;
}

.shortcut-card {
  background-color: #fff;
}

.shortcut-item {
  margin-top: 40px;
}

</style>