<template>
  <div class="header">
    <!-- 알림 버튼 -->
    <div class="notification" @click="toggleNotificationModal">
      <i class="bi bi-bell-fill"></i>
    </div>
    
    <!-- 환영 메시지 -->
    <div class="welcome" v-if="isLogin">
      {{ name }} 환영합니다!
    </div>

    <!-- 로그아웃 버튼 -->
    <div class="logout" @click="logout" v-if="isLogin">
      <i class="fas fa-sign-out-alt"></i> 로그아웃
    </div>

    <!-- 알림 모달 -->
    <div v-if="isNotificationModalOpen" class="modal-overlay" @click.self="toggleNotificationModal">
      <div class="modal-content">
        <div class="modal-body">
          <!-- 알림 목록을 가로로 채우기 -->
          <div class="notifications-container">
            <ul>
              <li v-for="notification in notifications" :key="notification.id" class="notification-item">
                <i class="bi bi-info-circle-fill"></i>
                <div>
                  <p>{{ notification.message }}</p>
                  <small>{{ notification.time }}</small> <!-- 시간 부분을 검정색으로 수정 -->
                </div>
                <button @click="deleteNotification(notification.id)" class="delete-btn">삭제</button>
              </li>
            </ul>
          </div>
        </div>
        <button @click="toggleNotificationModal" class="close-btn">닫기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

// 스토어와 라우터 설정
const router = useRouter();
const store = useAuthStore();

// 로그인 상태와 학생 이름 확인
const name = computed(() => store.name);
const isLogin = computed(() => store.isLogin);

// 알림 모달 열림/닫힘 상태
const isNotificationModalOpen = ref(false);

// 알림 목록 (예시 데이터)
const notifications = ref([
  { id: 1, message: '새로운 과제가 있습니다.', time: '23분 전' },
  { id: 2, message: '수업이 곧 시작됩니다.', time: '32분 전' },
  { id: 3, message: '새로운 알림이 도착했습니다.', time: '23시간 전' }
]);

// 알림 모달 열기/닫기
const toggleNotificationModal = () => {
  isNotificationModalOpen.value = !isNotificationModalOpen.value;
};

// 알림 삭제 함수
const deleteNotification = (id) => {
  notifications.value = notifications.value.filter(notification => notification.id !== id);
};

// 로그아웃 함수
const logout = () => {
  store.logout();
  router.push('/');
};
</script>

<style scoped>
.header {
  background-color: #473221;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  color: #f8f6e9;
  width: 100%;
}

.notification {
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}

.welcome {
  font-size: 16px;
  margin-right: 20px;
}

.logout {
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logout i {
  margin-right: 5px;
}

/* 모달 오버레이 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 창 스타일 */
.modal-content {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  width: 600px;  /* 모달 창 너비 수정 */
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
}

/* 알림 목록 가로 채우기 */
.modal-body {
  padding: 20px 0;
}

.notifications-container {
  width: 100%; /* 알림 목록이 가로로 꽉 차도록 설정 */
}

.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 10px;
}

.notification-item i {
  margin-right: 10px;
  color: #28a745; /* 아이콘 색상을 초록색으로 설정 */
}

.notification-item p {
  margin: 0;
}

.notification-item small {
  color: black; /* 시간 글씨를 검정색으로 설정 */
}

.notification-item:hover {
  background-color: #f0f0f0;
}

.delete-btn {
  background: none;
  border: none;
  color: red;
  font-size: 14px;
  cursor: pointer;
}

.close-btn {
  background-color: #473221;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

.close-btn:hover {
  background-color: #6a4c35;
}
</style>
