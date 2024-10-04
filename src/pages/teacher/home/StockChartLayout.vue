<script setup>
import { ref } from 'vue';
import StockChart from './StockChart.vue';
import { useRouter } from 'vue-router'; // 라우터 사용을 위한 import

const router = useRouter();

const stock = ref(98);
</script>

<template>
    <div class="container"> 
        <div class="card">
          <div class="row">
            <div class="imgText col-5 text-white" style="min-width: 300px;">
              <img src="@/assets/images/imgText2.png" class="card-img" alt="...">
              <div class="card-img-overlay">
                <div class="d-flex align-items-center mb-3">
                  <div class="col-auto"> <!-- col-auto로 최소화 -->
                    <img src="@/assets/images/tree1.png" class="chart-img" style="width: 30px; height: auto;"> <!-- 이미지 크기 고정 -->
                  </div>
                  <div class="mx-2 d-flex align-items-center">
                    <h2 class="text-white fs-7 mt-3">싹싹주식</h2>
                  </div>
                </div>
        
                <div class="px-0 pt-2">
                  <p class="seed-title fs-5 fw-bold text-white">현재가격 :   <span class="fw-bold" id="seed1">100 씨드</span></p>
                  <p class="seed-title fs-5 mb-3 fw-bold">
                    <span class="seed-title fs-5 text-white pe-2">어제보다</span>-1씨드 (-1.4%)
                  </p>
                </div>
                <div class="text-bottom">
                <p class="mb-1">전일 종가: <span class="fw-bold">85 씨드</span></p>
                <p class="mb-1">최고 가격 (30일): <span class="fw-bold text-danger">120 씨드</span></p>
                <p class="mb-1">최저 가격 (30일): <span class="fw-bold text-primary">80 씨드</span></p>
              </div>
              </div>
              </div>
      
            <div class="stockChart col-7" style="min-width: 500px;"> <!-- 차트의 최소 너비 설정 -->
              <div class="mx-1 mt-2 mb-3">
              </div>
                <router-link class="router1" to="/teacher/stock">
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

.router1{
  text-decoration: none;
}

.imgText {
  position: relative;
  padding: 0px;
  border-radius: 0 !important;
}

.text {
  position: absolute;
  bottom: 5%;
  left: 5%;
  color:white;
}
.stockChart{
  padding: 10px;
}
#seed{
 color: #062375;
 font-size : 30px; 
}

.text-bottom{
  padding-top: 10px;
  color:#fff;
}

#seed1{
  color: #062375; 
}

.seed-title{
  font-size: 30px;
  color: #062375; 
  margin-bottom: 0px;
}

.mb-1{
  font-size:18px;
  color:#fff;
}
</style>