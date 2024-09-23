<template>
    <div class="container">
      <!-- 왼쪽 카드: 금융 테스트 -->
      <div class="card">
        <div class="header">
          금융 테스트로<br />알아보는 나만의 티니핑은?
        </div>
        <div class="image-container">
          <img src="@/assets/images/tinyping2.png" alt="티니핑 캐릭터들" class="characters"/>
        </div>
        <div class="button-container">
          <button @click="goToTest">테스트 하러 가기</button>
        </div>
      </div>
  
      <!-- 오른쪽 카드: 오늘의 금융퀴즈 -->
      <div class="card">
        <div class="header">오늘의 금융퀴즈</div>
        <div class="quiz-body">
          <div class="quiz-question">
            <div class="quiz-label">문제</div>
            <div class="quiz-text">{{ currentQuiz.question }}</div>
          </div>
          <div class="quiz-options">
            <button v-for="(option, index) in currentQuiz.options" :key="index" class="quiz-option">{{ option }}</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

import { useRouter } from 'vue-router';
const router = useRouter();

  export default {
    data() {
      return {
        quizzes: [
          {
            question: '은행에서 저축을 통해 무엇을 받을 수 있나요?',
            options: ['할인', '이자', '수수료', '대출']
          },
          {
            question: '금리가 상승하면 어떤 영향이 있을까요?',
            options: ['대출 이자 상승', '저축 이자 하락', '물가 상승', '소득 감소']
          },
          {
            question: '신용카드를 사용할 때 주의해야 할 점은 무엇인가요?',
            options: ['적립금 사용', '연체 방지', '할인 혜택 확인', '포인트 적립']
          }
        ],
        currentQuiz: {}
      };
    },
    methods: {
      goToTest() {
        // 테스트 페이지로 이동하는 함수
        this.$router.push('/test');
      },
      getQuizOfTheDay() {
        // 오늘 날짜에 맞는 퀴즈를 설정 (퀴즈가 매일 바뀌도록)
        const dayIndex = new Date().getDate() % this.quizzes.length;
        this.currentQuiz = this.quizzes[dayIndex];
      }
    },
    created() {
      // 컴포넌트가 생성될 때 퀴즈를 설정
      this.getQuizOfTheDay();
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-top: 40px;
  }
  
  /* 카드 기본 스타일 */
  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 500px;
    padding: 20px;
    text-align: center;
  }
  
  /* 헤더 스타일 통일 */
  .header, .quiz-header {
    background-color: #FFCF45;
    height: 100px;
    border-radius: 10px;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* 이미지 컨테이너 */

  
  .characters {
    width: 80%;
    height: auto;
  }
  
  /* 버튼 스타일 */
  .button-container {
    margin-top: 20px;
  }
  
  button {
    background-color: #5DA6FE;
    color: #fff;
    font-size: 1.1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    width: 100%; /* 버튼 크기 통일 */
    max-width: 300px;
    margin: 0 auto;
  }
  
  button:hover {
    background-color: #36a93a;
  }
  
  /* 퀴즈 스타일 */
  .quiz-body {
    margin-top: 20px;
  }
  
  .quiz-question {
    background-color: #DCF0FB;
    border-radius: 10px;
    padding: 15px;
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  .quiz-label {
    background-color: #f7c642;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
    font-weight: bold;
  }
  
  .quiz-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  
  .quiz-option {
    background-color: #f37fae;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .quiz-option:hover {
    background-color: #ff658b;
  }
  </style>
  