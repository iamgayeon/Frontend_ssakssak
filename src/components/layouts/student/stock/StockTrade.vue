<script setup>
import StockBuy from './StockBuy.vue';
import StockSell from './StockSell.vue';
import { ref, computed } from 'vue'

const myStock = ref({
    quantity: 50,
    buyPrice: 100
});

const props = defineProps({
    stock: {
        type: Number
    }
})

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
    <div class="container p-0">
        <div>
            <span>현재 주문 가능 주식 : </span><span class="fw-semibold">35싹싹</span>
        </div>
        <div>
            <span>현재 판매 가능 주식 : </span><span class="fw-semibold">12씨드</span>
        </div>
        <div class="mt-2">
            <button class="btn btn-danger me-1" @click="changeStockBuy">주식 구매하기</button>
            <button class="btn btn-primary" @click="changeStockSell">주식 판매하기</button>
        </div>
    </div>
    <StockBuy v-if="isStockBuy" @close="changeStockBuy" :myStock="myStock" :stock="stock"/>
    <StockSell v-if="isStockSell" @close="changeStockSell" :myStock="myStock" :stock="stock" />

</template>

<style scoped></style>