<template>
    <div class="container my-4">
        <h2 class="text-center p-3 bg-light border rounded">알람 페이지</h2>
        <ul class="list-group">
            <li v-for="(alarm, idx) in alarms" :key="idx" class="list-group-item mb-1 alarm-item" @click="checkAlarm(alarm.id, idx)">
                {{ alarm.message }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const store = useAuthStore();

const alarms = ref([]);
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

        alarms.value = response.data;
    } catch (error) {
        console.error('Failed : ', error);
    }

}

const getTeacherProfile = async () => {
    // 여기서 store를 사용하여 로그인한 사용자의 정보를 가져옴
    const store = useAuthStore();
    TeacherProfile.username = store.username;
    return TeacherProfile;
};

const checkAlarm = async (id, idx) => {
    try {
        console.log(id);
        const response = axios.post(`/api/alarm/checked/` + id);
        alarms.value.splice(idx, 1);
    } catch (error) {
        console.error("Failed checked alarm", error);
    }
};

onMounted(() => {

    fetchAlarmHistory();

    const usertId = 1;
    eventSource = new EventSource(`/api/alarm/subscribe/${usertId}`);

    eventSource.addEventListener('alarm', (event) => {
        const message = event.data;
        console.log(message);
        alarms.value = [...alarms.value, { message: message }];
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
.container {
    max-width: 600px;
    margin: 0 auto;
}

h2 {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    font-size: 24px;
}

.alarm-item {
    padding: 15px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.alarm-item:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.alarm-item + .alarm-item {
    margin-top: 10px;
}
</style>