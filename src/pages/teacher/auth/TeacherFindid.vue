<template>
    <div class="login-page">
      <!-- 왼쪽 금융싹싹 소개 섹션 -->
      <div class="intro-section">
        <img src="@/assets/images/9.png" alt="금융싹싹 로고" class="logo"/>
        <h1>금융싹싹에 오신 걸 환영합니다</h1>
        <p>금융싹싹으로 학생들에게 쉽고 재미있는 금융 교육을 제공하세요! <br/>
           적금 상품 비교 및 가입, 주식 거래 등 실생활에서 필요한 금융 서비스를<br>직접 경험하고 배울 수 있습니다.
        </p>
      </div>
  
      <!-- 로그인 섹션 -->
      <div class="login-section">
        <h2>아이디 찾기</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="id">이메일</label>
            <input type="text" v-model="id" placeholder="가입한 이메일을 입력하세요" required>
            <a @click="goToFindPw">비밀번호 재설정</a>
          </div>
          <button type="submit" class="login-button">아이디 찾기</button>
          <div v-if="loginError" class="error-message">해당 이메일로 가입된 정보가 없습니다.</div>
        </form>
      </div>
  
      <!-- 모달 창 -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h4>아이디 찾기 결과</h4>
          <p>입력하신 이메일로 등록된 아이디는 다음과 같습니다:</p>
          <p class="found-id">{{ foundId }}</p>
          <button class="close-button" @click="closeModal">닫기</button>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
    data() {
      return {
        id: '',
        loginError: false,
        showModal: false,
        foundId: '', // 모달 창에서 표시할 아이디
      };
    },
    methods: {
      login() {
        console.log('로그인 시도');
        if (this.id === 'example@example.com') {  // 가입한 이메일이 존재하는 경우
          this.foundId = 'example'; // 예시 아이디
          this.showModal = true; // 모달 창 열기
          this.loginError = false;
        } else {
          this.loginError = true;
        }
      },
      closeModal() {
        this.showModal = false; // 모달 창 닫기
      },
      goToFindPw() {
        this.$router.push('/teacher/auth/findpw');
      }
    }
  };
</script>
  
<style scoped>
.login-page {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #f9f9f9;
}

.intro-section {
  background-color: #00A3FF;
  color: white;
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 500px;
  margin-bottom: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ffffff;
}
h4{
    font-size: 20px;
    margin-top: 30px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  color: white;
}

h5 {
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  max-width: 80%;
  color: white;
}

.login-section {
  width: 50%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

a {
  font-size: 146x;
  color: #00A3FF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 15px;
  background-color: #00A3FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #00A3FF;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

/* 모달 창 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 300px; /* 모달 창 크기를 줄임 */
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

.modal-content h3 {
  margin-bottom: 10px;
}

.modal-content p {
    margin-bottom: 10px;
}

.found-id {
  font-size: 18px;
  font-weight: bold;
  color: #00A3FF;
  margin-bottom: 1000px;
}

.close-button {
  background-color: #00A3FF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px; /* 닫기 버튼 크기 줄임 */
  align-self: center;
  margin-top: 50px;
}

.close-button:hover {
  background-color: #007ACC;
}
</style>