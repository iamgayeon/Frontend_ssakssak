<script setup>
import { ref } from 'vue';
import api from '@/api/teacherStockApi';
const newsData = ref({
    title: '',
    content: ''
})
const emit = defineEmits(['closeModal', 'submitForm']);

const submitForm = async () => {
    const response = await api.addNews(newsData.value);
    // emit('submitForm' , newsData.value);
    if(response.status === 200) {
        closeModal();
    }
    console.log(response);
}


const closeModal = () => {
    emit('close');
}
</script>

<template>
<div class="modal-wrap">
        <div class="modal-container p-4 shadow-lg rounded bg-white">
            <h4 class="mb-4">뉴스 입력하기</h4>
            <form @submit.prevent="submitForm">
                <!-- <div class="mb-3">
                    <label for="date" class="form-label">날짜</label>
                    <input type="date" id="date" class="form-control" v-model="newsData.date" placeholder="YYYY-MM-DD">
                </div> -->
                <div class="mb-3">
                    <label for="title" class="form-label">제목</label>
                    <input type="text" id="title" class="form-control" v-model="newsData.title" placeholder="제목을 입력하세요">
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">내용</label>
                    <textarea id="content" class="form-control" rows="5" v-model="newsData.content" placeholder="내용을 입력하세요"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-secondary me-2" @click="closeModal">취소</button>
                    <button type="submit" class="btn btn-primary">등록</button>
                </div>
            </form>
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

.btn-active-primary {
    color: #00A3FF;
    border-color: #00A3FF;
    --ar-btn-hover-bg: white;

}

.btn-active-primary.active {
    color: white;
    background-color: #00A3FF;
}
</style>