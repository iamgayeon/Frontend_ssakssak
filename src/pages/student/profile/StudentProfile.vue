<template>
  <link rel="stylesheet" href="assets/css/theme.min.css">
  <link rel="stylesheet" href="assets/css/theme.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <div class="container py-3 mt-2 mt-lg-4 mb-lg-">
        <div class="row pt-sm-5 pt-lg-0">
          
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
                      
                      <div>
                        <h3 class="h5 mb-2 ms-5">박민주 학생
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
              <div class="row py-4 mb-2 mb-sm-3">
                <div class="col-md-6 mb-4 mb-md-0">
                  <table class="table mb-0">
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">생년월일</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">2015년 05월 28일</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">학생 정보</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">2학년 7반 1번</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">아이디</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">iamminju</td>
                    </tr>
                    <tr>
                      <td class="border-0 text-muted py-1 px-0">직업</td>
                      <td class="border-0 text-dark fw-medium py-1 ps-3">경찰</td>
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
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      totalChecks: 5, // 총 체크 아이콘 개수
      currentCheck: 1, // 현재 체크된 아이콘 개수
      attendanceIcons: [
        { checked: true },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false }, // 마지막 아이콘은 이미 체크되어 있음
      ],
    };
  },
  computed: {
    attendancePercentage() {
      return Math.round((this.currentCheck / this.totalChecks) * 100); // 100% 기준 계산
    }
  },
  methods: {
    // 출석 체크
    checkAttendance() {
    if (this.currentCheck < this.totalChecks) {
      // 아이콘을 업데이트
      this.attendanceIcons[this.currentCheck].checked = true;
      this.currentCheck++;

      // 출석이 모두 완료되면 알림 창 띄우기
      if (this.currentCheck === this.totalChecks) {
        alert("이번 주 5일 출석을 완료했어요!");
      }
    }
    }
    },

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