<template>
  <div class="login-page">
    <div class="header-back">
    </div>

      <!-- login-container 추가 -->
      <div class="login-container"> 
        <div class="login-card teacher-login" @mouseover="hoverCard('teacher')" @mouseleave="leaveCard('teacher')">
          <h3>선생님 로그인</h3>
          <p>회원가입 후 로그인 가능</p>
          <button class="login-button" @click="login('teacher')">선생님 로그인 →</button>
          <img src="@/assets/images/teacher.png" class="bottom-image1" alt="Teacher Image"/>
        </div>
        <div class="login-card student-login" @mouseover="hoverCard('student')" @mouseleave="leaveCard('student')">
          <h3>학생 로그인</h3>
          <p>선생님에게 안내받은 계정으로 로그인</p>
          <button class="login-button" @click="login('student')">학생 로그인 →</button>
          <img src="@/assets/images/student.png" class="bottom-image2" alt="Student Image"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardState: {
          teacher: false,
          student: false,
        },
        email: '', // 예시로 사용
        password: '', // 예시로 사용
      };
    },
    methods: {
  login(userType) {
    if (userType === 'teacher') {
      this.$router.push('/teacher/auth/login'); // TeacherHome.vue 경로로 이동
    } else if (userType === 'student') {
      this.$router.push('/student/auth/login'); // 학생 전용 로그인 페이지로 이동
    } else {
      alert('로그인 정보가 일치하지 않습니다.');
    }
    },


      hoverCard(type) {
        this.cardState[type] = true;
      },
      leaveCard(type) {
        this.cardState[type] = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* 전체 페이지 설정 */



  .header-back {
    padding-top: 15px;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 아이콘과 메시지를 양 끝에 배치 */
  }
  
  /* 헤더바 설정 */
  .header-bar {
    display: flex;
    width: 1200px; /* 크기를 줄임 */
    height: 50px;
    border: 2px solid #8e9093;
    border-radius: 25px;
    padding: 0 10px;
    z-index: 100;
    justify-content: center; /* 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    margin-right: 20px;
  }
  
  /* 네비게이션 버튼 아이콘 간격 설정 */
  .navigation-buttons {
    display: flex;
    gap: 30px;
    color: #8e9093;
    margin-left: 50px;
    align-items: center; /* 아이콘들을 수직으로 중앙 정렬 */
  }
  
  .navigation-buttons i {
    font-size: 18px;
    cursor: pointer;
  }
  
  /* 주소창 스타일 */
  .address-bar {
    display: flex;
    align-items: center;
    justify-content: flex; /* 오른쪽에 배치 */
    flex-grow: 1;
  }
  
  .address-icon {
    font-size: 18px;
    margin-right: 10px;
  }
  .address-text {
    font-size: 16px;
    font-weight: bold; /* 글씨를 굵게 유지 */
    color: #485149;
    text-align: left; /* 글씨를 왼쪽으로 정렬 */
  }

  /* 가로로 카드 배치 */
  .login-container {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;
  }
  
  /* 각 로그인 카드 */
  .login-card {
    width: 55%;
    background-color: #ffffff;
    border-radius: 15px;
    text-align: left;
    padding: 40px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 600px;
    position: relative;
  }
  
  .teacher-login {
    border-left: 4px solid #00a3ff;
  }
  
  .student-login {
    border-left: 4px solid #EF5858;
  }
  
  .teacher-login:hover, .student-login:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  /* 카드 텍스트 스타일 */
  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  /* 버튼 스타일 */
  .login-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #00a3ff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #003d99;
  }
  
  .student-login .login-button {
    background-color: #EF5858;
  }
  
  .student-login .login-button:hover {
    background-color: #cc5200;
  }
  
  /* 하단 이미지 스타일 */
  .bottom-image1 {
    position: absolute;
    bottom: -30px;
    right: -30px;
    width: 400px;
    height: 300px;
  }

  .bottom-image2 {
    position: absolute;
    bottom: -50px;
    right: -90px;
    width: 510px;
    height: 350px;
  }
  
  /* 미디어 쿼리: 작은 화면에서는 세로로 배치 */
  @media (max-width: 768px) {
    .login-container {
      flex-direction: column;
    }
  
    .login-card {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  </style>