<template>
  <footer class="footer">
    <div class="container footer-content">
      <!-- 왼쪽: 저작권 정보 -->
      <div class="footer-left">
        <div class="left-text text-white-50">상호 : (주)금융싹싹 | 대표자명 : 이상엽</div>
        <div class="left-text text-white-50">사업자등록번호 : 01-561-5533</div>
        <div class="left-text text-white-50">연락처 : 123-4567-8901 | 팩스 : 000-0000-0000 | 이메일 : SSAC@Ssac.com</div>
        <div class="left-text text-white-50">주소 : 서울특별시 광진구 능동로 195-16 6층(군자동)</div>
        <hr class="text-white-50">
        <div class="left-text2 text-white-50">Copyright® 금융싹싹</div>
      </div>

      <!-- 가운데: 로고 및 네비게이션 -->
      <div class="footer-center">
        <nav>
          <ul class="footer-nav">
            <li><a class="text-white-50" href="/teacher/home">Home</a></li>
            <li><a class="text-white-50" href="/teacher/class">Class</a></li>
            <li><a class="text-white-50" href="/teacher/student">Student</a></li>
            <li><a class="text-white-50" href="/teacher/store">Store</a></li>
            <li><a class="text-white-50" href="/teacher/bank">Bank</a></li>
            <li><a class="text-white-50" href="/teacher/stock">Stock</a></li>
            <li><a class="text-white-50" href="/teacher/reward">Reward</a></li>
          </ul>
        </nav>
      </div>
      
      <!-- 오른쪽: 빈 공간 -->
      <div class="footer-right">
        <a href="/teacher/home"><i class="icon bi bi-house-fill"></i></a>
        <a href="https://x.com/?lang=ko"><i class="icon bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/"><i class="icon bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338586&extra_1=s%7Cc%7C547419126947%7Ce%7Cinstagram%20c%7C&placement=&creative=547419126947&keyword=instagram%20c&partner_id=googlesem&extra_2=campaignid%3D13530338586%26adgroupid%3D126262419014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618852491%26loc_physical_ms%3D9197309%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=Cj0KCQjwr9m3BhDHARIsANut04Zf9hWkJ1BKDMGs75D48eO14tLdyzRrEd-4j_tLByB4acdv8Pz-7LwaAuE7EALw_wcB"><i class="icon bi bi-instagram"></i></a>
      </div>

    </div>
  </footer>
</template>

<script setup>
// 여기에 필요한 스크립트를 작성하세요 (특별한 스크립트가 없다면 비워둡니다)
</script>

<style scoped>

.footer {
  background-color: #473221; /* 배경 색상 */
  padding: 10px 10px; /* 위아래 여백 */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  border-top: 1px solid #e5e5e5; /* 상단 경계선 */
  color: #fff;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* 너비 제한 */
  padding-top:10px;
  padding-bottom: 10px;
  margin: 0 auto; /* 가운데 정렬 */
}

.left-text{
  padding-bottom: 5px;
  font-size: 12px;
}

.left-text2{
  padding-top:10px;
  font-size: 12px;
}

.footer-left {
  font-size: 14px;
  color: #6c757d; /* 회색 텍스트 */
}

.footer-center {
  text-align: left;
  font-size:12px;
  padding-right:300px;
}

.footer-logo {
  height: 40px; /* 로고 높이 설정 */
}

.footer-nav {
  list-style: none; /* 기본 목록 스타일 제거 */
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 두 개의 열로 나누기 */
  gap: 10px; /* 각 항목 간격 설정 */
}

.footer-nav li {
  margin-bottom: 4px; /* 각 항목 간격 설정 */
}

.footer-nav li a {
  text-decoration: none; /* 밑줄 제거 */
  color: #6c757d; /* 텍스트 색상 */
  font-size: 14px;
}

.footer-nav li a:hover {
  text-decoration: underline; /* 마우스 올렸을 때 밑줄 추가 */
}

.icon{
  padding-left: 20px;
  font-size: 24px;
  color: #A29990;
  margin-bottom: 10px;
}
</style>
