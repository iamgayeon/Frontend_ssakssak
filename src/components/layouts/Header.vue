<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 라우터 사용을 위한 import

const router = useRouter();

// 학생 이름을 불러오기 (localStorage에서 가져옴)
const studentName = ref(localStorage.getItem('studentName') || '박민주');

// 로그아웃 함수
const logout = () => {
  // 토큰을 로컬 스토리지에서 제거
  localStorage.removeItem('token');
  localStorage.removeItem('studentName'); // 학생 이름도 제거
  
  // 로그아웃 후 로그인 페이지로 이동
  router.push('/');
};
</script>

<template>
  <div class="header">
    <!-- 왼쪽 학생 이름 환영 메시지 -->
    <div class="welcome">
      {{ studentName }} 환영합니다!
    </div>
    <!-- 오른쪽 로그아웃 버튼 -->
    <div class="logout" @click="logout">
      <i class="fas fa-sign-out-alt"></i>  로그아웃
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #473221;
  height: 50px;
  display: flex;
  justify-content: right; /* 왼쪽 환영 메시지와 오른쪽 로그아웃 버튼 사이에 공간을 줌 */
  align-items: center;
  padding: 0 20px;
  color: #f8f6e9;
  width: 100%;
}

.welcome {
  font-size: 16px;
}

.logout {
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer; /* 마우스 커서 변경 */
  margin-left: 10px;
}

.logout i {
  margin-right: 5px;
}
</style>