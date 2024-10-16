<script setup>
import { ref } from 'vue';
import api from '@/api/studentTaxApi';

const seedTax = ref(null);

const getSeedTax = async () => {
  try {
    seedTax.value = await api.getSeedTax();
    console.log('SEED TAX!!!!>>>>>>', seedTax.value);
  } catch (error) {
    console.error('Failed to fetch seed tax:', error);
  }
};

getSeedTax();  // 컴포넌트 마운트 시 API 호출
</script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="card-img-overlay">
        <div class="text-white fw-semi-bold">
          <div class="tax-title">
            <span>
              <span class="highlight-seed" style="margin-left:40px; margin-top:55px;">
                <img src="@/assets/images/sprout.png" class="seed-icon" alt="씨드 이미지">1000씨드
              </span>
            </span>
          </div>
        </div>

        <!-- 흰색 칸에 텍스트 --> 
        <div class="text-on-white-box">
          <p class="taxAlert mb-0">
            <i class="fa fa-check"></i>
            주급에 대한 세율은
            <!-- 세율 값을 동적으로 표시 -->
            {{ seedTax !== null ? seedTax.rate + '%' : '세율 정보를 불러오는 중입니다...' }}
            입니다.
          </p>
        </div>
      </div>
    </div>

    <router-link to="/student/bank" class="card">
      <div class="card-img-overlay"></div>
    </router-link>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.card {
  width: 48%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0px;
}

.card:nth-child(1) {
  background-image: url('@/assets/images/seedtaxcheck.jpg');
}

.card:nth-child(2) {
  background-image: url('@/assets/images/finproduct.jpg');
}

.tax-title {
  padding-top: 20px;
  color: white;
  font-size: 18px;
  margin-top: 120px;
  margin-left: 45px;
}

.highlight-seed {
  font-size: 24px;
  color: #fab809;
  padding: 5px 10px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
}

.seed-icon {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

/* 흰색 칸에 텍스트 배치 */
.text-on-white-box {
  position: absolute;
  top: 250px;
  width: 350px;
  height: auto;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  overflow: visible;
}

.taxAlert {
  color: #00a3ff;
  font-size: 16px;
  margin-right: 30px;
  padding: 63px 0;
}
</style>