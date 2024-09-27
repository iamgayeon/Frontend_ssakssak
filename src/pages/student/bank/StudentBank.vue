<template>
  <link rel="stylesheet" href="assets/css/theme.min.css">
  <link rel="stylesheet" href="assets/css/theme.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
 
  <!-- 적금 가입 목록 보기 -->
  <div class="container mt-2 mt-lg-5 mb-lg-4 my-xl-5">
    <!-- 카드로 테이블 감싸기 -->
      <!-- 카드 헤더에 제목 추가 -->
      <div class="card-header">
        <h5 class="title">현재 가입중인 적금 상품</h5>


      <!-- 카드 본문에 테이블 배치 -->
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th id="th1">적금 가입일</th>
              <th id="th1">만기예정일</th>
              <th id="th1">적금명</th>
              <th id="th1">적립액</th>
              <th id="th1">해지하기</th>
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
                <button class="btn btn-outline-danger" @click="cancelSaving(item)">적금 해지</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 적금 상품 전체보기 -->
  <div class="container">
    <div class="card-header"><h5 class="title">적금 상품 전체보기</h5></div>
  </div>

  <!-- 적금 카드 -->
  <div class="savings-plans">
    <div class="savingCard" @click="openModal('새싹적금')" :disabled="isSubscribed('새싹적금')">
      <img src="@/assets/images/tree1.png" alt="새싹적금" class="card-img" id="card-img" />
      <div class="card-header">
        <h4>새싹적금</h4>
        <div class="alert alert-primary" role="alert">
          <i class="bi bi-bar-chart-line me-2" style=" padding-bottom:5px;"></i>금리 : 2~5%<i class="bi bi-calendar4-week me-2" style="padding-left: 10px; padding-bottom:5px;"></i>예치 기간 : 2주
        </div>
      </div>
        <div class="card-body">
        <p>상품 설명</p>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">상품특징</span>
            <span class="text-muted" style="text-align:right">낙농협회장, 환경미화원, 우체부, <br>사서에게 우대금리 제공</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">가입대상</span>
            <span class="text-muted">2학년 7반 학생</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">예치기간</span>
            <span class="text-muted">2주</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">저축금액</span>
            <span class="text-muted">최대 30씨드</span>
          </div>
      </div>
      <button class="btn2" :disabled="isSubscribed('새싹적금')">적금 가입하기</button>
    </div>

    <div class="savingCard" @click="openModal('나무적금')" :disabled="isSubscribed('나무적금')">
      <img src="@/assets/images/tree2.png" alt="나무적금" class="card-img" id="card-img" />
      <div class="card-header">
        <h4>나무적금</h4>
        <div class="alert alert-primary" role="alert">
          <i class="bi bi-bar-chart-line me-2" style=" padding-bottom:5px;"></i>금리 : 5%<i class="bi bi-calendar4-week me-2" style="padding-left: 10px; padding-bottom:5px;"></i>예치 기간 : 4주
        </div>
      </div>
      <div class="card-body">
        <p>상품 설명</p>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">상품특징</span>
            <span class="text-muted" style="text-align:right">2학년 7반생이면 누구나 <br>가입 가능한 금융싹싹의 대표 적금</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">가입대상</span>
            <span class="text-muted">2학년 7반 학생</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">예치기간</span>
            <span class="text-muted">4주</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">저축금액</span>
            <span class="text-muted">최대 50씨드</span>
          </div>
      </div>
      <button class="btn2" :disabled="isSubscribed('나무적금')">적금 가입하기</button>
    </div>

    <div class="savingCard" @click="openModal('숲속적금')" :disabled="isSubscribed('숲속적금')">
      <img src="@/assets/images/tree3.png" alt="숲속적금" class="card-img" id="card-img" />
      <div class="card-header">
        <h4>숲속적금</h4>
        <div class="alert alert-primary" role="alert">
          <i class="bi bi-bar-chart-line me-2" style=" padding-bottom:5px;"></i>금리 : 15%<i class="bi bi-calendar4-week me-2" style="padding-left: 10px; padding-bottom:5px;"></i>예치 기간 : 8주
        </div>
      </div>
      <div class="card-body">
        <p>상품 설명</p>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">상품특징</span>
            <span class="text-muted" style="text-align:right">높은 이율을 제공하여 <br>자산을 키워주는 똑똑한 적금</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">가입대상</span>
            <span class="text-muted">2학년 7반 학생</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">예치기간</span>
            <span class="text-muted">8주</span>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
            <span class="text-muted fw-bold">저축금액</span>
            <span class="text-muted">최대 100씨드</span>
          </div>
      </div>
      <button class="btn2" :disabled="isSubscribed('숲속적금')">적금 가입하기</button>
    </div>
  </div>

    <!-- 모달 창 -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h3 v-if="!isSubscribedSuccessfully">{{ selectedProductName }} 가입하기</h3>
        <h3 v-if="isSubscribedSuccessfully">축하합니다! 적금 가입이 완료되었습니다.</h3>
  
        <div v-if="!isSubscribedSuccessfully">
          <label>금액 설정 : </label>
          <input type="number" v-model="subscriptionAmount" class="moneyselect" />
          <button class="btn btn-primary" @click="subscribeToSaving">적금 가입하기</button>
        </div>
        <div v-else>
          <p>이제 나의 적금에서 확인할 수 있습니다.</p>
        </div>
  
        <button @click="closeModal">닫기</button>
      </div>
    </div>

  <div class="container mt-2 mt-lg-5 mb-lg-4 my-xl-5">
    <div class="card-header">
    <h5 class="title">얼마를 받을 수 있을까? 📱</h5>
    
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
          <input type="text" v-model="interestRate" class="form-control styled-select" disabled />
        </div>
        <div class="form-group">
          <label>입금 금액</label>
          <div class="amount-input">
            <button @click="decreaseAmount" class="btn btn-outline-success">-</button>
            <input type="number" v-model="depositAmount" class="form-control" />
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
          <div>{{ expectedInterest }} 씨드</div>
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

const savingsList = ref([]);

// 모달 상태
const isModalOpen = ref(false);
const selectedProductName = ref('');
const subscriptionAmount = ref(100);
const isSubscribedSuccessfully = ref(false);

// 모달 열기
const openModal = (productName) => {
  selectedProductName.value = productName;
  isModalOpen.value = true;
};

// 모달 닫기
const closeModal = () => {
  isModalOpen.value = false;
  isSubscribedSuccessfully.value = false;
  subscriptionAmount.value = 100; // 초기화
};

// 주 단위로 날짜를 더해 만기일 계산하는 함수
const addWeeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
};

// 날짜 형식 변환 (YYYY-MM-DD)
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 상품별 최대 금액 설정 함수
const getMaxAmount = (productName) => {
  if (productName === '새싹적금') {
    return 30;
  } else if (productName === '나무적금') {
    return 50;
  } else if (productName === '숲속적금') {
    return 100;
  }
  return 100; // 기본 최대 금액 (예외 처리)
};

// 적금 가입 처리
const subscribeToSaving = () => {
  const currentDate = new Date();
  let expiryDate;

  // 상품별 만기일 계산
  if (selectedProductName.value === '새싹적금') {
    expiryDate = addWeeks(currentDate, 2);
  } else if (selectedProductName.value === '나무적금') {
    expiryDate = addWeeks(currentDate, 4);
  } else if (selectedProductName.value === '숲속적금') {
    expiryDate = addWeeks(currentDate, 8);
  }

  // 상품별 최대 금액 확인
  const maxAmount = getMaxAmount(selectedProductName.value);

  if (subscriptionAmount.value > maxAmount) {
    alert(`최대 금액을 초과했습니다! ${selectedProductName.value}의 최대 금액은 ${maxAmount}입니다.`);
    return;
  }

  // 새로운 적금을 적금 리스트에 추가
  savingsList.value.push({
    joinDate: formatDate(currentDate),
    expiryDate: formatDate(expiryDate),
    name: selectedProductName.value,
    amount: subscriptionAmount.value,
  });

  isSubscribedSuccessfully.value = true;
};

// 이미 가입된 적금인지 확인하는 함수
const isSubscribed = (productName) => {
  return savingsList.value.some((item) => item.name === productName);
};

// 적금 해지 처리
const cancelSaving = (item) => {
  savingsList.value = savingsList.value.filter((saving) => saving !== item);
  alert(`${item.name} 적금을 해지합니다.`);
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
.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
.savings-table {
  padding: 20px;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 가운데 정렬 */
}
.alert{
  background-color: #CFE2FF !important;
  color: #485598;
}
.card {
  background-color: #fff; /* 카드 배경색 */
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 960px; /* 카드의 최대 너비 설정 */
  width: 100%; /* 부모 요소에 따라 카드 크기 조정 */
  margin: 0 auto; /* 수평 가운데 정렬 */
  color : #50495B;
}

.card-header {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-radius: 10px; /* 상단 모서리 둥글게 */

}

.title {
  padding-top:20px;
  padding-left: 5px;
  margin-left: 20px; /* 제목 좌측에 마진 추가 */
}

.card-body {
  padding: 10px;
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
th{
  color:#fff !important;
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
  background-color: #f8f6e9; /* 배경색 */
  width: 100%;
  color : #50495B;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  padding-top:40px;

}

.savingCard {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin : 14px;
  width: 404px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s; /* 카드에 호버 효과 */
  color : #50495B;

}
#th1{
  color:#fff !important;
  background-color: #00A3FF;
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
  background-color: #00A3FF;
  color: #fff;
  border: 1px white solid;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

.btn2:disabled {
  background-color: #cccccc; /* 회색 */
  color: #666666; /* 텍스트 색상 */
  cursor: not-allowed; /* 커서 모양 변경 */
  border: 1px solid #aaaaaa; /* 테두리 색상 */
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

.saving-p{
  color : #03C75A;
  font-weight: bold;
}

/*이자 계산기 */
.interest-calculator {
background-color: #fff;
padding: 30px;
border-radius: 12px;
width: 960px;
margin: 30px auto;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
color : #50495B;

}

.calculator-container {
display: flex;
justify-content: space-between;
align-items: center;
color : #50495B;

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
background-color: #00A3FF;
color: #fff;
border: none;
padding: 10px 20px;
cursor: pointer;
border-radius: 6px;
font-size: 16px;
margin-top: 20px;
margin-bottom: 20px;
}

.calculate-btn:hover {
background-color: #00A3FF;
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
color : #50495B;
padding: 10px;
border-radius: 6px;
border: 1px solid #ddd;
font-size: 16px;
transition: all 0.3s ease;
}

/* 모달 스타일 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* 배경을 어둡게 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 다른 요소 위로 */
}

.modal-content {
  background: #fefefe; /* 밝은 배경 */
  padding: 30px; /* 충분한 여백 */
  border-radius: 16px; /* 더 둥근 모서리 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 더 부드러운 그림자 */
  max-width: 500px; /* 더 넓은 최대 너비 */
  width: 100%;
  text-align: center;
  position: relative; /* 닫기 버튼 위치 설정을 위해 상대 위치 */
}

.modal-content h3 {
  font-size: 1.5rem; /* 더 큰 제목 */
  color: #333; /* 어두운 제목 색상 */
  margin-bottom: 20px; /* 제목 아래 여백 */
}

.modal-content p {
  font-size: 1rem; /* 일반 텍스트 크기 */
  color: #555; /* 약간 밝은 텍스트 색상 */
  margin-bottom: 20px; /* 텍스트 아래 여백 */
}

.modal-content input[type="number"] {
  padding: 10px;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 1rem;
  margin-left: 10px; /* input 앞에 여백 추가 */
}

.modal-content button {
  background-color: #00A3FF; /* 초록색 버튼 */
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px 0; /* 버튼 간격을 위한 여백 추가 */
}

.modal-content button:hover {
  background-color: #00A3FF; /* 호버 시 어두운 초록색 */
}

.modal-content button.close-btn {
  background-color: transparent;
  color: #999;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  border: none;
}

.modal-content button.close-btn:hover {
  color: #333;
}

.modal-content button.disabled-btn {
  background-color: #ccc; /* 비활성화 버튼 색상 */
  cursor: not-allowed;
}

.modal-content .button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* 버튼과 다른 요소 간의 간격 */
}

.modal-content .button-group button {
  width: 48%; /* 버튼을 나란히 배치하고 폭 설정 */
}

</style>
