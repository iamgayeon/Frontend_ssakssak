<script setup>
import { reactive, computed } from 'vue';
import config from '@/config';

let state = reactive({ isNavShow: false });

let navClass = computed(() => (state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'));

const toggleNavShow = () => (state.isNavShow = !state.isNavShow);
</script>

<template>
  <!-- 네비게이션 바 -->
  <nav class="navbar navbar-expand-md" style="background-color: #fff; width: 100%;">
    <div class="container-fluid"> <!-- 수정: container를 container-fluid로 변경 -->
      <!-- 로고 및 제목 -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="@/assets/images/logo.png" alt="로고" style="width: 200px; height: 70px;">
        <span class="ms-2" style="font-size: 24px; font-weight: bold;"></span>
      </a>

      <!-- 토글 버튼 (모바일) -->
      <button class="navbar-toggler" type="button" @click="toggleNavShow">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 메뉴 항목 -->
      <div :class="navClass" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-home" style="color: #ffc107;"></i>
              <span>홈</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-list-ul" style="color: #ff6347;"></i>
              <span>매점</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="far fa-file-alt" style="color: #32cd32;"></i>
              <span>은행</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-edit" style="color: #1e90ff;"></i>
              <span>주식</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="far fa-calendar-alt" style="color: #9370db;"></i>
              <span>이벤트</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="far fa-user-circle" style="color: #ff69b4;"></i>
              <span>프로필</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- Custom CSS -->
<style scoped>
.navbar {
  width: 100%; /* 가로 전체를 채우도록 설정 */
}

.nav-link {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link i {
  margin-right: 8px;
}

.nav-link:hover {
  color: #0056b3;
}
</style>
