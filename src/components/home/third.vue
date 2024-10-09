<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <!-- 왼쪽 이미지 및 카드 -->
        <div class="hero-image">
          <div class="image-container">
            <div class="mockup-card">
              <img src="@/assets/images/ping4.png" alt="Mockup Image" class="mockup-image" />
              <span class="price">나만의 금융핑 테스트!</span>
            </div>
          </div>
        </div>

        <!-- 오른쪽 텍스트 컨텐츠 -->
        <div class="hero-text">
          <h2>재미있는 이벤트를 통해 </h2>
          <h2>금융 지식을 쑥쑥 키워보세요!</h2>
          <div class="ptext">
          <p>이벤트로 금융 학습도 즐겁게! </p>
          <p>다양한 리워드와 함께 우리 반 금융왕을 만들어주세요! </p>
        </div>
          <ul class="features-list">
            <li><i class="bi bi-check-circle-fill"></i> 나만의 금융핑은!?</li>
            <li><i class="bi bi-check-circle-fill"></i> 우리반은 누가 씨드 부자?</li>
            <li><i class="bi bi-check-circle-fill"></i> 나도 될 수 있다! 퀴즈왕!</li>
            <li><i class="bi bi-check-circle-fill"></i> 매일매일 달라지는 금융퀴즈</li>

          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  // 여기에 필요한 추가적인 스크립트가 있다면 작성할 수 있습니다.
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #f9f9f9;
  background-image: url('@/assets/images/third-img2.png'); /* 배경 이미지 경로 */
  background-size: cover; /* 비율 유지하며 배경 채우기 */
  background-position: center; /* 이미지 중앙 정렬 */
  background-repeat: no-repeat; /* 배경 이미지 반복 방지 */
  height: 540px; /* 배경 이미지 크기 설정 */
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  align-items: center;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.hero-image {
  flex: 1;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.mockup-card {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.mockup-image {
  width: 100%;
  border-radius: 10px;
}

.price {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #6c63ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
}

.hero-text {
  flex: 1;
  padding-left: 40px;
}

h2 {
  font-size: 36px;
  color: #f8f868;
  word-wrap: break-word; /* 긴 텍스트가 있을 경우 줄바꿈 */
  max-width: 500px; /* 두 줄로 나눌 수 있도록 너비 설정 */
  line-height: 1.2; /* 줄 간격 설정 */
  margin-bottom: 5px;
}

p {
  font-size: 18px;
  color: #f8f8b4;
  margin-bottom: 0px;
}

.ptext{
  margin-top: 20px;
}

.features-list {
  margin-top: 20px;
  padding-left: 0; /* 기본 ul의 왼쪽 패딩 제거 */
  list-style: none; /* 기본 bullet point 제거 */
}

.features-list li {
  font-size: 16px;
  color: #f8f8b4;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.features-list i {
  color: #f8f8b4;
  margin-right: 10px;
}
</style>
