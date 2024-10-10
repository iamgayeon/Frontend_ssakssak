<script setup>
import StockBuy from './StockBuy.vue';
import StockSell from './StockSell.vue';
import { ref, computed, onMounted } from 'vue';
import { useStockStore } from '@/stores/stockStore';


const stockStore = useStockStore();
const myStock = computed(() => stockStore.myStock);
const chartData = computed(() => stockStore.chartData);

const avaliableStock = computed(() => {
    const lastChartData = chartData.value[chartData.value.length - 1];
    if (!lastChartData || !lastChartData.stockPrice) {
        return 0; // 또는 다른 기본값
    }
    return parseInt(myStock.value.seed / lastChartData.stockPrice);
});

const isStockBuy = ref(false);
const isStockSell = ref(false);
const changeStockBuy = () => {
    isStockBuy.value = !isStockBuy.value;
}
const changeStockSell = () => {
    isStockSell.value = !isStockSell.value;
}


</script>

<template>
    <div class="container p-0 mt-2">
        <div class="mt-2">
            <span class="fs-4">현재 주문 가능 주식 : </span><span class="fs-4 fw-semibold">{{ avaliableStock }} 싹싹</span>
        </div>
        <div>
            <span class="fs-4">현재 판매 가능 주식 : </span><span class="fs-4 fw-semibold">{{ myStock.totalQuantity}} 싹싹</span>
        </div>
        <div class="mt-4 d-flex">
            <button class="btn btn-danger me-1 w-50" @click="changeStockBuy">주식 구매하기</button>
            <button class="btn btn-primary w-50" @click="changeStockSell">주식 판매하기</button>
        </div>
    </div>
    <StockBuy v-if="isStockBuy" @close="changeStockBuy" />
    <StockSell v-if="isStockSell" @close="changeStockSell" />

</template>

<style scoped>
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