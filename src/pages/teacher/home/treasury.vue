<template>
  <div class="card-container">
    <div class="card">
        <div class="card-img-overlay">
          <section class="col" id="sec1">
            <div class="card-body text-start"> <!-- text-start 클래스를 추가하여 전체 왼쪽 정렬 -->
              <div class="d-flex justify-content-between">
                <div class="text-primary  text-title mb-2"> 현재 국고에는 {{ formattedTreasuryBalance }} 씨드가 들어있어요!</div>
              </div>
              <div class="progress mb-3" style="height: 10px;">
                <div 
                  class="progress-bar" 
                  role="progressbar" 
                  :style="{ width: progressValue + '%', backgroundColor: '#448C74' }" 
                  :aria-valuenow="progressValue" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                >
                <span class="progress-text">{{ progressValue }}%</span>
                </div>
            </div>
            </div>

          </section>
        </div>
        </div>

        <div class="card" id="scard">
          <div class="card-img-overlay">
            <div class="card-body">
              <div class="d-flex align-items-center pb-1 mb-4" id="week"> 
                <span class="text-mute ms-1">지난 주 주급씨드  :   </span>
                <span class="text-dark fw-bold">{{seedValue}}<img src="@/assets/images/tree1.png" class="chart-img" style="width: 20px; height: auto;"> <!-- 이미지 크기 고정 --></span>
              </div>
              <button class="btn btn-primary" style="height: 30px; margin-top: 0;" @click="openModal" id="changebutton">변경하기</button>
              <div class="d-flex align-items-center pb-2 mb-3">
              </div>
              <div class="alert alert-success d-flex mb-0" style="margin-top: 20px; width:300px; background-color: rgba(255, 255, 255, 0.9);">
                <i class="ai-octagon-alert fs-xl me-2"></i>
                <!-- 인상 비율 표시 -->
                  <p class="mb-0" v-if="increaseRate > 0">전 주 대비 {{ increaseRate }}% 가량 인상되었습니다.</p>
                  <p class="mb-0" v-else-if="increaseRate < 0">전 주 대비 {{ Math.abs(increaseRate) }}% 가량 감소되었습니다.</p>
                  <p class="mb-0" v-else>변경사항이 없습니다.</p>
              </div>
            </div>
          </div>
        </div>
    
    <div class="card" id="reward_card">
      <router-link to="/teacher/reward">
      <div class="card-img-overlay">
        <div class="text-blue fw-semi-bold">
        </div>
      </div>
      </router-link>
    </div>
  </div>


   <!-- 모달창 -->
   <div v-if="showModal" class="modal d-block" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">주간 씨드 지급하기</h5>
          <button type="button" class="btn-close" @click="showModal = false"></button>
        </div>
        <div class="modal-body">
          <label for="seedInput">주간 씨드 값:</label>
          <input type="number" id="seedInput" v-model="tempSeedValue" class="form-control" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showModal = false">닫기</button>
          <button type="button" class="btn btn-primary" @click="saveSeedValue">저장</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TreasuryAPI from '@/api/teacherTreasuryApi.js';

// 1000단위마다 쉼표를 찍어주는 computed 속성
const formattedTreasuryBalance = computed(() => {
  return new Intl.NumberFormat().format(treasuryBalance.value);
});

// 상태 관리
const previousSeedValue = ref(1000); // 기존 주간 씨드 값
const seedValue = ref(1000); // 현재 주간 씨드 값
const tempSeedValue = ref(0); // 모달에서 임시로 입력하는 값
const showModal = ref(false); // 모달 표시 여부

// 모달 창을 닫는 함수
const closeModal = () => {
  showModal.value = false;
};

// 주급 지급 API 호출 및 씨드 값 저장 함수
const saveSeedValue = async () => {
  try {
    const studentSalaryDTO = {
      seed: tempSeedValue.value,  // 입력받은 씨드 값
    };

    // 주급 지급 API 호출
    const response = await TreasuryAPI.paySalary(studentSalaryDTO);
    console.log('주급 지급 성공:', response);

    // 씨드 값 업데이트
    seedValue.value = tempSeedValue.value;  // 씨드 값을 업데이트하여 화면에 반영
    localStorage.setItem('seedValue', tempSeedValue.value);  // 씨드 값을 localStorage에 저장

    // 주급 지급 성공 시 모달 창을 닫음
    closeModal();
    alert('주급이 지급되었습니다.');
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert('국고에 잔액이 부족하여 주급 지급이 불가능합니다.');
    } else {
      console.error('주급 지급 실패:', error);
      alert('주급 지급에 실패했습니다.');
    }
  }
};

// 인상된 비율 계산
const increaseRate = computed(() => {
  if (previousSeedValue.value === 0) {
    return 0;
  }
  const rate = ((seedValue.value - previousSeedValue.value) / previousSeedValue.value) * 100;
  return rate.toFixed(2); // 소수점 둘째 자리까지 반올림
});

// 모달창 열기
const openModal = () => {
  tempSeedValue.value = seedValue.value; // 모달 열기 전 임시 값을 현재 값으로 설정
  showModal.value = true;
};


// 상태 관리
const treasuryBalance = ref(''); // Treasury API에서 가져온 씨드 값 저장
const progressValue = ref(''); // 초기 progress 값 설정

// 최대치 설정
const MAX_BALANCE = 1000000; // 최대 씨드 값 100만

// progressValue를 계산하는 함수
const calculateProgressValue = (balance) => {
  const progress = (balance / MAX_BALANCE) * 100; // 백분율로 계산
  return progress > 100 ? 100 :parseFloat(progress.toFixed(1)); // 최대 100%로 제한
};

// 컴포넌트가 마운트될 때 Treasury API 호출
onMounted(async () => {
  try {
    const data = await TreasuryAPI.Treasury();  // API 호출
    treasuryBalance.value = data;  // API에서 가져온 값을 treasuryBalance에 저장
    progressValue.value = calculateProgressValue(treasuryBalance.value); // progressValue 계산

     // 저장된 씨드 값을 localStorage에서 불러옴
     const savedSeedValue = localStorage.getItem('seedValue');
    if (savedSeedValue !== null) {
      seedValue.value = parseInt(savedSeedValue, 10);  // 저장된 값을 seedValue에 할당
    }
  } catch (error) {
    console.error('Treasury 정보를 가져오는 데 실패했습니다.', error);
  }
});


</script>

<style scoped>
.card-container {
  display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 카드 사이에 간격 추가 */
  gap: 20px; /* 카드 사이의 여백 설정 */
  width: 100%; /* 컨테이너 전체 너비 */
}

.card {
  width: 33%; /* 각 카드의 너비를 48%로 설정하여 두 개가 한 줄에 맞게 함 */
  height: 400px; /* 카드 높이 */
  background-size: contain; /* 이미지가 짤리지 않게 설정 */
  background-position: center; /* 이미지 중앙에 위치 */
  background-repeat: no-repeat; /* 여백 없이 표시 */
  border-radius: 25px; /* 카드 모서리 둥글게 */
  position: relative;
  display: flex;  
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  margin: 0px;
  background-color: #14AAFF;
}

/* 첫 번째 카드 배경 이미지 */
.card:nth-child(1) {
  background-image: url('@/assets/images/treasury.png'); /* 첫 번째 카드 배경 */
}

/* 두 번째 카드 배경 이미지 */
.card:nth-child(2) {
  background-image: url('@/assets/images/week_seed.png'); /* 두 번째 카드 배경 */
}

/* 두 번째 카드 배경 이미지 */
.card:nth-child(3) {
  background-image: url('@/assets/images/welcome.png'); /* 두 번째 카드 배경 */
}

.overlay-text {
  color: white; /* 텍스트 색상 */
  font-size: 24px; /* 텍스트 크기 */
  font-weight: bold;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* 텍스트 배경 반투명 처리 */
  padding: 10px;
  border-radius: 5px; /* 텍스트 배경 모서리 둥글게 */
  position: absolute;
}

.tax-title {
  padding-top: 20px; /* 상단 여백을 적당히 설정 (필요 시 값 조정) */
  color: white;
  font-size: 18px;
  margin-top: 120px;
  margin-left: 45px;

}

.alert {
 width:250px;
 background-color: white;
 color:#00A3FF;
}

.taxAlert{
  color:#00A3FF;
}

.tax-footer{
  margin-left: 40px;
}
.saving-footer{
  margin-left: 70px;
}

.btn{
  width:115px;
  border-radius: 5px;
}

#scard{
  background-color: #14AAFF;
  
}

#savingbtn{
  background-color: #00A3FF;
  border:none;
  width:180px;
}

#saving2btn{
  background-color: #EF5858;
  width:180px;
}

.alert{
  width:330px;
}

.text-title{
  margin-top: 120px;
}


#week{
  margin-top: 120px;
}


#reward_card{
  background-color: #58CCFF;
  padding-right: 0px;
  margin-right: 0px;
}

.progress {
  height: 10px;
  position: relative; /* 기준이 될 위치 설정 */
}

.progress-bar {
  height: 100%;
  background-color: #448C74;
}

.progress-text {
  position: absolute; /* 텍스트를 절대 위치로 설정 */
  top: 50%; /* 세로로 가운데 정렬 */
  left: 50%; /* 가로로 가운데 정렬 */
  transform: translate(-50%, -50%); /* 정확하게 중앙으로 이동 */
  color: black; /* 텍스트 색상 */
  font-weight: bold;
  font-size: 12px;
}
</style>