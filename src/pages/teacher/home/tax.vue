<template>
  <div class="card-container">
    <div class="card">
        <div class="card-img-overlay">
          <div class="text-white fw-semi-bold">
            <div class="tax-title">주별 단위로 쌓인 세금을<br> 확인할 수 있습니다.</div>
          </div>
          <div class="alert alert-success d-flex mb-0" style="margin-top: 10px; margin-left:40px">
            <i class="ai-octagon-alert fs-xl me-2"></i>
            <p class="taxAlert mb-0">세금은 국고로 편입됩니다.</p>
          </div>

          <div class="tax-footer" style="margin-top : 15px">
            <button type="button" class="btn btn-warning" style="margin-right : 15px">세금 확인</button>
            <button type="button" class="btn btn-warning">세율 변경</button>
          </div>
        </div>
        </div>

    <div class="card" id="scard">
      <div class="card-img-overlay">
        <div class="text-blue fw-semi-bold">
          <div class="saving-title" style="margin-top:170px; margin-left:70px">예적금상품을 등록/관리하여 학생들의 씨드활동을 유도하세요.</div>
        </div>

        <div class="saving-footer" style="margin-top : 40px">
          <button type="button" class="btn btn-primary" id="savingbtn" style="margin-right : 15px">세금 확인</button>
          <button type="button" class="btn btn-danger" id="saving2btn">세율 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 카드 사이에 간격 추가 */
  gap: 20px; /* 카드 사이의 여백 설정 */
  width: 100%; /* 컨테이너 전체 너비 */
}

.card {
  width: 48%; /* 각 카드의 너비를 48%로 설정하여 두 개가 한 줄에 맞게 함 */
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
  background-color: #00A3FF;
}

/* 첫 번째 카드 배경 이미지 */
.card:nth-child(1) {
  background-image: url('@/assets/images/taxImage2.png'); /* 첫 번째 카드 배경 */
}

/* 두 번째 카드 배경 이미지 */
.card:nth-child(2) {
  background-image: url('@/assets/images/savingImage.png'); /* 두 번째 카드 배경 */
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
  background-color: #BCEAFF;
  padding-right: 5px;
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
</style>