<script setup>
import { ref } from 'vue';
import StockChart from './StockChart.vue';
import StockTrade from './StockTrade.vue';

const stock = ref(98);
</script>

<template>
    <div class="container">
        <div class="shadow card p-4">
            <div class="row">
                <div class="col-5">
                    <div class="mx-1 mt-2 mb-3">
                        <h2 class="fw-bold">주식 차트 조회</h2>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-1">
                            <img src="../../../../assets/images/images-removebg-preview 1.png" width="50px"
                                height="40px">
                        </div>
                        <div class="col-10 mx-2">
                            <div class="row">
                                <div class="col-4 py-0 ms-2">
                                    <p class="fs-4 fw-semibold mb-0">싹싹주식</p>
                                </div>
                                <div class="col-7 px-0 pt-2">
                                    <p class="fs-6 mb-0 text-muted">현재가격: <span class="fw-bold">100 씨드</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="fs-4 fw-semibold">내가 가지고 있는 씨드 : 3,500 씨드</p>
                    <p class="fs-5 text-primary fw-semibold"><span class="fs-6 text-muted pe-2">어제보다</span>-1씨드 (-1.4%)
                    </p>
                    <hr>
                    <p class="mb-1">전일 종가: <span class="fw-bold">85 씨드</span></p>
                    <p class="mb-1">최고 가격 (30일): <span class="fw-bold text-danger">120 씨드</span></p>
                    <p class="mb-1">최저 가격 (30일): <span class="fw-bold text-primary">80 씨드</span></p>
                    <hr>
                    <div>
                        <StockTrade :stock="stock"/>
                    </div>
                </div>
                <div class="col-7">
                    <StockChart />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>