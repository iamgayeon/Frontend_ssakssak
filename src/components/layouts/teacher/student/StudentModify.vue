<script setup>
import { ref, watch } from 'vue';
import apiService from '@/api/teacherClassApi'; // API 파일 import

// Props 받아오기
const props = defineProps({
    student: {
        type: Object,
        required: true
    },
    jobs: {
        type: Array,
        required: true
    }
});

// 데이터 초기화
const modifyData = ref({
    id: props.student.stdId, // stdId 자동 설정
    name: props.student.stdName,
    birthday: props.student.stdBirth,
    job: props.student.jobId,
    seed: props.student.seed
});

// Emit을 사용하여 모달 닫기
const emit = defineEmits(['close']);

const close = () => {
    emit('close'); // 부모 컴포넌트로 close 이벤트 전송
};

// 학생 정보 수정 함수
const studentModify = async () => {
    try {
        // 생일 값을 포맷 (YYYY-MM-DD 형식)
        const birthDate = new Date(modifyData.value.birthday);
        const formattedBirthDate = birthDate.toISOString().split('T')[0];

        const updatedData = {
            stdId: modifyData.value.id,    // 이미 자동으로 설정된 stdId
            stdName: modifyData.value.name,
            stdBirth: formattedBirthDate,  // 포맷된 생일 값
            jobId: modifyData.value.job,
            seed: modifyData.value.seed
        };

        console.log('전송할 데이터:', updatedData);

        // API 호출
        await apiService.updateStudent(updatedData);
        console.log('학생 정보가 성공적으로 업데이트되었습니다.');

        close(); // 모달 닫기
    } catch (error) {
        console.error('학생 정보 수정 실패:', error);
    }
};

// props.student가 변경될 때 modifyData 자동 업데이트
watch(() => props.student, (newValue) => {
    modifyData.value = { ...newValue };
});
</script>

<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="std-list" style="max-height: 100%;">
                <div class="p-4">
                    <h4 class="mb-4">학생 정보 수정</h4>
                    <form @submit.prevent="studentModify" style="height:100%">
                        <div class="mb-3">
                            <label for="date" class="form-label">고유번호</label>
                            <input type="text" id="date" class="form-control" v-model="modifyData.id" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">이름</label>
                            <input type="text" id="title" class="form-control" v-model="modifyData.name" required>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">생일</label>
                            <input type="date" id="content" class="form-control" v-model="modifyData.birthday" required>
                        </div>
                        <div class="mb-3">
                            <label for="jobs" class="form-label">직업</label><br>
                            <select class="form-select" name="jobs" id="jobs" v-model="modifyData.job" required>
                                <option v-for="job in jobs" :key="job.jobId" :value="job.jobId">
                                    {{ job.jobName }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">씨드</label>
                            <input type="text" id="title" class="form-control" v-model="modifyData.seed" required>
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

<style scoped>
/* dimmed */
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

/* modal or popup */
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

.btn-outline-primary:after {
    background-color: #ffffff;
    color: #00A3FF;
}
</style>
