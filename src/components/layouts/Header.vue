<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 라우터 사용을 위한 import

const router = useRouter();

const logout = () => {
  // 예: 토큰을 로컬 스토리지에서 제거
  localStorage.removeItem('token');
  
  // 로그아웃 후 로그인 페이지로 이동
  router.push('/login');
};
</script>

<template>
  <div class="header">
    <!-- 오른쪽 로그아웃 버튼 -->
    <div class="logout" @click="logout">
      <i class="fas fa-sign-out-alt"></i> 로그아웃
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #473221;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  color: #f8f6e9;
  width:100%;
}

.logout {
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer; /* 마우스 커서 변경 */
}

.logout i {
  margin-right: 5px;
}
</style>
