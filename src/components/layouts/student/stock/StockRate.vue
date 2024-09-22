<script setup>
import { ref, computed } from 'vue';

// 주식 데이터
const series = ref([
    {
        name: 'series-1',
        data: [
            100, 100, 102, 105, 104, 104, 107, 108, 107, 108, 108, 107, 107, 103,
            100, 99, 97, 97, 95, 93, 96, 95, 95, 92, 91, 92, 89, 90, 89, 88
        ]
    }
]);

// 지난 5일간의 등락률 계산
const fiveDayRates = computed(() => {
    const data = series.value[0].data;
    const rates = [];
    for (let i = data.length - 6; i < data.length - 1; i++) {
        const rate = ((data[i + 1] - data[i]) / data[i]) * 100;
        rates.push(rate.toFixed(2)); // 소수점 2자리까지만
    }
    return rates;
});

// 오늘의 등락률 입력 및 적용
const currentRate = ref('');
const setCurrentRate = () => {
    const latestPrice = series.value[0].data[series.value[0].data.length - 1];
    const newPrice = latestPrice * (1 + parseFloat(currentRate.value) / 100);
    series.value[0].data.push(newPrice.toFixed(2));
    currentRate.value = '';
};

</script>

<template>
    <div class="container">
        <div class="shadow card p-4">
            <div>
                <span class="fs-2 fw-bold">주식 등락률 관리</span>
            </div>
            <div>
                <span class="fs-5 fw-semibold">지난 5일간의 등락률</span>
                <ul class="list-group">
                    <li v-for="(rate, index) in fiveDayRates" :key="index"
                        class="list-group-item border-0 p-3 mb-2 d-flex justify-content-between align-items-center shadow-sm rounded"
                        :class="{
                            'bg-light-success': parseFloat(rate) > 0,
                            'bg-light-danger': parseFloat(rate) < 0
                        }">
                        <span class="fs-6 fw-semibold">
                            {{ index + 1 }}일 전 :
                            <span :class="parseFloat(rate) > 0 ? 'text-danger' : 'text-primary'">
                                &nbsp{{ rate }}%
                            </span>
                        </span>
                        <i :class="parseFloat(rate) > 0 ? 'bi bi-arrow-up text-danger' : 'bi bi-arrow-down text-primary'"
                            class="fs-5"></i>
                    </li>
                </ul>
            </div>
            <div class="mt-3">
                <span class="fs-5 fw-semibold">주식 등락률 설정</span>
                <div class="row d-flex align-items-center mt-3">
                    <div class="col-3">
                        <span class="fs-6 fw-bold">오늘 등락률: </span>
                    </div>
                    <div class="col-9 d-flex p-0">
                        <input type="text" v-model="currentRate" class="form-control w-75 mx-2"
                            placeholder="등락률을 입력하세요 (%)">
                        <button class="btn btn-primary" @click="setCurrentRate">
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
