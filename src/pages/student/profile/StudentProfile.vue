<template>
  <link rel="stylesheet" href="assets/css/theme.min.css">
  <link rel="stylesheet" href="assets/css/theme.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <div class="container py-3 mt-2 mt-lg-4 mb-lg-">
            <!-- Basic info -->
            <section class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
              <div class="card-body">
                <div class="d-flex align-items-center mt-0 pb-2 mb-0 mb-lg-1 mb-xl-1">
                  <i class="ai-user text-primary lead pe-1 me-2"></i>
                  <h2 class="h4 mb-0">내 프로필</h2>
                </div>
              <div class="d-md-flex align-items-center">
                <div class="d-sm-flex align-items-center">
                  <div class="rounded-circle bg-size-cover bg-position-center flex-shrink-0" 
                       style="width: 80px; height: 80px; background-image: url(assets/img/avatar/02.jpg);">
                  </div>
                  <div class="d-sm-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <!-- 이미지 크기 줄이고 왼쪽으로 이동시키기 -->
                      <img src="@/assets/images/iamminju.png" style="width: 140px; height: 140px; margin-right: 10px; margin-left: -80px;">
                      
                      <div v-if="studentProfile">
                        <h3 class="h5 mb-2 ms-5">{{ studentProfile.stdName }} 학생
                          <i class="ai-circle-check-filled fs-base text-success ms-1"></i>
                        </h3>
                        <div class="text-muted fw-medium d-flex flex-wrap flex-sm-nowrap align-items-center">
                          <!-- 멀티초등학교 앞에 여백 추가 -->
                          <div class="d-flex align-items-center text-nowrap">
                            <i class="ai-map-pin me1 ms-5"></i>멀티초등학교
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-100 pt-3 pt-md-0 ms-md-auto" style="max-width: 212px;">
                  <div style="max-width: 212px; margin-left: auto;">
                    <div class="d-flex justify-content-between fs-sm pb-1 mb-2">
                      이번주 출석률
                      <strong class="ms-2">{{ attendancePercentage }}%</strong>
                    </div>
                    <div class="progress" style="height: 5px; background-color: #e9ecef;">
                      <div class="progress-bar" role="progressbar" :style="{ width: attendancePercentage + '%', backgroundColor: '#FAB809' }" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                
                    <!-- 출석 체크 아이콘 -->
                    <div class="d-flex justify-content-between mt-3">
                      <i
                        v-for="(icon, index) in attendanceIcons"
                        :key="index"
                        class="bi bi-check-circle"
                        :style="{ fontSize: '2rem', color: icon.checked ? '#FAB809' : '#d3d3d3' }"
                      ></i>
                    </div>
                
                    <!-- 출석 체크하기 버튼 -->
                    <button @click="checkAttendance" class="btn btn-warning mt-3" style="width: 100%; border-radius: 12px; font-size: 16px;">출석 체크 하기</button>
                  </div>
                </div>
              </div>
              <div class="row py-4 mb-2 mb-sm-3" v-if="studentProfile">
                <div class="col-md-6 mb-4 mb-md-0">
                  <table class="table mb-0">
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">생년월일</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">{{ studentProfile.stdBirth }}</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">학생 정보</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">2학년 7반 1번</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">아이디</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">{{ studentProfile.stdAccount }}</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">직업</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">{{ getJobName(studentProfile.jobId) }}</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">보유 씨드</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">{{ studentProfile.seed }}</td>
                    </tr>
                  </table>
                </div>
               
              </div>
              <div class="alert alert-info d-flex mb-0" role="alert">
                <i class="ai-circle-info fs-xl"></i>
                <div class="ps-2">정보 수정이 필요할 경우 선생님께 문의하세요.</div>
              </div>
           </div>
    </section>
    <div class="row row-cols-1 row-cols-md-3 g-3 mb-4" style="margin-top: -10px;">
      <!-- 보유 적금 -->
      <section class="col-4">
        <div class="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <div class="card-body">
            <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
              <i class="ai-archive text-primary lead pe-1 me-2"></i>
              <h2 class="h4 mb-0">보유 적금</h2>
            </div>
            <div class="d-flex align-items-center pb-1 mb-4">
              <h3 class="h6 mb-0 me-3">새싹 적금</h3>
              <span class="badge bg-faded-primary text-primary">납입중</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>현재 10회중 8회 납부했어요!</span>
              <span>80%</span>
            </div>
            <div class="progress mb-3" style="height: 10px;">
              <div class="progress-bar" role="progressbar" style="width: 80%; background-color: #f1c40f;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="alert alert-danger d-flex mb-0" style="margin-top: 30px;">
              <i class="ai-octagon-alert fs-xl me-2"></i>
              <p class="mb-0">하루에 100씨드씩 2주간 납부중입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 보유 주식 -->
      <section class="col-4">
        <div class="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <div class="card-body">
            <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
              <i class="ai-bar-chart-2 text-primary lead pe-1 me-2"></i>
              <h2 class="h4 mb-0">보유 주식</h2>
            </div>
    
            <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
              <span class="text-muted">현재 평가액</span>
              <span class="text-dark fw-bold">{{ holdingStock.currentValue }} 씨드</span>
            </div>
    
            <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
              <span class="text-muted">수익률</span>
              <span :class="{'text-danger': holdingStock.profitRate < 0, 'text-success': holdingStock.profitRate >= 0}" class="fw-bold">
                {{ holdingStock.profitRate }}%
              </span>
            </div>
    
            <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
              <span class="text-muted">보유수량</span>
              <span class="text-dark fw-bold">{{ holdingStock.totalQuantity }} 주</span>
            </div>
    
            <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
              <span class="text-muted">평균매수가</span>
              <span class="text-dark fw-bold">{{ holdingStock.averagePrice }} 씨드</span>
            </div>
          </div>
        </div>
      </section>
     <!-- 쿠폰 사용 -->
     <section class="col-4">
      <div class="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        <div class="card-body">
          <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
            <i class="ai-note text-primary lead pe-1 me-2"></i>
            <h2 class="h4 mb-0">보유 쿠폰</h2>
          </div>
  
          <!-- 쿠폰 카드와 아이콘 버튼을 같은 라인에 배치 -->
          <div class="d-flex justify-content-center align-items-center">
            <!-- 좌측 아이콘 버튼 -->
            <i class="bi bi-chevron-left" @click="prevCoupon" style="font-size: 32px; color: #d3d3d3; cursor: pointer; margin-right: 10px;"></i>
  
            <!-- 쿠폰 카드: 데이터가 있을 때만 렌더링 -->
            <div v-if="studentCoupons.length > 0 && studentCoupons[currentIndex]" class="coupon-card bg-white text-dark rounded position-relative" 
                 style="flex-grow:1; max-width: 280px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 16px;">
  
              <!-- 상단 하늘색 영역 -->
              <div style="background-color: #f2f7fa; padding: 30px 0; border-radius: 16px 16px 0 0;"></div>
  
              <!-- 배지 (개수) -->
              <span class="badge bg-light text-dark position-absolute top-0 end-0 m-2" style="font-size: 0.9rem; padding: 10px; border-radius: 50%;">{{ studentCoupons[currentIndex].cpQuantity }}개</span>
  
              <!-- 쿠폰 본문 (빨간색 영역) -->
              <div class="text-white py-4 px-4" style="background-color: #ff6940; border-radius: 0 0 16px 16px; line-height: 1.4;">
                <h3 class="h6 fw-bold mb-3 text-center text-white">{{ studentCoupons[currentIndex].cpName }}</h3>
  
                <!-- 쿠폰 사용 버튼 -->
                <div class="text-center mt-3">
                  <button class="btn btn-light" 
                          style="background-color: #FFA726; border: none; color: white; padding: 10px 20px; font-size: 1rem; border-radius: 12px;" 
                          @click="showCustomAlert(currentIndex)">쿠폰 사용</button>
                </div>
              </div>
            </div>
  
            <!-- 우측 아이콘 버튼 -->
            <i class="bi bi-chevron-right" @click="nextCoupon" style="font-size: 32px; color: #d3d3d3; cursor: pointer; margin-left: 10px;"></i>
          </div>
        </div>
      </div>
    </section>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import studentProfileApi from '@/api/studentProfileApi.js';
import { useCounterStore } from '@/stores/couter';
import api from "@/api/studentStockApi.js";
import couponApi from '@/api/studentStoreApi.js';
import Swal from 'sweetalert2';

const showCustomAlert = (index) => {
  if (studentCoupons.value[index].cpQuantity > 0) {
    studentCoupons.value[index].cpQuantity--;

    // SweetAlert2로 커스텀 알림 표시
    Swal.fire({
      title: `${studentCoupons.value[index].cpName} 사용 완료!`,
      text: `${studentCoupons.value[index].cpQuantity}개 남았습니다.`,
      icon: 'success',
      confirmButtonText: '확인',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.webp")
        left top
        no-repeat
      `,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'  // 애니메이션 효과
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'  // 애니메이션 효과
      }
    });
  } else {
    // SweetAlert2로 쿠폰 부족 알림 표시
    Swal.fire({
      title: '쿠폰 부족!',
      text: '더 이상 사용 가능한 쿠폰이 없습니다.',
      icon: 'error',
      confirmButtonText: '확인',
      showClass: {
        popup: 'animate__animated animate__shakeX'  // 애니메이션 효과
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'  // 애니메이션 효과
      }
    });
  }
};

const store = useCounterStore();
const jobs = ref([...store.jobs]);
const studentCoupons = ref([]);
const currentIndex = ref(0);

// 상태 관리 (HoldingStockDTO에 맞는 변수 설정)
const holdingStock = ref({
  stdId: 0,
  totalQuantity: 0,
  totalInvestment: 0,
  averagePrice: 0,
  currentValue: 0,
  profitLoss: 0,
  profitRate: 0,
  seed: 0
});


const stocks = ref([]); // 주식 데이터를 저장할 상태

const fetchMyStock = async () => {
  try {
    const data = await api.getMyStock(); // API 호출
    holdingStock.value = data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
  }
};

const getJobName = (jobId) => {
    const job = jobs.value.find(job => job.jno === jobId);
    return job ? jobs.name : '회사원';
};
// 학생 프로필 데이터를 저장할 ref
const studentProfile = ref(null);

// 학생 프로필 데이터를 가져오는 함수
const fetchStudentProfile = async (stdId) => {
  try {
    const data = await studentProfileApi.getStudentProfile(stdId);
    studentProfile.value = data;
  } catch (error) {
    console.error("Failed to fetch student profile:", error);
  }
};


onMounted(() => {
  fetchStudentProfile(1);
  fetchMyStock();
  fetchStudentCoupons(1);});

// 상태 관리
const totalChecks = ref(5); // 총 체크 아이콘 개수
const currentCheck = ref(1); // 현재 체크된 아이콘 개수
const attendanceIcons = ref([
  { checked: true },
  { checked: false },
  { checked: false },
  { checked: false },
  { checked: false }
]);

// const coupons = ref([
//   { count: 2, title: '일기 1회 면제 쿠폰', description: '원하는 날 하루 일기 쓰기를 쉬어도 괜찮아요!' },
//   { count: 1, title: '10분 노래듣기 쿠폰', description: '점심 시간에 원하는 노래를 들을 수 있어요!' },
//   { count: 1, title: '점심 먼저 먹기 쿠폰', description: '점심 식사를 기다리지 않고 먼저 먹을 수 있어요!' }
// ]);


// 출석 체크 비율 계산
const attendancePercentage = computed(() => {
  return Math.round((currentCheck.value / totalChecks.value) * 100);
});

// 출석 체크 함수
const checkAttendance = () => {
  if (currentCheck.value < totalChecks.value) {
    attendanceIcons.value[currentCheck.value].checked = true;
    currentCheck.value++;

    if (currentCheck.value === totalChecks.value) {
      alert("이번 주 5일 출석을 완료했어요!");
    }
  }
};

// API 호출 함수로 쿠폰 정보 가져오기
// API 호출 함수로 쿠폰 정보 가져오기
const fetchStudentCoupons = async (stdId) => {
  try {
    const data = await couponApi.getStudentCoupons(stdId);
    studentCoupons.value = data;
  } catch (error) {
    console.error('Error fetching coupons:', error);
  }
};

// 다음 쿠폰으로 이동
const nextCoupon = () => {
  if (currentIndex.value < studentCoupons.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

// 이전 쿠폰으로 이동
const prevCoupon = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = studentCoupons.value.length - 1;
  }
};

// 쿠폰 사용 함수
const useCoupon = (index) => {
  if (studentCoupons.value[index].cpQuantity > 0) {
    studentCoupons.value[index].cpQuantity--;
    alert(`${studentCoupons.value[index].cpName}을(를) 사용했습니다.`);
  } else {
    alert('더 이상 사용 가능한 쿠폰이 없습니다.');
  }
};

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
.progress-bar {
  transition: width 0.3s ease;
}

.attendance-container {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  background-image: url('@/assets/images/sketch.png'); /* 경로에 맞게 수정 */
  background-size: cover; /* 배경 이미지가 컨테이너 크기에 맞춰지도록 설정 */
  background-position: center; /* 배경 이미지를 가운데 정렬 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
}

</style>