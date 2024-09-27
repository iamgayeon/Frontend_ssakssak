<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/couter'

const store = useCounterStore();
const props = defineProps({
    student: {
        type: Object
    },
    jobs: {
        type: Object
    }
})

const modifyData = ref({
    id: props.student.id,
    name: props.student.name,
    birthday: props.student.birthday,
    job: props.student.job,
    seed: props.student.seed
})

const studentModify = () => {
    store.studentModify(modifyData.value);
    close();
}

const emit = defineEmits(['close'])


const close = () => {
    emit('close');
}

</script>


<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="std-list" style="max-height: 100%;">
                <div class="p-4">
                    <h4 class="mb-4">학생 정보 수정</h4>
                    <form @submit.prevent="studentModify(student.id)" style="height:100%">
                        <div class="mb-3">
                            <label for="date" class="form-label">번호</label>
                            <input type="text" id="date" class="form-control" v-model="modifyData.id" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">이름</label>
                            <input type="text" id="title" class="form-control" v-model="modifyData.name">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">생일</label>
                            <input type="date" id="content" class="form-control" v-model="modifyData.birthday">
                        </div>
                        <div class="mb-3">
                            <label for="jobs" class="form-label">직업</label><br>
                            <select class="form-select" name="jobs" id="jobs" v-model="modifyData.job">
                                <option v-for="job in jobs" :key="job.jno" :value="job.jno"
                                    :selected="job.jno === parseInt(student.job)">{{ job.name }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">씨드</label>
                            <input type="text" id="title" class="form-control" v-model="modifyData.seed">
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

<style scpoed>
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