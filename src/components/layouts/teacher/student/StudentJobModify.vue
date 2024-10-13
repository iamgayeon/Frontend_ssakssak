<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="std-list" style="max-height: 100%;">
                <div class="p-4">
                    <h4 class="mb-4">직업 정보 수정</h4>
                    <form @submit.prevent="studentJobModify" style="height:100%">
                        <div class="mb-3">
                            <label for="jobName" class="form-label">직업명</label>
                            <input type="text" id="jobName" class="form-control" v-model="modifyData.jobName" />
                        </div>
                        <div class="mb-3">
                            <label for="jobDescription" class="form-label">상세설명</label>
                            <input type="text" id="jobDescription" class="form-control" v-model="modifyData.jobContent" />
                        </div>
                        <div class="mb-3">
                            <label for="isPrime" class="form-label">추가씨드 여부</label>
                            <select id="isPrime" class="form-select" v-model="modifyData.isPrime">
                                <option value="Y">Yes (Y)</option>
                                <option value="N">No (N)</option>
                            </select>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-danger w-50 me-2" @click="close">취소</button>
                            <button type="submit" class="btn btn-primary w-50">등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import apiService from '@/api/teacherClassApi'; // API import

const props = defineProps({
    job: {
        type: Object,
        default: () => ({})  // 기본값을 빈 객체로 설정
    }
});

const modifyData = ref({
    jobId: '',
    jobName: '',
    jobContent: '',
    isPrime: ''
});

// props가 변경될 때마다 modifyData를 업데이트
watch(() => props.job, (newJob) => {
    if (newJob && newJob.jobId) {
        modifyData.value.jobId = newJob.jobId;
        modifyData.value.jobName = newJob.jobName;
        modifyData.value.jobContent = newJob.jobContent;
        modifyData.value.isPrime = newJob.isPrime;
    }
}, { immediate: true });

// 직업 정보를 수정하는 함수
const studentJobModify = async () => {
    try {
        // API 호출하여 직업 정보 업데이트
        const response = await apiService.updateJob(modifyData.value);
        console.log('Job updated successfully:', response);
        close(); // 업데이트 후 모달 닫기
    } catch (error) {
        console.error('Failed to update job:', error);
    }
};

// 모달을 닫는 함수
const emit = defineEmits(['close']);

const close = () => {
    emit('close'); // 부모 컴포넌트로 close 이벤트 전송
};
</script>

<style scoped>
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}

.btn-primary {
    background-color: #00A3FF;
    border-color: #00A3FF;
}

.btn-primary:hover {
    color: white;
    background-color: #00A3FF;
}
</style>
