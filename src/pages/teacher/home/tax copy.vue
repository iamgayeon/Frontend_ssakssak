<template>
    <div class="container">
    <div class="tax-adjustment-card d-flex align-items-center p-4 rounded shadow-sm">
        <div class="image-container">
            <img src="@/assets/images/calcul.png" alt="calculator-image" class="img-fluid" />
          </div>
      <div class="text-container ml-8">
        <h5 class="mb-4" style=" color :#576071">이번주 주급 세율과 쌓인 세금을 확인해보세요!</h5>
        <p class="mb-2">매주 학생 활동으로 발생한 세금을 한 눈에 확인해 볼 수 있습니다.</p>
        <p class="mb-4">이번주 쌓인 세금을 통해 학생들의 거래량을 확인해보세요.</p>
        <router-link class="button-container d-flex align-items-center" style="gap: 20px;">
            <router-link class="router1" to="/teacher/bank"><button class="btn btn-warning mr-6">세율 확인</button></router-link>
            <router-link class="router1" to="/teacher/bank"></router-link><button class="btn btn-primary">적립 세금 : $20,000</button></router-link>
            <!-- {{ accumulatedTax.toLocaleString() }} -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// props로 세금 데이터를 받아서 표시
const props = defineProps({
  accumulatedTax: {
    type: Number,
    required: true
  }
});
  </script>
  
  <style scoped>
  .tax-adjustment-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
  }
  
  .image-container img {
    width: 350px;
    height: 300px;
    padding-left : 40px;
    padding-right : 40px;
  }
  
  .text-container h3 {
    font-weight: bold;
    color: #333;
  }
  
  .text-container p {
    color: #666;
  }
  
  .button-container .btn {
    padding: 10px 20px;
    text-decoration: none;
  }
  
  .button-container .btn-warning {
    background-color: #EF5858;
    border: none;
    box-shadow:none;
  }
  
  .button-container .btn-primary {
    background-color: #00A3FF;
    border: none;
    box-shadow:none;
  }

  .button-container .btn {
    padding: 10px 20px;
    box-shadow: none; /* 기본 그림자 제거 */
  }
  
  .button-container .btn:hover {
    box-shadow: none; /* hover 상태에서도 그림자 제거 */
  }
  .router1{
    text-decoration: none;
  }
  </style>
  