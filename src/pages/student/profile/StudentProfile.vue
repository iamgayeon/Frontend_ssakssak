<template>
  <link rel="stylesheet" href="assets/css/theme.min.css">
  <link rel="stylesheet" href="assets/css/theme.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <div class="container py-5 mt-2 mt-lg-5 mb-lg-4 my-xl-5">
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
                  <div class="d-flex justify-content-between fs-sm pb-1 mb-2">이번주 출석률<strong class="ms-2">60%</strong></div>
                  <div class="progress" style="height: 5px;">
                    <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
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
  
          <!-- 추가된 카드 섹션 -->
          <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
            <!-- 보유 적금 -->
            <section class="col">
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
                    <p class="mb-0">하루에 100씨드씩 2주간 납부하고 있어요</p>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- 보유 주식 -->
            <section class="col">
              <div class="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                <div class="card-body">
                  <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
                    <i class="ai-bar-chart-2 text-primary lead pe-1 me-2"></i>
                    <h2 class="h4 mb-0">보유 주식</h2>
                  </div>
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
                    <span class="text-muted">현재 평가액</span>
                    <span class="text-dark fw-bold">3200 씨드</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
                    <span class="text-muted">수익률</span>
                    <span class="text-danger fw-bold">23%</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
                    <span class="text-muted">보유수량</span>
                    <span class="text-dark fw-bold">111주</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-3">
                    <span class="text-muted">평균매수가</span>
                    <span class="text-dark fw-bold">120 씨드</span>
                  </div>
                </div>
              </div>
            </section>

           <!-- 쿠폰 사용 -->
           <section class="col">
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
          
                  <!-- 쿠폰 카드 -->
                  <div class="coupon-card bg-white text-dark rounded position-relative" 
                       style="flex-grow:1; max-width: 280px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 16px;">
          
                    <!-- 상단 하늘색 영역 -->
                    <div style="background-color: #f2f7fa; padding: 30px 0; border-radius: 16px 16px 0 0;"></div>
          
                    <!-- 배지 (개수) -->
                    <span class="badge bg-light text-dark position-absolute top-0 end-0 m-2" style="font-size: 0.9rem; padding: 10px; border-radius: 50%;">{{ coupons[currentIndex].count }}개</span>
          
                    <!-- 쿠폰 본문 (빨간색 영역) -->
                    <div class="text-white py-4 px-4" style="background-color: #ff6940; border-radius: 0 0 16px 16px; line-height: 1.4;">
                      <h3 class="h6 fw-bold mb-3 text-center text-white">{{ coupons[currentIndex].title }}</h3>
          
                      <!-- 쿠폰 사용 버튼 -->
                      <div class="text-center mt-3">
                        <button class="btn btn-light" 
                                style="background-color: #FFA726; border: none; color: white; padding: 10px 20px; font-size: 1rem; border-radius: 12px;" 
                                @click="useCoupon(currentIndex)">쿠폰 사용</button>
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      coupons: [
        { count: 2, title: '일기 1회 면제 쿠폰', description: '원하는 날 하루 일기 쓰기를 쉬어도 괜찮아요!' },
        { count: 1, title: '10분 노래듣기 쿠폰', description: '점심 시간에 원하는 노래를 들을 수 있어요!' },
        { count: 1, title: '점심 먼저 먹기 쿠폰', description: '점심 식사를 기다리지 않고 먼저 먹을 수 있어요!' },
      ],
      currentIndex: 0, // 현재 쿠폰의 인덱스
    };
  },
  methods: {
    // 다음 쿠폰으로 이동
    nextCoupon() {
      if (this.currentIndex < this.coupons.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // 마지막 쿠폰이면 처음으로 돌아감
      }
    },
    // 이전 쿠폰으로 이동
    prevCoupon() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.coupons.length - 1; // 첫 번째 쿠폰이면 마지막으로 이동
      }
    },
    // 쿠폰 사용
    useCoupon(index) {
      if (this.coupons[index].count > 0) {
        this.coupons[index].count--;
        alert(`${this.coupons[index].title}을(를) 사용했습니다.`);
      } else {
        alert('더 이상 사용 가능한 쿠폰이 없습니다.');
      }
    }
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
</style>