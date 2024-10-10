<script setup>
import { ref, computed } from 'vue';
import { useStockStore } from '@/stores/stockStore';
import api from '@/api/studentStockApi';
import StockChart from './StockChart.vue';
import StockTrade from './StockTrade.vue';

const stockStore = useStockStore();
const chartData = computed(() => stockStore.chartData);


const highest = computed(() => {
    if (chartData.value.length === 0) {
        return null; // 또는 다른 기본값
    }

    return chartData.value.reduce((prev, value) => {
        return prev.stockPrice >= value.stockPrice ? prev : value
    });
});

const lowest = computed(() => {
    if (chartData.value.length === 0) {
        return null; // 또는 다른 기본값
    }

    return chartData.value.reduce((prev, value) => {
        return prev.stockPrice <= value.stockPrice ? prev : value
    });
});

const lastChartData = computed(() => {
    if (chartData.value.length === 0) {
        return 0; // 또는 다른 기본값
    }
    return chartData.value[chartData.value.length - 1];
});

const lastDayDiffPrice = computed(() => {
    if (chartData.value.length === 0) {
        return 0; // 또는 다른 기본값
    }
    return chartData.value[chartData.value.length - 1].stockPrice - chartData.value[chartData.value.length - 2].stockPrice;
});


</script>

<template>
    <div class="container">
        <div class="shadow card p-4">
            <div class="row">
                <div class="col-5">
                    <div class="mx-1 mt-2 mb-3">
                        <h3 class="">주식 차트 조회</h3>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div class="">
                            <img src="@/assets/images/images-removebg-preview 1.png" width="40px" height="40px">
                        </div>
                        <div class="d-flex align-items-end">
                            <div class="ms-1">
                                <p class="fs-4 mb-0">싹싹주식</p>
                            </div>
                            <div class="ms-1">
                                <p class="fs-5 mb-0 text-danger fw-semibold"><span class="text-gray">오늘의 가격</span> {{ lastChartData.stockPrice }} 씨드</p>
                            </div>
                        </div>
                    </div>
                    <p class="fs-5 txt-primary fw-semibold"><span class="fs-6 text-muted pe-2">어제보다</span>
                        {{ lastDayDiffPrice }} 씨드 ({{ lastChartData.change >= 0 ? `+${lastChartData.change}` :
                        lastChartData.change}}%)
                    </p>
                    <hr>
                    <p class="fs-5 mb-1 mt-3">전일 종가: <span class="fw-bold">85 씨드</span></p>
                    <p class="fs-5 mb-1">최고 가격 (30일): <span class="fw-bold text-danger">{{ highest.stockPrice }} 씨드</span>
                    </p>
                    <p class="fs-5 mb-1 mb-3">최저 가격 (30일): <span class="fw-bold txt-primary">{{ lowest.stockPrice }}
                            씨드</span></p>
                    <hr>
                    <div>
                        <StockTrade />
                    </div>
                </div>
                <div class="col-7">
                    <StockChart />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.txt-primary {
    color: #00A3FF;
}

.btn-primary {
    background-color: #00A3FF;
    border-color: #00A3FF;
}

.btn-outline-primary {
    color: #00A3FF;
    border-color: #00A3FF;
    --ar-btn-hover-bg: white;

}

.btn-outline-primary:hover {
    color: white;
    background-color: #00A3FF;
}


.btn-outline-primary:after {
    background-color: #ffffff;
    color: #00A3FF;
}
</style>