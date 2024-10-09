<!-- HeroSection.vue -->
<template>
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h3>금융 교육도 쉽고 재미있게!</h3>
          <ul>
            <li>금융싹싹은 학생들이 기초 금융 개념을 적금, 주식 등 다양한 금융 활동을 통해  </li>
            <li> 직접 경험하며 건강한 금융 습관을 기를 수 있습니다.</li>
            <li>지금 금융싹싹에서 선생님들의 교실에 금융 교육의 새 바람을 불어넣어 보세요!</li>
          </ul>
          <!-- router-link로 페이지 이동 설정 -->
          <router-link to="/login" class="cta-link">
            <button class="cta-button">금융싹싹 시작하기</button>
          </router-link>
        </div>
      </div>
    </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 컨텐츠 수직 중앙 정렬 */
  background-color: #f9f9f9;

  /* 배경 이미지 추가 */
  background-image: url('@/assets/images/hero-img2.png');
  background-size: cover; /* 이미지가 섹션을 꽉 채우도록 설정하면서 비율 유지 */
  background-position: center; /* 이미지가 중앙에 오도록 설정 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  height: 540px; /* 섹션 높이를 540px로 설정 */
  width: 100%; /* 섹션의 너비를 전체 화면에 맞춤 */
}

.hero-content {
  max-width: 600px;
  z-index: 1; /* 배경 위에 컨텐츠가 보이도록 설정 */
}

.cta-button {
  background-color: #6c63ff;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 20px;
  font-weight: bold;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

/* router-link의 스타일 설정 */
.cta-link {
  text-decoration: none; /* 링크 밑줄 제거 */
}

h3 {
  color: #454F5D;
  font-size: 48px;
  margin-left: 20px;
  margin-top: 120px;
}

ul {
  margin-top: 20px;
  padding-left: 25px; /* 기본 패딩 설정 */
  list-style-type: none; /* li 앞의 기본 목록 아이콘 제거 */
}

li {
  margin-top: 3px; /* li 항목 간 간격 줄이기 */
  color: #454F5D;
}
</style>
