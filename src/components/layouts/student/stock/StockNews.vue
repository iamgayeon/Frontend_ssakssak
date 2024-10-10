<template>
    <div class="container justify-content-center mb-5">
        <div class="shadow card p-4">
            <div class="ps-2 pt-2">
                <h3>싹싹 주식 뉴스</h3>
            </div>
            <div class="news-list ps-3">
                <div v-for="(news, idx) in newsList" :key="news.newsId" class="mb-2">
                    <div class="d-flex align-items-end">
                        <span class="fs-5 fw-semibold d-block">{{ news.title }}</span>
                        <span class="ms-2">{{ news.newsDate }}</span>
                    </div>
                    <span class="d-block news-content">{{ news.content }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import api from '@/api/studentStockApi';
import { ref } from 'vue'

const selectedDay = ref(0) // 기본적으로 첫 번째 날짜 선택
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
    newsList.value = await api.getNewsList();
};

getNewsList();

const selectDay = (index) => {
    selectedDay.value = index
}
</script>

<style scoped>
.container {
    height: 400px;
}

.card {
    height: 100%;
}

.news-list {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.news-list::-webkit-scrollbar {
    width: 10px;
}

.news-list::-webkit-scrollbar-thumb {
    background: rgba(184, 184, 184, 0.815);
    /* border: 20px solid rgba(255, 255, 255, 0.8); */
}

.news-list::-webkit-scrollbar-track {
    background: rgba(219, 219, 219, 0.1);
    /*스크롤바 뒷 배경 색상*/
}


/* .news-list::-webkit-scrollbar-button {
    display: ;
} */

.nav-link {
    cursor: pointer;
}

.news-content {
    width: 90%;
    overflow-x: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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