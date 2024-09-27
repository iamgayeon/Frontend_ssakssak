<template>
    <div class="login-container">
      <div class="login-card student-login" @click="login('student')">
        <div class="icon">
          <!-- 학생 전용 아이콘 -->
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 576q-75 0-145-20.5T205 505q-9-4-14.5-11.5T185 477q0-9 5.5-16t14.5-11q55-22 125-42.5T480 386q75 0 145 20.5T755 449q9 4 14.5 11t5.5 16q0 9-5.5 16t-14.5 11q-55 22-125 42.5T480 576Zm0-60q47 0 94.5-6.5T660 487q-41-12-88.5-18.5T480 462q-47 0-94.5 6.5T300 487q41 12 88.5 18.5T480 516Zm0 420q-2 0-3.5-.5T474 935q-86-18-143-98.5T274 635q0-90 58-169t148-103q7-2 13.5 2t6.5 10v252q0 15 10 25t25 10q15 0 25-10t10-25V375q0-8 6.5-12t13.5-2q90 29 148 108t58 169q0 89-57 169t-144 98q-1 1-2.5 1.5T480 936Zm0-396Zm-60 321q41-23 60-61.5t19-76.5q0-41-19-79t-60-60q-41 23-60 61t-19 78q0 41 19 79.5t60 60.5Zm120 0q41-23 60-60.5t19-79.5q0-42-19-78t-60-61q-41 23-60 60t-19 79q0 42 19 76.5t60 61.5ZM480 576Z"/></svg>
        </div>
        <h2>학생 전용 로그인</h2>
      </div>
  
      <div class="login-card teacher-login" @click="login('teacher')">
        <div class="icon">
          <!-- 선생님 전용 아이콘 -->
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M423 976q-8 0-15-3.5T395 960L126 691q-19-19-28-43t-9-51V289q0-24 17.5-41.5T147 230h666q24 0 41.5 17.5T872 289v308q0 27-9 51t-28 43L580 960q-6 6-13 9.5t-15 3.5H423Zm39-126 292-292H206l292 292ZM147 566v73-350 277Zm333 230Zm0-150Zm0 34 88-88H392l88 88Z"/></svg>
        </div>
        <h2>선생님 전용 로그인</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login(userType) {
        if (userType === 'student') {
          alert("학생 전용 로그인 클릭됨");
        } else if (userType === 'teacher') {
          alert("선생님 전용 로그인 클릭됨");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }
  
  .login-card {
    width: 300px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .login-card:hover {
    transform: translateY(-10px);
  }
  
  .student-login {
    background-color: #FBB03B;
  }
  
  .teacher-login {
    background-color: #4DA6FF;
  }
  
  .icon {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 24px;
    color: white;
    text-align: center;
  }
  </style>