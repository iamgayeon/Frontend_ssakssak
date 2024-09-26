<script setup>
import { ref, computed } from 'vue';


// 상태 관리
const previousSeedValue = ref(1000); // 기존 주간 씨드 값
const seedValue = ref(1000); // 현재 주간 씨드 값
const tempSeedValue = ref(seedValue.value); // 모달에서 임시로 입력하는 값
const showModal = ref(false); // 모달 표시 여부

// 모달창에서 저장 버튼을 클릭하면 값을 저장
const saveSeedValue = () => {
  previousSeedValue.value = seedValue.value; // 기존 값을 저장
  seedValue.value = tempSeedValue.value; // 새로운 값으로 업데이트
  showModal.value = false; // 모달 닫기
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
// 현재 progress 값을 관리하는 변수
const progressValue = ref(80); // 초기값을 80%로 설정

</script>

<template>
    <link rel="stylesheet" href="assets/css/theme.min.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <div class="container">
        <div class="row">
  <div class="row">
      <!-- 보유 적금 -->
      <section class="col" id="sec1">
        <div class="card p-3">
          <div class="card-body">
              <router-link to="/teacher/bank">
            <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
              <i class="bi bi-currency-exchange text-primary lead pe-1 me-2"></i>
              <h2 class="h4 mb-0">국고 확인</h2>
            </div>
          </router-link>
            <div class="d-flex align-items-center pb-1 mb-4">
              <h3 class="h6 mb-0 me-3">현재까지 쌓인 국고 상황을 확인해보세요!</h3>
              <span class="badge bg-faded-primary text-primary">진행중</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="mb-2">현재 국고에는 50,000씨드가 들어있어요!</div>
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
                    {{ progressValue }}%
                  </div>
                </div>
          
            <div class="alert alert-success d-flex mb-0" style="margin-top: 30px;">
              <i class="ai-octagon-alert fs-xl me-2"></i>
              <p class="mb-0">월 평균 20,000씨드가 국고로 적립중입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 주간 씨드 -->
      <section class="col">
        <div class="card p-3">
          <div class="card-body">
            <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
              <i class="bi bi-calendar-day text-primary lead pe-1 me-2"></i>
              <h2 class="h4 mb-2">금주의 주간씨드</h2>
            </div>
            <div class="d-flex align-items-center pb-1 mb-4">
              <h3 class="h6 mb-0 me-3">주간씨드를 확인하고 변경해보세요!</h3>
              <button class="btn btn-primary" style="height:30px" @click="openModal">변경하기</button>
            </div>
            <div class="d-flex align-items-center pb-2 mb-3">
              <span class="text-mute">현재 주간씨드  :   </span>
              <span class="text-dark fw-bold">{{seedValue}}<img src="@/assets/images/tree1.png" class="chart-img" style="width: 20px; height: auto;"> <!-- 이미지 크기 고정 --></span>
            </div>
            <div class="alert alert-success d-flex mb-0" style="margin-top: 30px;">
              <i class="ai-octagon-alert fs-xl me-2"></i>
              <!-- 인상 비율 표시 -->
                <p class="mb-0" v-if="increaseRate > 0">전 주 대비 {{ increaseRate }}% 가량 인상되었습니다.</p>
                <p class="mb-0" v-else-if="increaseRate < 0">전 주 대비 {{ Math.abs(increaseRate) }}% 가량 감소되었습니다.</p>
                <p class="mb-0" v-else>변경사항이 없습니다.</p>
            </div>
          </div>
        </div>
      </section>

      </div>
      </div>
      </div>
      

      <!-- 모달창 -->
      <div v-if="showModal" class="modal d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">주간 씨드 수정</h5>
              <button type="button" class="btn-close" @click="showModal = false"></button>
            </div>
            <div class="modal-body">
              <label for="seedInput">새로운 주간 씨드 값:</label>
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

<style scoped>
.text-dark {
    margin-left:5px;
}
#sec1{
    margin-left:20px;
}
.btn{
    border: none;
    border-radius: 5px;
}

.modal {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-dialog {
  max-width: 500px;
  width: 100%;
}
</style>