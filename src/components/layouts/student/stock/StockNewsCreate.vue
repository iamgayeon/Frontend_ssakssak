<script setup>
import StockCreateNewsModal from './StockCreateNewsModal.vue';

import { ref } from 'vue'

const days = ref([
    { short: 'Su', date: 22 },
    { short: 'Mo', date: 23 },
    { short: 'Tu', date: 24 },
    { short: 'We', date: 25 },
    { short: 'Th', date: 26 },
    { short: 'Fr', date: 27 }
])

const newsData = ref([
    {
        title: "싹싹 주식회사 청소로봇 출시?!",
        content:
            "싹싹 주식이 새로운 청소 로봇 '싹싹이'를 발표하며 많은 사람들의 주목을 받고 있습니다. ... "
    },
    {
        title: "싹싹 주식, 매출 상승 소식!",
        content:
            "최근 싹싹 주식의 매출이 급격히 상승하며 투자자들의 관심을 끌고 있습니다..."
    },
    {
        title: "청소 산업의 새로운 강자 등장",
        content:
            "청소 산업에서 싹싹 주식의 새로운 혁신적인 제품이 시장을 지배하고 있습니다..."
    },
    {
        title: "싹싹 주식, 해외 시장 진출 계획",
        content:
            "싹싹 주식이 해외 시장 진출을 공식 발표하며 글로벌 진출을 시작했습니다..."
    },
    {
        title: "싹싹 로봇, AI 기술 적용!",
        content:
            "싹싹 로봇에 인공지능(AI) 기술이 적용되어 더 똑똑한 청소 기능을 제공합니다..."
    },
    {
        title: "싹싹 주식의 새로운 투자 기회",
        content:
            "많은 투자자들이 싹싹 주식의 장기 성장 가능성에 대해 긍정적인 평가를 내리고 있습니다..."
    },
    {
        title: "싹싹 로봇, 고객만족도 1위 달성",
        content:
            "싹싹 로봇이 고객 만족도 조사에서 1위를 차지하며 시장의 신뢰를 얻고 있습니다..."
    }
])

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
                        v-for="(news, idx) in newsData" :key="idx"
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

    <StockCreateNewsModal v-if="isCreateModal" @submitForm="handleFormSubmit" @close="openCreateModal"/>
    
</template>