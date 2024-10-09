<!-- HeroSection.vue -->
<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="features">
          <div class="feature-item" v-for="(feature, index) in features" :key="index">
            <div class="icon-container">
              <!-- 부트스트랩 아이콘 적용 -->
              <i :class="feature.icon" class="feature-icon"></i>
            </div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
          </div>
        </div>
        <!-- router-link로 페이지 이동 설정 -->
      </div>
    </div>
  </section>
</template>

<script setup>
// 부트스트랩 아이콘 클래스 이름으로 아이콘 지정
const features = [
  {
    title: '금융 개념 이해',
    description: '학생들이 기초 금융 개념을 쉽게 이해할 수 있도록 도와줍니다.',
    icon: 'bi bi-lightbulb', // 아이콘 클래스
  },
  {
    title: '재밌는 금융 경험 제공',
    description: '적금, 주식 등 다양한 금융 활동을 경험하며 금융 습관을 기릅니다.',
    icon: 'bi bi-currency-exchange', // 아이콘 클래스
  },
  {
    title: '자산 관리 실습',
    description: '학생들이 금융 상품을 선택하고 자산을 관리하는 경험을 통해 올바른 금융 습관을 길러줍니다.',
    icon: 'bi bi-wallet2', // 아이콘 클래스
  },
  {
    title: '리워드를 통한 동기부여',
    description: '학생들이 적금을 쌓거나 금융 활동을 통해 얻은 씨드로 다양한 쿠폰을 구매하여 보상을 받을 수 있습니다!',
    icon: 'bi bi-mortarboard', // 아이콘 클래스
  },
];
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  background-image: url('@/assets/images/second-img1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px; /* 섹션 높이 설정 */
  width: 100%;
}

.hero-content {
  max-width: 1200px;
  z-index: 1;
  text-align: center;
}

.features {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.feature-item {
  text-align: center;
  flex-basis: 22%;
  color: #FFFF99;
}

.icon-container {
  width: 60px; /* 원의 크기 설정 */
  height: 60px; /* 원의 크기 설정 */
  background-color: #f8f868; /* 아이콘 배경 색상 */
  border-radius: 50%; /* 원형으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto; /* 가운데 정렬 및 아래 여백 */
}

.feature-icon {
  font-size: 30px; /* 아이콘 크기 설정 */
  color: #454F5D; /* 아이콘 색상을 흰색으로 설정 */
}

h4 {
  color: #f8f868;
  font-size: 24px;
}

p {
  color: #f8f8b4; /* description 색상 변경 */
  margin-top: 10px;
  word-wrap: break-word; /* 긴 텍스트가 있을 경우 줄바꿈 */
  max-width: 220px; /* 두 줄로 나눌 수 있도록 너비 설정 */
  line-height: 1.5; /* 줄 간격 설정 */
  margin: 0 auto; /* 가운데 정렬 */
}
</style>
