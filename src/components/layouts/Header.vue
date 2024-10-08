<template>
  <div class="header">
    <!-- 알림 버튼 -->
    <div class="notification" @click="toggleNotificationModal">
      <i class="bi bi-bell-fill" :style="alarmColor ? 'color:green;' : 'color:white;'"></i>
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
          <div class="notifications-container">
            <ul>
              <li v-for="(alarm, idx) in alarms" :key="idx" class="notification-item"
                @click="checkAlarm(alarm.id, idx)">
                <i class="bi bi-info-circle-fill"></i>
                <div>
                  <p>{{ alarm.message }}</p>
                  <!-- <small>{{ notification.time }}</small> 시간 부분을 검정색으로 수정 -->
                </div>
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
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// 스토어와 라우터 설정
const router = useRouter();
const store = useAuthStore();

// 로그인 상태와 학생 이름 확인
const name = computed(() => store.name);
const isLogin = computed(() => store.isLogin);

// 알림 모달 열림/닫힘 상태
const isNotificationModalOpen = ref(false);

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


const alarms = ref([]);
const alarmColor = ref(false);
let eventSource;

const TeacherProfile = ref({
  usernmae: '',
});

const fetchAlarmHistory = async () => {
  try {
    const teacher = await getTeacherProfile();

    const response = await axios.get(`/api/alarm/history`, {
      params: {
        username: teacher.username,
      }
    });

    console.log(response.status);
    if (response.status === 204) {
      console.log("no Alarm List");
      alarmColor.value = false;
      alarms.value = [];
    } else {
      alarmColor.value = true;
      alarms.value = response.data;
    }

  } catch (error) {
    console.error('Failed : ', error);
  }

}

const getTeacherProfile = async () => {
  const store = useAuthStore();
  TeacherProfile.username = store.username;
  return TeacherProfile;
};

const checkAlarm = async (id, idx) => {
  try {
    const response = await axios.post(`/api/alarm/checked/` + id);
    alarms.value.splice(idx, 1);
    console.log(alarms.value.length);
    if(alarms.value.length === 0) {
      alarmColor.value = false;
    }
  } catch (error) {
    console.error("Failed checked alarm", error);
  }
};

onMounted(() => {

  fetchAlarmHistory();

  const usertId = 1;
  eventSource = new EventSource(`/api/alarm/subscribe/${usertId}`);

  eventSource.addEventListener('alarm', (event) => {
    const alarm = JSON.parse(event.data);
    alarms.value = [...alarms.value, { id: alarm.id, message: alarm.message }];
    alarmColor.value = true;
  });

  eventSource.onerror = (error) => {
    console.error("Error with SSE connection", error);
  };
});

onUnmounted(() => {
  if (eventSource) {
    eventSource.close();
  }
})
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
  width: 600px;
  /* 모달 창 너비 수정 */
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
}

/* 알림 목록 가로 채우기 */
.modal-body {
  padding: 20px 0;
}

.notifications-container {
  width: 100%;
  /* 알림 목록이 가로로 꽉 차도록 설정 */
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
  color: #28a745;
  /* 아이콘 색상을 초록색으로 설정 */
}

.notification-item p {
  margin: 0;
}

.notification-item small {
  color: black;
  /* 시간 글씨를 검정색으로 설정 */
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
