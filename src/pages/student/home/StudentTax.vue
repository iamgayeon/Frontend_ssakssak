<template>
    <div class="card-container">
      <div class="card">
        <div class="card-img-overlay">
          <div class="text-white fw-semi-bold">
            <div class="tax-title">
                <span>
                <span class="highlight-seed" style="margin-left:40px; margin-top:55px;">
                  <img src="@/assets/images/sprout.png" class="seed-icon" alt="씨드 이미지">200씨드
                </span>
              </span>
            </div>
          </div>

          <!-- 흰색 칸에 텍스트 -->
          <div class="text-on-white-box">
            <p class="taxAlert mb-0"><i class="fa fa-check"></i> 주급에 대한 세율은 3%입니다.</p>
          </div>
        </div>
      </div>
  
      <router-link to="/student/bank" class="card">
        <div class="card-img-overlay">
         
        </div>
      </router-link>
    </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.card {
  width: 48%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0px;
}

.card:nth-child(1) {
  background-image: url('@/assets/images/seedtaxcheck.jpg');
}

.card:nth-child(2) {
  background-image: url('@/assets/images/finproduct.jpg');
}

.tax-title {
  padding-top: 20px;
  color: white;
  font-size: 18px;
  margin-top: 120px;
  margin-left: 45px;
}

.highlight-seed {
  font-size: 24px; 
  color: #fab809;
  padding: 5px 10px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
}

.seed-icon {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

/* 흰색 칸에 텍스트 배치 */
.text-on-white-box {
    position: absolute;
    top: 250px; /* 흰색 칸의 위치에 맞춰서 조정 */
    width: 350px; /* 흰색 칸의 너비에 맞춤 */
    height: auto; /* 높이를 자동으로 설정하여 텍스트에 맞게 조정 */
    background-color: rgba(255, 255, 255, 0); /* 배경을 투명하게 */
    text-align: center; /* 텍스트 가운데 정렬 */
    overflow: visible; /* 텍스트가 잘리지 않도록 설정 */
  }
  
  .taxAlert {
    color: #00a3ff; /* 텍스트 색상 설정 */
    font-size: 16px;
    margin-right:30px; /* 여백 제거 */
    padding: 63px 0; /* 위아래 여백을 약간 추가 */
  }

</style>