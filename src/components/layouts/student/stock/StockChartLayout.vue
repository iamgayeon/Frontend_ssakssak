<script setup>
import { ref } from 'vue';
import StockChart from './StockChart.vue';
import StockTrade from './StockTrade.vue';

const stock = ref(98);
const test = ref([12, 3, 4, 5, 2, 6, 2, 47, 72, 34, 5]);
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
                                <p class="fs-5 mb-0 text-danger fw-semibold">100 씨드</p>
                            </div>
                        </div>
                    </div>
                    <p class="fs-5 txt-primary fw-semibold"><span class="fs-6 text-muted pe-2">어제보다</span>-1씨드 (-1.4%)
                    </p>
                    <hr>
                    <p class="fs-5 mb-1 mt-3">전일 종가: <span class="fw-bold">85 씨드</span></p>
                    <p class="fs-5 mb-1">최고 가격 (30일): <span class="fw-bold text-danger">120 씨드</span></p>
                    <p class="fs-5 mb-1 mb-3">최저 가격 (30일): <span class="fw-bold txt-primary">80 씨드</span></p>
                    <hr>
                    <div>
                        <StockTrade :stock="stock" />
                    </div>
                </div>
                <div class="col-7">
                    <StockChart :test="test" />
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