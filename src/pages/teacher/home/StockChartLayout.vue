<script setup>
import { ref } from 'vue';
import StockChart from './StockChart.vue';
import { useRouter } from 'vue-router'; // 라우터 사용을 위한 import

const router = useRouter();

const stock = ref(98);
</script>

<template>
    <div class="container">
        <div class="card p-4">
          <div class="row">
            <div class="col-5" style="min-width: 300px;"> <!-- 최소 너비 설정 -->
              <div class="mx-1 mt-2 mb-3">
                <h2 class="fw-bold">주식 차트 조회</h2>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="col-auto"> <!-- col-auto로 최소화 -->
                  <img src="@/assets/images/tree1.png" class="chart-img" style="width: 50px; height: auto;"> <!-- 이미지 크기 고정 -->
                </div>
                <div class="mx-2 d-flex align-items-center">
                  <p class="fs-3 fw-semibold mb-0">싹싹주식</p>
                </div>
              </div>
      
              <div class="px-0 pt-2">
                <p class="fs-5 mb-3 text-muted">현재가격: <span class="fw-bold">100 씨드</span></p>
                <p class="fs-5 mb-3 text-primary fw-semibold">
                  <span class="fs-6 text-muted pe-2">어제보다</span>-1씨드 (-1.4%)
                </p>
              </div>
      
              <hr>
              <p class="mb-1">전일 종가: <span class="fw-bold">85 씨드</span></p>
              <p class="mb-1">최고 가격 (30일): <span class="fw-bold text-danger">120 씨드</span></p>
              <p class="mb-1">최저 가격 (30일): <span class="fw-bold text-primary">80 씨드</span></p>
              <hr>
            </div>
      
            <div class="col-7" style="min-width: 500px;"> <!-- 차트의 최소 너비 설정 -->
                <router-link  to="/teacher/stock">
              <StockChart />
            </router-link>
            </div>
          </div>
        </div>
      </div>

      
</template>

<style scoped>
.chart-image{
    width: 50px;
    height: 40px;
}
</style>