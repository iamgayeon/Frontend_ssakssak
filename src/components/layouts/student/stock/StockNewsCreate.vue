<script setup>
import StockCreateNewsModal from './StockCreateNewsModal.vue';
import api from '@/api/teacherStockApi';

import { ref } from 'vue'

const days = ref([
    { short: 'Su', date: 22 },
    { short: 'Mo', date: 23 },
    { short: 'Tu', date: 24 },
    { short: 'We', date: 25 },
    { short: 'Th', date: 26 },
    { short: 'Fr', date: 27 }
])

const newsList = ref({});

const getNewsList = async () => {
    const response = await api.getStockNewsList();
    newsList.value = response;
}

getNewsList();

const deleteNews = (title) => {
    newsData.value = newsData.value.filter(news => news.title !== title);
}

const isCreateModal = ref(false);

const openCreateModal = () => {
    isCreateModal.value = !isCreateModal.value;
}

const handleFormSubmit = (formData) => {
    console.log(formData);
    newsData.value.push(formData);
    openCreateModal();
}

</script>

<template>
    <div class="container">
        <div class="shadow card p-4">
            <div class="mb-3">
                <span class="fs-2 fw-bold">주식 뉴스 관리</span>
            </div>
            <div class="card-body p-0">
                <ul class="list-group">
                    <li class="list-group-item border-0 px-0 py-2 d-flex justify-content-between align-items-center"
                        v-for="(news, idx) in newsList" :key="idx"
                        style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); transition: background-color 0.3s;">
                        <span class="fw-semibold">{{ news.title }}</span>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteNews(news.title)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </li>
                </ul>
                <div class="mt-3">
                    <button class="btn btn-primary btn-lg w-100" @click="openCreateModal">
                        새 뉴스 만들기
                    </button>
                </div>
            </div>
        </div>
    </div>

    <StockCreateNewsModal v-if="isCreateModal" @submitForm="handleFormSubmit" @close="openCreateModal" />

</template>