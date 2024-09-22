<script setup>
import StockBuy from './StockBuy.vue';
import { ref, computed } from 'vue'

const modalCheck = ref(false)
const changePopState = () => {
    modalCheck.value = !modalCheck.value;
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
            <button class="btn btn-danger me-1" @click="changePopState">주식
                구매하기</button>
            <button class="btn btn-primary">주식 판매하기</button>
        </div>
    </div>
    <StockBuy v-if="modalCheck" @close="changePopState" />

</template>

<style scoped></style>