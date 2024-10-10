<template>
    <section class="app-integration">
      <div class="container">
        <h3 class="section-title">금융싹싹에서 경험할 수 있어요!</h3>
        <p class="section-subtitle">
          다양한 금융 상품을 직접 체험할 수 있는 기회를 제공하고있습니다.
        </p>
  
        <div class="app-grid">
          <!-- 앱 카드 반복 렌더링 -->
          <div class="app-card" v-for="(app, index) in apps" :key="index">
            <div class="app-logo">
              <img :src="app.logo" :alt="app.name" />
            </div>
            <h4 class="app-name">{{ app.name }}</h4>
            <p class="app-description">{{ app.description }}</p>
          </div>
        </div>
  
        <router-link to="/login"><button class="view-all-btn">금융싹싹 만나보기</button></router-link>
      </div>
    </section>
  </template>
  
  <script setup>
import ssak1 from '@/assets/images/ssak1.gif'
import ssak2 from '@/assets/images/ssak2.gif'
import ssak3 from '@/assets/images/ssak3.gif'
import ssak4 from '@/assets/images/ssak4.gif'
import ssak5 from '@/assets/images/ssak5.gif'

  const apps = [
    {
      name: "싹싹적금",
      description: "매주 일정 금액을 저축하고 만기 시 이자를 받을 수 있어요!",
      logo: ssak1
    },
    {
      name: "싹싹주식",
      description: "가상의 주식 거래를 통해 매수, 매도하며 주식 시장을 배워보세요!",
      logo: ssak2
    },
    {
      name: "싹싹리워드",
      description: "열심히 금융 활동에 참여하면 리워드를 받을 수 있어요!",
      logo: ssak3
    },
    {
      name: "싹싹이벤트",
      description: "이벤트를 통해 다양한 경험과 보너스 혜택를 얻을 수 있어요!",
      logo: ssak4
    },
    {
      name: "금융 퀴즈",
      description: "매일 금융 퀴즈를 풀면서 금융 지식을 쌓아보세요!",
      logo: ssak5
    }
  ];
  </script>
  
  <style scoped>
  .app-integration {
    padding: 40px 0;
    text-align: center;
    background-image: url('@/assets/images/footer.png'); /* 여기에 이미지 경로를 넣으세요 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 540px; /* 이미지 높이에 맞게 설정 */
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .section-subtitle {
    font-size: 16px;
    margin-bottom: 30px;
    color: #666;
  }
  
  .app-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .app-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 180px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .app-logo img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .app-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .app-description {
    font-size: 14px;
    color: #454F5D;
  }
  
  .view-all-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .view-all-btn:hover {
    background-color: #574fcf;
  }

  h3 {
    font-size: 36px;
    color: #454F5D;
  }
  h4{
    color: #454F5D;
  }
  </style>
  