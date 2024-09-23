<template>
  <!-- Custom css -->
  <link href="src/assets/css/kidz.css" id="option_style" rel="stylesheet">

  <section class="challenge-section py-4">
    <div class="container box-container">
      <h3 class="mb-4">총 보유자산 정보</h3>

      <!-- 총자산 -->
      <div class="total-asset">
        <div class="asset-amount">{{ totalAsset }}원</div>
      </div>

      <!-- 비율에 따른 막대 그래프 --> 
      <div class="bar-graph">
        <div
          v-for="(item, index) in assetItems"
          :key="index"
          class="filled-bar"
          :style="{
            width: item.percentage + '%',
            backgroundColor: item.color,
            left: getLeftPosition(index) + '%'
          }"
        ></div>
      </div>

      <!-- 자산 항목들 -->
      <div class="asset-items">
        <div class="asset-item" v-for="(item, index) in assetItems" :key="index">
          <div class="icon" :style="{ backgroundColor: item.color }">{{ item.icon }}</div>
          <div class="details">
            <div class="name">{{ item.name }}</div>
            <div class="percentage">{{ item.percentage }}%</div>
          </div>
          <div class="amount">{{ item.amount }}원</div>
          <div class="comparison" v-if="item.comparison">{{ item.comparison }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 챌린지 섹션 -->
<!-- 챌린지 섹션 -->
<section class="challenge-section py-4">
  <div class="container box-container">
    <h3 class="mb-4">현재 참여중인 챌린지 정보</h3>

    <!-- Grid Container -->
    <div class="card-grid">
      
      <!-- Item 1 -->
      <div class="card btn btn-outline-secondary w-100 h-100 align-items-start text-wrap text-start rounded-4 px-0 px-xl-2 py-4 py-xl-5">
        <div class="card-body pb-0 pt-3 pt-xl-0">
          <span class="badge bg-info fs-xs rounded-pill" style="font-size: 0.9rem; font-weight: normal;">챌린지 진행중</span> <!-- 글씨 크기 조정 -->
          <h4 class="h5 my-2 my-xl-3">우리반 금융퀴즈왕 찾아라!</h4>
        </div>
        <div class="card-footer w-100 bg-transparent border-0 text-body fs-sm fw-normal pt-0 pb-3 pb-xl-0">참여중</div>
      </div>

      <!-- Item 2 -->
      <div class="card btn btn-outline-secondary w-100 h-100 align-items-start text-wrap text-start rounded-4 px-0 px-xl-2 py-4 py-xl-5">
        <div class="card-body pb-0 pt-3 pt-xl-0">
          <span class="badge bg-success fs-xs rounded-pill"style="font-size: 0.9rem; font-weight: normal;">챌린지 진행중</span>
          <h4 class="h5 my-2 my-xl-3">출석 췤! 5일 출석 도전</h4>
        </div>
        <div class="card-footer w-100 bg-transparent border-0 text-body fs-sm fw-normal pt-0 pb-3 pb-xl-0">참여중</div>
      </div>

      <!-- Item 3 -->
      <div class="card btn btn-outline-secondary w-100 h-100 align-items-start text-wrap text-start rounded-4 px-0 px-xl-2 py-4 py-xl-5">
        <div class="card-body pb-0 pt-3 pt-xl-0">
          <span class="badge bg-warning fs-xs rounded-pill"  style="font-size: 0.9rem; font-weight: normal;">챌린지 종료</span>
          <h4 class="h5 my-2 my-xl-3">차곡차곡 돈 모으는 저축왕</h4>
        </div>
        <div class="card-footer w-100 bg-transparent border-0 text-body fs-sm fw-normal pt-0 pb-3 pb-xl-0">참여 완료</div>
      </div>

    </div>
  </div>
</section>

  <!-- 쿠폰 섹션 -->
  <section class="coupons-section py-4">
    <div class="container box-container">
      <h3 class="mb-4">나의 쿠폰</h3>
      <div class="coupons">
        <div class="coupon" v-for="(coupon, index) in coupons" :key="index">
          <div class="coupon-count">{{ coupon.count }}개</div>
          <div class="coupon-content"></div>
          <span class="coupon-title">{{ coupon.title }}</span>
          <p class="coupon-description">{{ coupon.description }}</p>
          <button class="coupon-button">쿠폰 사용</button>
        </div>
      </div>
    </div>
  </section>

  <!-- 리워드 섹션 -->
  <section class="reward-section py-4">
    <div class="container box-container">
      <h3 class="mb-4">나의 리워드 정보</h3>
      <div class="accordion" id="accordionOne">
        <div class="card mb-3" v-for="(reward, index) in rewards" :key="index">
          <div class="card-header" :class="reward.bgClass" :id="'heading' + index">
            <h5 class="icon-bg collapsed" style="color: white;" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
              {{ reward.title }}
            </h5>
          </div>
          <div :id="'collapse' + index" class="accordion-collapse collapse shadow-sm rounded-sm" :aria-labelledby="'heading' + index" data-bs-parent="#accordionOne">
            <div class="card-body" style="color: white;">
              <p>{{ reward.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      totalAsset: '50,000',
      assetItems: [
        {
          name: '예금',
          percentage: 60, // 예금 60%
          amount: '30,000',
          color: '#FFA726',
          icon: '₩',
        },
        {
          name: '적금',
          percentage: 30, // 적금 30%
          amount: '15,000',
          color: '#42A5F5',
          icon: '₩',
        },
        {
          name: '주식',
          percentage: 10, // 주식 10%
          amount: '5,000',
          color: '#66BB6A',
          icon: 'P',
        },
      ],
      coupons: [
        { count: 1, title: '일기 1회 면제 쿠폰', description: '원하는 날 하루 일기 쓰기를 쉬어도 괜찮아요!' },
        { count: 1, title: '10분 노래듣기 쿠폰', description: '점심 시간에 원하는 노래를 들을 수 있어요!' },
        { count: 1, title: '점심 먼저 먹기 쿠폰', description: '점심 식사를 기다리지 않고 먼저 먹을 수 있어요!' },
      ],
      rewards: [
        { title: '오늘의 청소왕 +100 씨드', description: '우리반 청소왕 나야나', bgClass: 'bg-primary' },
        { title: '규칙을 잘 지키는 바른 어린이 +50 씨드', description: '우리반 규칙왕 나야나', bgClass: 'bg-success' },
        { title: '발표의 대가 +30 씨드', description: '우리반 발표왕 나야나', bgClass: 'bg-danger' },
        { title: '나는야 보조 선생님 +80 씨드', description: '우리반 보조 선생님 나야나', bgClass: 'bg-info' },
      ],
      challenges: [
        {
          title: "우리반 금융퀴즈왕 챌린지",
          description: "금융퀴즈를 풀 때마다 늘어나는 리워드를 받자!"
        },
        {
          title: "주식 시장 탐험가 챌린지",
          description: "오늘은 오를까? 내릴까? 주식 시장 결과 확인해보자!"
        },
        {
          title: "출석 첵! 챌린지",
          description: "일주일 동안 하루도 빠짐없이 출석하자!"
        }
      ]
    };
  },
  methods: {
    // 각 섹션의 'left' 위치를 계산
    getLeftPosition(index) {
      let totalPercentage = 0;
      for (let i = 0; i < index; i++) {
        totalPercentage += this.assetItems[i].percentage;
      }
      return totalPercentage;
    },
  },
};
</script>

<style scoped>
/* 공통 스타일 */
.box-container {
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1280px;
  margin: 0 auto;
}

/* 총자산 스타일 */
.total-asset {
  text-align: left;
}

.asset-amount {
  font-size: 2rem;
  font-weight: bold;
}

/* 바 그래프 스타일 */
.bar-graph {
  position: relative;
  height: 15px;
  background-color: #ffe0b2;
  border-radius: 8px;
  margin: 10px 0;
  overflow: hidden;
}

.filled-bar {
  position: absolute;
  height: 100%;
  transition: width 0.5s, background-color 0.5s;
}

/* 자산 항목 스타일 */
.asset-items {
  margin-top: 20px;
}

.asset-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 10px;
}

.details {
  flex: 1;
}

.name {
  font-weight: bold;
}

.percentage {
  color: gray;
  font-size: 0.8rem;
}

.amount {
  font-weight: bold;
}

.comparison {
  color: #42A5F5;
  font-size: 0.8rem;
}

/*챌린지 섹션 스타일*/
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 가로로 3개의 열 고정 */
  gap: 24px; /* 카드 간격 */
}

/* 쿠폰 섹션 스타일 */
.coupons {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.coupon {
  background-color: #e7633b;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.coupon-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
  font-weight: bold;
  font-size: 1rem;
}

.coupon-content {
  background-color: #f4f4f4;
  border-radius: 10px 10px 0 0;
  height: 60px;
  margin: -20px -20px 10px;
}

.coupon-title {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  font-size: 1.2rem;
}

.coupon-description {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.coupon-button {
  background-color: #ff8a65;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

/* 리워드 섹션 스타일 */
.accordion .card-header {
  cursor: pointer;
}
</style>