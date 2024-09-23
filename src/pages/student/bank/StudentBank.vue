<template>


  <!-- 적금 가입 목록 보기 -->
  <div class="savings-table">
      <!-- 카드로 테이블 감싸기 -->
      <div class="card mb-3">
      <!-- 카드 헤더에 제목 추가 -->
      <div class="card-header">
          <h5 class="title">나의 적금</h5>
      </div>
      
      <!-- 카드 본문에 테이블 배치 -->
      <div class="card-body">
          <table class="table">
          <thead>
          <tr>
              <th>적금 가입일</th>
              <th>만기예정일</th>
              <th>적금명</th>
              <th>적립액</th>
              <th>해지하기</th>
          </tr>
          </thead>
          <tbody>
          <!-- 적금 리스트를 순회하며 행을 생성 -->
          <tr v-for="(item, index) in savingsList" :key="index">
              <td>{{ item.joinDate }}</td>
              <td>{{ item.expiryDate }}</td>
              <td>{{ item.name }}</td>
              <td style="color: blue;">{{ item.amount }} 씨드</td>
              <td>
              <button class="btn btn-danger" @click="cancelSaving(item)">적금 해지</button>
              </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  
  <!-- 적금 상품 전체보기 -->
  <div class="card">
      <h5 id="allshow">적금 상품 전체보기</h5>
    </div>


  <!-- 적금 카드 -->
  <div class="savings-plans">
      <!-- 첫 번째 카드 -->
      <div class="savingCard" @click="goToSavingPlan(1)">
        <img src="@/assets/images/tree1.png" alt="새싹적금" class="card-img" id="card-img">
        <div class="card-header">
          <h4>새싹적금</h4>
          <p>2% ~ 5% / 2주</p>
      </div>
        <div class="description">
          <p>상품 설명</p>
          <ul>
            <li>🌱 기본 금리는 2%입니다.</li>
            <li>🌱 주당 최대 30씨드 입금</li>
            <li>🌱 총 예치 기간은 2주입니다.</li>
            <li>🌱 농협회장, 환경미화원, 우체부, 사서는 우대금리가 3% 추가되요. </li>
          </ul>
        </div>
        <button class="btn2">적금 가입하기</button>
      </div>
  
      <!-- 두 번째 카드 -->
      <div class="savingCard" @click="goToSavingPlan(2)">
        <img src="@/assets/images/tree2.png" alt="나무적금" class="card-img" id="card-img">
        <div class="card-header">
      <h4>나무적금</h4>
      <p>5% / 4주</p>
      </div>
        <div class="description">
          <p>상품 설명</p>
          <ul>
            <li>🌱 기본 금리는 5%입니다.</li>
            <li>🌱 주당 최대 50씨드 입금</li>
            <li>🌱 예치 기간은 총 4주입니다.</li>
            <li>🌱 농협회장, 환경미화원, 우체부, 사서는 우대금리가 3% 추가되요. </li>
          </ul>
        </div>
        <button class="btn2">적금 가입하기</button>
      </div>
  
      <!-- 세 번째 카드 -->
      <div class="savingCard" @click="goToSavingPlan(3)">
        <img src="@/assets/images/tree3.png" alt="숲속적금" class="card-img" id="card-img">
        <div class="card-header">
        <h4>숲속적금</h4>
        <p>15% / 8주</p>
      </div>
        <div class="description">
          <p>상품 설명</p>
          <ul>
            <li>🌱 기본 금리는 15%입니다.</li>
            <li>🌱 주당 최대 100씨드 입금.</li>
            <li>🌱 예치 기간은 총 8주입니다.</li>
            <li>🌱 농협회장, 환경미화원, 우체부, 사서는 우대금리가 3% 추가되요. </li>
          </ul>
        </div>
        <button class="btn2">적금 가입하기</button>
      </div>
    </div>


    <div class="interest-calculator">
  <h4>얼마를 받을 수 있을까? 📱</h4>
  <div class="calculator-container">
    <!-- 상품 선택 및 금액 입력 -->
    <div class="input-section">
      <div class="form-group">
        <label>상품 선택 : </label>
        <select v-model="selectedProduct" class="form-control styled-select">
          <option value="숲속적금">숲속적금</option>
          <option value="나무적금">나무적금</option>
          <option value="새싹적금">새싹적금</option>
        </select>
      </div>
      <div class="form-group">
        <label>금리</label>
        <input type="text" v-model="interestRate" class="form-control styled-select" disabled/>
      </div>
      <div class="form-group">
        <label>입금 금액</label>
        <div class="amount-input">
          <button @click="decreaseAmount" class="btn btn-outline-success">-</button>
          <input type="number" v-model="depositAmount" class="form-control"/>
          <button @click="increaseAmount" class="btn btn-outline-success">+</button>
        </div>
      </div>
      <button class="calculate-btn" @click="calculateInterest">계산하기</button>
    </div>

    <!-- 계산 결과 출력 -->
    <div class="result-section">
      <div class="result-item">
        <label>예상 적립액</label>
        <div>{{ depositAmount }} 씨드</div>
      </div>
      <div class="result-item">
        <label>예상 이자</label>
        <div >{{ expectedInterest }} 씨드</div>
      </div>
      <div class="result-item">
        <label>만기 금액</label>
        <div>{{ finalAmount }} 씨드</div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSavingPlan = (id) => {
router.push(`/saving-plan/${id}`);
};

const savingsList = ref([
  {
    joinDate: '24.09.12',
    expiryDate: '24.09.26',
    name: '쌔싹적금',
    amount: 300,
  },
  {
    joinDate: '24.09.12',
    expiryDate: '24.09.26',
    name: '쌔싹적금',
    amount: 300,
  },
  {
    joinDate: '24.09.12',
    expiryDate: '24.09.26',
    name: '쌔싹적금',
    amount: 300,
  },
  // 다른 항목들 추가 가능
]);

const cancelSaving = (item) => {
  alert(`${item.name} 적금을 해지합니다.`);
  // 적금 해지 로직 추가
};


// 기능3 이자계산
// 상품 선택 및 금액과 이자율 정보
const selectedProduct = ref('숲속적금');
const depositAmount = ref(100);

// 예상 이자와 만기 금액 계산을 위한 값
const expectedInterest = ref(0);
const finalAmount = ref(0);

// 상품에 따른 기간 (주 단위)
const depositPeriod = computed(() => {
if (selectedProduct.value === '숲속적금') {
  return 8; // 8주
} else if (selectedProduct.value === '나무적금') {
  return 4; // 4주
} else if (selectedProduct.value === '새싹적금') {
  return 2; // 2주
}
});

// 이자 계산 함수
const calculateInterest = () => {
// 주당 이자 계산
const weeklyInterest = (depositAmount.value * interestRate.value) / 100;
// 총 이자 = 주당 이자 * 기간(주 수)
const totalInterest = weeklyInterest * depositPeriod.value;

// 예상 이자 및 만기 금액 계산
expectedInterest.value = Math.round(totalInterest);
finalAmount.value = depositAmount.value + expectedInterest.value;
};

// 입금 금액 증가 및 감소 함수
const increaseAmount = () => {
depositAmount.value += 10;
};
const decreaseAmount = () => {
if (depositAmount.value > 10) {
  depositAmount.value -= 10;
}
};

// 상품 선택에 따른 금리 변경
const interestRate = computed(() => {
if (selectedProduct.value === '숲속적금') {
  return 15;
} else if (selectedProduct.value === '나무적금') {
  return 5;
} else if (selectedProduct.value === '새싹적금') {
  return 2;
}
});
</script>

<style scoped>
.savings-table {
  padding: 20px;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 가운데 정렬 */
}

.card {
  background-color: #fff; /* 카드 배경색 */
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 960px; /* 카드의 최대 너비 설정 */
  width: 100%; /* 부모 요소에 따라 카드 크기 조정 */
  margin: 0 auto; /* 수평 가운데 정렬 */
}

.card-header {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-radius: 10px 10px 0 0; /* 상단 모서리 둥글게 */
}

.title {
  margin-left: 20px; /* 제목 좌측에 마진 추가 */
}

.card-body {
  padding: 20px;
}

.table {
  width: 100%;
  border-collapse: separate; /* 테두리 둥글게 하기 위해 separate 사용 */
  border-spacing: 0; /* 테두리 간격 제거 */
  border-radius: 10px; /* 테이블 전체 둥글게 */
  overflow: hidden; /* 둥근 모서리 넘침 방지 */
}

.table th, .table td {
  border: 1px solid #f0f0f0e2;
  padding: 10px;
  text-align: center;
}

/* 상단 모서리 둥글게 */
.table th:first-child {
  border-top-left-radius: 10px;
}

.table th:last-child {
  border-top-right-radius: 10px;
}

/* 하단 모서리 둥글게 */
.table tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

.table tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

.table th {
  background-color: #00A3FF;
  color : #fff;
}

.btn {
  padding: 5px 10px;
  font-size: 14px;
}

#allshow{
  margin: 20px auto; /* 수직 마진과 수평 가운데 정렬 */
  margin-left: 20px; /* 왼쪽 마진 추가 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
  }


/*적금 가입*/


.savings-plans {
  display: flex; /* 가로로 카드들을 배치 */
  justify-content: center; /* 카드 사이 간격 */
  padding: 20px;
  background-color: #f8f6e9; /* 배경색 */
  width: 100%;
}

.savingCard {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin : 14px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s; /* 카드에 호버 효과 */
}

.savingCard:hover {
  transform: translateY(-5px); /* 호버 시 살짝 올라가는 효과 */
}

.savingCard-img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.description {
  margin-top: 15px;
}

.btn2 {
  background-color: #0056b3;
  color: #fff;
  border: 1px white solid;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

.btn2:hover {
  background-color: #f24d4d;
  color:#fff;
}

.description li{
  text-align: left;
  list-style-type: none;
  margin-bottom:10px;
}

#card-img{
  width:40px;
  height: 40px;
}


/*이자 계산기 */
.interest-calculator {
background-color: #fff;
padding: 30px;
border-radius: 12px;
width: 960px;
margin: 30px auto;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.calculator-container {
display: flex;
justify-content: space-between;
align-items: center;
}

.input-section, .result-section {
flex: 1;
}

.input-section {
display: flex;
flex-direction: column;
gap: 15px;
}

.result-section {
display: flex;
flex-direction: column;
gap: 20px;
padding-left: 30px;
border-left: 2px solid #ddd;
}

.form-group {
display: flex;
flex-direction: column;
}

label {
font-weight: bold;
margin-bottom: 5px;
}

.form-control {
padding: 8px;
border-radius: 6px;
border: 1px solid #ccc;
width: 100%;
font-size: 16px;
}

.amount-input {
display: flex;
align-items: center;
gap: 10px;
}

.amount-input-field {
width: 70px;
text-align: center;
}

.btn-amount {
background-color: #007bff;
color: white;
border: none;
border-radius: 50%;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
cursor: pointer;
}

.btn-amount:hover {
background-color: #0056b3;
}

.calculate-btn {
background-color: #28a745;
color: #fff;
border: none;
padding: 10px 20px;
cursor: pointer;
border-radius: 6px;
font-size: 16px;
margin-top: 20px;
}

.calculate-btn:hover {
background-color: #218838;
}

.result-item {
display: flex;
justify-content: space-between;
font-size: 16px;
font-weight: bold;
}

.result-item label {
font-weight: normal;
color: #555;
}
.styled-select {
background-color: #fff;
color: #333;
padding: 10px;
border-radius: 6px;
border: 1px solid #ddd;
font-size: 16px;
transition: all 0.3s ease;
}
</style>
