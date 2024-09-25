<script setup>
import { reactive, computed } from 'vue';
import config from '@/config';
import { useRouter } from 'vue-router'; // 라우터 사용을 위한 import

const router = useRouter();

let state = reactive({ isNavShow: false });

let navClass = computed(() => (state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'));

const toggleNavShow = () => (state.isNavShow = !state.isNavShow);
</script>

<template>
  <!-- 네비게이션 바 -->
  <nav class="navbar navbar-expand-md" style="background-color: #f8f6e9; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);">
    <div class="container-fluid"> <!-- 수정: container를 container-fluid로 변경 -->
      <!-- 로고 및 제목 -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="@/assets/images/logo.png" alt="로고" style="width: 200px; height: 70px;">
        <span class="ms-2" style="font-size: 24px; font-weight: bold;"></span>
      </router-link>

      <!-- 토글 버튼 (모바일) -->
      <button class="navbar-toggler" type="button" @click="toggleNavShow">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 메뉴 항목 -->
      <div :class="navClass" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/student/home">
              <i class="fas fa-home" style="color: #ffc107;"></i>
              <span>홈</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student/store">
              <i class="fa fa-shopping-basket" style="color: #ff6347;"></i>
              <span>매점</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student/bank">
              <i class="fa fa-university" style="color: #32cd32;"></i>
              <span>은행</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student/stock">
              <i class="fa fa-line-chart" style="color: #1e90ff;"></i>
              <span>주식</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student/event">
              <i class="fa fa-gift" style="color: #9370db;"></i>
              <span>이벤트</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student/profile">
              <i class="far fa-user-circle" style="color: #ff69b4;"></i>
              <span>프로필</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- Custom CSS -->
<style scoped>
.navbar {
  display: flex;
  width: 100%;
  /* 가로 전체를 채우도록 설정 */
}

.nav-link {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
  width: 100%;
}

.nav-link i {
  margin-right: 8px;
}

.nav-link:hover {
  color: #0056b3;
}
</style>
