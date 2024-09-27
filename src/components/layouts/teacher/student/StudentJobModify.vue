<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/couter'

const store = useCounterStore();
const props = defineProps({
    job: {
        type: Object
    }
})

const modifyData = ref({
    jno: props.job.jno,
    name: props.job.name,
    description: props.job.description
})

const studentJobModify = async () => {
    await store.studentJobModify(modifyData.value);
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
                    <h4 class="mb-4">직업 정보 수정</h4>
                    <form @submit.prevent="studentJobModify()" style="height:100%">
                        <div class="mb-3">
                            <label for="date" class="form-label">직업명</label>
                            <input type="text" id="date" class="form-control" v-model="modifyData.name">
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">상세설명</label>
                            <input type="text" id="title" class="form-control" v-model="modifyData.description">
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