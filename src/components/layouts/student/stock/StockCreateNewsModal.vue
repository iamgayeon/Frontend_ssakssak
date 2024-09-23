<script setup>
import { ref } from 'vue';
const newsData = ref({
    date: '',
    title: '',
    content: ''
})
const emit = defineEmits(['closeModal', 'submitForm']);

const submitForm = () => {
    emit('submitForm' , newsData.value);
}


const closeModal = () => {
    emit('close');
}
</script>

<template>
    <div class="container mt-5">
        <div class="card p-4 shadow-sm">
            <h4 class="mb-4">뉴스 입력하기</h4>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="date" class="form-label">날짜</label>
                    <input type="date" id="date" class="form-control" v-model="newsData.date" placeholder="YYYY-MM-DD">
                </div>
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
