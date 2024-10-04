<template>
    <div class="container justify-content-center mb-5">
        <div class="shadow card p-4">
            <div>
                <h3>싹싹 주식 뉴스</h3>
            </div>
            <!-- <div>
                <ul class="nav nav-pills d-flex flex-wrap py-2">
                    <li v-for="(day, index) in days" :key="index" class="nav-item">
                        <a class="nav-link btn d-flex flex-column flex-center rounded-pill me-2 py-3 px-3"
                            :class="{ 'btn-active-primary': selectedDay === index, 'active': selectedDay === index }"
                            @click="selectDay(index)">
                            <span class="fs-6 fw-semibold">{{ day.short }}</span>
                            <span class="fs-6 fw-bold">{{ day.date }}</span>
                        </a>
                    </li>
                </ul>
            </div> -->
            <div class="news-list">
                <div v-for="(news, idx) in newsData" :key="idx" class="mb-2">
                    <div class="d-flex align-items-end">
                        <span class="fs-5 fw-semibold d-block">{{ news.title }}</span>
                        <span class="ms-2">{{ news.date }}</span>
                    </div>
                    <span class="d-block news-content">{{ news.content }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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

const newsData = ref([
    {
        title: "싹싹 주식회사 청소로봇 출시?!",
        content:
            "싹싹 주식이 새로운 청소 로봇 '싹싹이'를 발표하며 많은 사람들의 주목을 받고 있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다있습니다. asdfasdfasdfasdfasdfsadfsadf... ",
        date: "2024-09-01",
    },
    {
        title: "싹싹 주식, 매출 상승 소식!",
        content:
            "최근 싹싹 주식의 매출이 급격히 상승하며 투자자들의 관심을 끌고 있습니다...",
        date: "2024-09-01",
    },
    {
        title: "청소 산업의 새로운 강자 등장",
        content:
            "청소 산업에서 싹싹 주식의 새로운 혁신적인 제품이 시장을 지배하고 있습니다...",
        date: "2024-09-01",
    },
    {
        title: "싹싹 주식, 해외 시장 진출 계획",
        content:
            "싹싹 주식이 해외 시장 진출을 공식 발표하며 글로벌 진출을 시작했습니다...",
        date: "2024-09-01",
    },
    {
        title: "싹싹 로봇, AI 기술 적용!",
        content:
            "싹싹 로봇에 인공지능(AI) 기술이 적용되어 더 똑똑한 청소 기능을 제공합니다...",
        date: "2024-09-01",
    },
    {
        title: "싹싹 주식의 새로운 투자 기회",
        content:
            "많은 투자자들이 싹싹 주식의 장기 성장 가능성에 대해 긍정적인 평가를 내리고 있습니다...",
        date: "2024-09-01",
    },
    {
        title: "싹싹 로봇, 고객만족도 1위 달성",
        content:
            "싹싹 로봇이 고객 만족도 조사에서 1위를 차지하며 시장의 신뢰를 얻고 있습니다...",
        date: "2024-09-01",
    }
])

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