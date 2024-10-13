<template>
  <div>
    <!-- 국고 현황 섹션 -->
    <div class="section national-status p-3 mb-2"
      style="margin-bottom: 20px; margin-top: 50px; margin-left: 50px; margin-right: 50px; box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);">
      <h4 class="section-title" style="margin: 0; margin-left: 20px;">국고 현황</h4>
    </div>

    <div class="row mb-2" style="margin-top:20px; margin-left: 38px; margin-right: 38px;">
      <!-- 첫 번째 카드 -->
      <div class="col-md-6">
        <div class="card shadow-sm p-4 card-custom" style="margin-bottom: 10px;">
          <img src="@/assets/images/safe.png" alt="금고 이미지" class="icon" />
          <p class="text-right card-text-custom">
            현재 국고에는<br />50,000 씨드가 있어요
          </p>
        </div>
      </div>

      <!-- 두 번째 카드 -->
      <div class="col-md-6">
        <div class="card shadow-sm p-4 card-custom" style="margin-bottom: 10px;">
          <img src="@/assets/images/coin.png" alt="코인 이미지" class="icon" />
          <p class="text-right card-text-custom">
            이번주 세금으로 거둔 금액은<br />10,000 씨드입니다
          </p>
        </div>
      </div>
    </div>

    <!-- 적금 상품 목록 섹션 및 새 적금 등록 버튼 -->
    <div class="section national-status p-3 mb-1 d-flex justify-content-between align-items-center flex-wrap"
      style="margin-left: 50px; margin-right: 50px;">
      <h3 class="section-title" style="margin: 0; margin-left: 20px;">적금 상품 목록</h3>

      <div>
        <!-- 새 적금 등록하기 버튼 -->
        <button @click="openModal" class="btn btn-primary" style="background-color: #00A3FF; color: white;">새 적금
          등록하기</button>

        <div>
          <!-- 모달 창 -->
          <div v-if="isModalOpen" class="modal">
            <div class="modal-content">

              <!-- 모달 내용 -->
              <h4 class="no-bold">새 적금 등록하기</h4>
              <form @submit.prevent="submitForm" class="form-grid">

                <!-- 적금 이름 -->
                <div class="form-group">
                  <label for="saving-name">적금이름 <span class="required-asterisk">*</span></label>
                  <input type="text" id="saving-name" v-model="savingName" placeholder="적금이름을 입력해주세요.">
                </div>

                <!-- 기본 금리 -->
                <div class="form-group">
                  <label for="basic-rate">기본금리(숫자만 입력)<span class="required-asterisk">*</span></label>
                  <input type="text" id="basic-rate" v-model="basicRate" placeholder="기본 금리를 입력해주세요.">
                </div>

                <!-- 상품 특징 -->
                <div class="form-group">
                  <label for="saving-point">상품특징<span class="required-asterisk">*</span></label>
                  <input type="text" id="saving-point" v-model="savingContent" placeholder="상품특징을 입력해주세요.">
                </div>

                <!-- 가입 대상 -->
                <div class="form-group">
                  <label for="saving-person">가입대상<span class="required-asterisk">*</span></label>
                  <input type="text" id="saving-person" v-model="savingPerson" placeholder="가입대상을 입력해주세요.">
                </div>

                <!-- 예치 기간 -->
                <div class="form-group">
                  <label for="period">예치기간 <span class="required-asterisk">*</span></label>
                  <select id="period" v-model="savingPeriod" placeholder="예치 기간을 선택해주세요">
                    <option value="2">2주</option>
                    <option value="4">4주</option>
                    <option value="8">8주</option>
                  </select>
                </div>

                <!-- 입금 주기 -->
                <div class="form-group">
                  <label for="frequency">입금 주기 <span class="required-asterisk">*</span></label>
                  <select id="frequency" v-model="savingCycle" placeholder="입금 주기를 선택해주세요">
                    <option value="d">1일</option>
                    <option value="w">1주</option>
                  </select>
                </div>

                <!-- 최대 입금 금액 -->
                <div class="form-group">
                  <label for="max-amount">최대 입금 금액(숫자만 입력)<span class="required-asterisk">*</span></label>
                  <input type="text" id="max-amount" v-model="maxDeposit" placeholder="최대 입금 금액을 설정해주세요">
                </div>

                <!-- 우대 금리 설정 -->
                <div class="form-group">
                  <label for="extra-rate">우대 금리 설정(숫자만 입력)</label>
                  <input type="text" id="extra-rate" v-model="primeRate" placeholder="우대 금리를 설정해주세요">
                </div>

                <!-- 우대 금리 직업 -->
                <div class="form-group">
                  <label for="selected-Jobs">우대 금리 직업 (최대 4개 선택 가능)</label>
                  <div class="job-list">
                    <label v-for="job in jobList" :key="job.jobId">
                      <input type="checkbox" :value="job.jobName" v-model="selectedJobs"
                        :disabled="selectedJobs.length >= 4 && !selectedJobs.includes(job.jobId)" />
                      {{ job.jobName }}
                    </label>
                  </div>
                </div>

                <!-- 선택한 직업 리스트 -->
                <div class="form-group">
                  <label for="selected-Jobslist">선택된 우대 금리 직업</label>
                  <ul>
                    <li v-for="job in selectedJobs" :key="job">{{ job }}</li>
                  </ul>
                </div>

                <!-- 등록 및 취소 버튼 -->
                <div class="form-group full-width button-group">
                  <button type="submit" class="submit-button">등록</button>
                  <button type="button" @click="closeModal" class="cancel-button">취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- 완료 모달 -->
        <div v-if="isCompleted" class="complete-modal">
          <div class="modal-content">
            <p>적금 설정이 완료되었어요</p>
            <button @click="closeCompleteModal" class="confirm-button">확인</button>
          </div>
        </div>
        <!-- 경고 모달 -->
        <div v-if="showWarningModal" class="complete-modal">
          <div class="modal-content">
            <p>필수 정보를 모두 입력해주세요</p>
            <button @click="closeWarningModal" class="confirm-button">확인</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 적금 카드 섹션 -->
    <div class="card-container">
      <!-- 기존 적금들 -->
      <div v-for="(saving, index) in savingList" :key="saving.savingName" class="card-safe">
        <div class="d-flex justify-content-between align-items-center">
          <!-- 삭제 버튼 -->
          <button @click="deleteSaving(saving.savingName)" class="delete-btn">X</button>
        </div>
        <img :src="saving.img" class="card-icon" />
        <h4 class="text-center">{{ saving.savingName }}</h4>
        <div class="interest">
          <span class="interest-rate">기본 금리: {{ saving.rate }}%</span>
          <span v-if="saving.extraRate" class="interest-rate">우대 금리: {{ saving.primeRate }}%</span>
        </div>
        <div class="details">
          <span class="details-deposit">
            <i v-if="saving.savingPeriod / 7 === 2" class="fa fa-leaf"></i>
            <i v-else class="fa fa-tree"></i>
            <!-- 조건에 따라 다른 문구 출력 -->
            <strong v-if="saving.savingCycle === 'd'"> 매일 최대 {{ saving.maxDeposit }} 씨드 입금 가능</strong>
            <strong v-else> 매주 최대 {{ saving.maxDeposit }} 씨드 입금 가능</strong><br>
          </span>
        </div>

        <hr />
        <div class="description">
          <table>
            <tr>
              <th>상품특징</th>
              <td>{{ saving.savingContent }}</td>
            </tr>
            <tr>
              <th>가입대상</th>
              <!-- 선생의 학년,반 가져올예정 -->
              <td>2학년 7반 학생</td>
            </tr>
            <tr>
              <th>예치기간</th>
              <td>{{ saving.savingPeriod / 7 }}주</td>
            </tr>
            <tr>
              <th>저축금액</th>
              <td>최대 {{ saving.maxDeposit }} 씨드 </td>
            </tr>
          </table>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { useBankStore } from '@/stores/bankStore';
import jobApi from '@/api/teacherClassApi';

const bankStore = useBankStore();


const savingList = computed(() => bankStore.savingList);
const jobList = computed(() => bankStore.jobList);


onMounted(async () => {
  await bankStore.fetchSavingList();
  await bankStore.fetchJobList();
})

console.log(jobList);

// 모달 상태 관리
const isModalOpen = ref(false);
const isCompleted = ref(false);
const showWarningModal = ref(false);

// 선택된 직업 리스트
const selectedJobs = ref([]);

// 모달 열기/닫기
const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedJobs.value = [];
  isModalOpen.value = false;
};

const savingName = ref('');
const savingContent = ref('');
const basicRate = ref('');
const primeRate = ref('');
const maxDeposit = ref('');
const savingPeriod = ref('');
const savingCycle = ref('');


// 적금 등록 제출
const submitForm = () => {
  if (!savingName.value || !period.value || !frequency.value || !basicRate.value || !maxAmount.value || !savingPoint.value || !savingPerson.value) {
    // 필수 정보가 입력되지 않았을 때 경고 모달 표시
    showWarningModal.value = true;
  } else {
    // 새로운 적금 등록
    savings.push({
      name: savingName.value,
      basicRate: basicRate.value,
      extraRate: extraRate.value,
      point: savingPoint.value,
      person: savingPerson.value,
      period: period.value,
      maxAmount: maxAmount.value,
      image: "/public/safeimage.png"  // 기본 이미지 추가
    });
    isModalOpen.value = false;  // 모달 닫기
    isCompleted.value = true;  // 완료 메시지 모달 열기
  }
};

// 완료 모달 닫기
const closeCompleteModal = () => {
  isCompleted.value = false;
};

// 경고 모달 닫기
const closeWarningModal = () => {
  showWarningModal.value = false;
};

// 적금 삭제
const deleteSaving = (name) => {
  savings.value = savings.value.filter(saving => saving.name !== name);
};

// 직업 선택 처리
const handleJobSelection = (job) => {
  if (selectedJobs.value.length >= 4 && !selectedJobs.value.includes(job)) {
    return;
  }
  selectedJobs.value = selectedJobs.value.includes(job)
    ? selectedJobs.value.filter(j => j !== job)
    : [...selectedJobs.value, job];
};
</script>

<style scoped>
.delete-btn {
  border: none;
  color: white;
  padding: 5px 1px;
  width: 30px;
  cursor: pointer;
  border-radius: 3px;

}

.delete-btn:hover {
  background-color: #d9534f;
}

.card-custom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}

.card-custom img {
  width: 200px;
  /* 이미지 크기를 크게 설정 */
  height: 200px;
  object-fit: contain;
  margin-right: 20px;
}

.card-text-custom {
  font-size: 1.2rem;
  margin-left: auto;
  text-align: right;
  flex-grow: 1;
}

.container {
  background-color: #f8f9fa;
  padding: 2rem;
}

.section {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* 제목과 내용 사이의 간격을 줄이기 */
.section-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 10px;
  /* 국고 현황 아래 간격을 줄임 */
}

/* 카드들의 패딩을 줄이고 카드 사이의 간격을 조정 */
.card {
  background-color: white;
  border-radius: 10px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-safe {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  /* 카드 너비를 100%로 설정하여 그리드 셀에 맞추기 */
  max-width: 390px;
  /* 카드의 최대 너비를 설정 */
  padding: 15px;
  text-align: center;
  align-content: center;
  margin: 0;
  /* 좌우 여백 제거 */
}

/* 적금 이름 중앙 정렬 */
.card-safe h4 {
  text-align: center;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 한 줄에 3개의 카드 배치 */
  grid-gap: 20px;
  /* 카드 간의 간격을 20px로 설정 */
  padding: 20px;
  align-items: stretch;
  justify-items: center;
  /* 카드들이 중앙에 맞춰지도록 설정 */
}

/* 카드 안의 이미지와 텍스트 간의 간격 줄이기 */
.icon {
  width: 200px;
  /* 이미지를 크게 설정 */
  height: 200px;
  margin-right: 20px;
  /* 이미지가 텍스트 왼쪽에 위치하도록 */
}

p {
  font-size: 1rem;
  margin: 0;
}

.btn-primary {
  color: #00A3FF;
}

.description {
  text-align: left;
}

.description h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.description ul {
  list-style-type: none;
  padding: 0;
}

.description ul li {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.details-deposit {
  color: #166f06;
  /* 기간 색상 */
  margin-left: 5px;
  /* 간격 추가 */
  font-weight: normal;
  /* 일반 두께 */
}

.interest {
  font-size: 1em;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.interest-rate {
  color: #166f06;
  /* 이율 색상 */
  padding: 5px 10px;
  /* 패딩 추가 */
  border: 1px #166f06;
  /* 테두리 추가 */
  border-radius: 5px;
  /* 모서리 둥글게 */
  background-color: rgba(89, 255, 0, 0.1);
  /* 배경색 추가 */
  margin-right: 10px;
}

.interest-duration {
  color: #166f06;
  /* 기간 색상 */
  margin-left: 5px;
  /* 간격 추가 */
  font-weight: normal;
  /* 일반 두께 */
}

hr {
  margin: 20px 0;
}

.interest span {
  display: block;
  /* 각 span을 블록 요소로 설정 */
  margin-top: 5px;
  /* 간격 조정 */
}

.btn-primary {
  --ar-btn-hover-color: #00A3FF;
  --ar-btn-active-color: #fff;
  --ar-btn-hover-bg: #00A3FF;
  --ar-btn-active-bg: #00A3FF;
  --ar-btn-hover-border-color: #00A3FF;
  --ar-btn-active-border-color: #00A3FF;
  --ar-btn-bg: #00A3FF;
  --ar-btn-border-color: #00A3FF;
  --ar-btn-disabled-color: #fff;
  --ar-btn-disabled-bg: #00A3FF;
  --ar-btn-disabled-border-color: #00A3FF;
}

table {
  width: 100%;
  /* 표의 너비를 100%로 설정 */
  border-collapse: collapse;
  /* 테두리 간격 없애기 */
}

th,
td {
  padding: 10px;
  /* 셀 안쪽에 여백 추가 */
  text-align: left;
  /* 왼쪽 정렬 */
  vertical-align: top;
  /* 수직으로 위쪽 정렬 */
}

th {
  width: 150px;
  /* th(헤더 셀)의 너비를 고정 */
  white-space: nowrap;
  /* 텍스트 줄바꿈 방지 */
}

td {
  word-wrap: break-word;
  /* 내용이 길 경우 줄바꿈 */
}

.description table tr:first-child th,
.description table tr:first-child td {
  padding-top: 0;
  /* 상품특징 위의 padding을 0으로 설정 */
  margin-top: 0;
  /* margin-top도 0으로 설정 */
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  /* 배경 반투명 설정 */
}

.modal-content {
  background-color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 80%;
  /* 화면이 작은 경우에 대비한 최대 너비 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.full-width {
  grid-column: span 2;
}

label {
  margin-bottom: 5px;
  font-size: 14px;
}

input,
select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 120px;
}

.submit-button {
  background-color: #00a3ff;
  color: white;
  width: 100px;
  padding: 10px 0;
  /* 버튼 높이를 설정 */
  text-align: center;
  /* 텍스트를 가운데 정렬 */
}

.cancel-button {
  background-color: #ef5858;
  color: white;
  width: 100px;
  padding: 10px 0;
  /* 버튼 높이를 설정 */
  text-align: center;
  /* 텍스트를 가운데 정렬 */
}

.form-group div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: center;
  /* 버튼들을 양 끝으로 배치 */
  align-items: center;
  /* 버튼을 수직 중앙에 맞춤 */
  width: 100%;
  /* 부모 컨테이너의 전체 너비를 차지 */
  flex-direction: row;
  gap: 20px;
}

.multiselect {
  width: 100%;
  max-width: 400px;
}

.required-asterisk {
  color: red;
  /* 빨간색으로 표시 */
}

.complete-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.confirm-button {
  background-color: #00a3ff;
  color: white;
  width: 80px;
  padding: 10px 0;
  text-align: center;
  margin: 0 auto;
  /* 버튼을 중앙에 정렬하기 위해 margin을 auto로 설정 */
  margin-top: 20px;
  display: flex;
  justify-content: center;
  /* 텍스트를 중앙에 정렬 */
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.input-group-text {
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  border-radius: 0 4px 4px 0;
  /* 오른쪽 모서리만 둥글게 */
  margin-left: -1px;
  /* input과 겹쳐지지 않게 함 */
}

.no-bold {
  font-weight: normal;
  /* 폰트 두께를 기본(normal)으로 설정하여 볼드체를 제거 */
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>