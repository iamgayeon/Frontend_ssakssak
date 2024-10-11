<script setup>
import StockCreateNewsModal from './StockCreateNewsModal.vue';
import api from '@/api/teacherStockApi';

import { computed, onMounted, ref } from 'vue'
import { useStockStore } from '@/stores/stockStore';

const stockStore = useStockStore();
const newsList = computed(() => stockStore.newsList);

onMounted(() => {
    stockStore.fetchNewsList();
})

const deleteNews = async (id) => {
    const response = await api.delete(id);
    if(response.status === 200) {
        stockStore.fetchNewsList();
    }
    // newsData.value = newsData.value.filter(news => news.title !== title);
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
            <div class="cardBody p-0">
                <ul class="list-group px-2">
                    <li class="list-group-item border-0 px-0 py-2 d-flex justify-content-between align-items-center"
                        v-for="(news, idx) in newsList" :key="idx"
                        style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); transition: background-color 0.3s;">
                        <span>{{ news.newsDate }}</span>
                        <span class="fw-semibold">{{ news.title }}</span>
                        <button type="button" class="btn btn-sm btn-outline-danger me-3" @click="deleteNews(news.newsId)">
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

<style scoped>
.card {
    height: 500px;
}

.cardBody {
    height: 100%;
}

.list-group {
    height: 70%;
    overflow-y: auto;
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