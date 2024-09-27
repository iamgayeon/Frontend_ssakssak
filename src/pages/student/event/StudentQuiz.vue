<template>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div v-if="currentQuiz.question" class="quiz-question">
            <div class="quiz-label">오늘의 금융 퀴즈</div>
            <div class="quiz-text">{{ currentQuiz.question }}</div>
          </div>
          <div v-if="currentQuiz.options" class="quiz-options">
            <button
              v-for="(option, index) in currentQuiz.options"
              :key="index"
              class="quiz-option"
              @click="checkAnswer(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- 정답 팝업 -->
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <p>{{ popupMessage }}</p>
          <button @click="closePopup">닫기</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const quizzes = [
    {
      question: '은행에서 저축을 통해 무엇을 받을 수 있나요?',
      options: ['할인', '이자', '수수료', '대출'],
      answer: '이자',
    },
    {
      question: '금리가 상승하면 어떤 영향이 있을까요?',
      options: ['대출 이자 상승', '저축 이자 하락', '물가 상승', '소득 감소'],
      answer: '대출 이자 상승',
    },
    {
      question: '신용카드를 사용할 때 주의해야 할 점은 무엇인가요?',
      options: ['적립금 사용', '연체 방지', '할인 혜택 확인', '포인트 적립'],
      answer: '연체 방지',
    },
  ];
  
  const currentQuiz = ref({}); // ref로 currentQuiz 상태 설정
  const showPopup = ref(false); // 팝업 표시 여부
  const popupMessage = ref('');
  
  // 날짜에 따라 다른 퀴즈 선택
  onMounted(() => {
    const today = new Date().getDate();
    const quizIndex = today % quizzes.length; // 날짜를 기준으로 퀴즈 선택
    currentQuiz.value = quizzes[quizIndex];
  });
  
  // 정답 확인 함수
  const checkAnswer = (selectedOption) => {
    if (selectedOption === currentQuiz.value.answer) {
      popupMessage.value = '정답입니다!';
    } else {
      popupMessage.value = '오답입니다. 다시 도전해보세요!';
    }
    showPopup.value = true;
  };
  
  // 팝업 닫기 함수
  const closePopup = () => {
    showPopup.value = false;
  };
  </script>
  
  <style scoped>
  .card {
    height: 398px;
    padding-bottom: 10px;
  }
  
  .card-header {
    padding-top: 20px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0px;
  }
  
  .quiz-body {
    margin-top: 30px;
  }
  
  .quiz-question {
    background-color: #dcf0fb;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.1rem;
    color: #3f51b5;
    height: 160px;
    margin-top: 20px;
  }
  
  .quiz-label {

    display: inline-block;
    padding: 5px 10px;
    border-radius: 10px;
    color: #3f51b5;
    font-weight: bold;
    display:flex;
    justify-content: center;
  }
  
  .quiz-text {
    padding-top: 20px;
  }
  
  .quiz-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 50px;
  }
  
  .quiz-option {
    background-color: #00A3FF;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .quiz-option:hover {
    background-color: #303f9f;
  }
  
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .popup-content {
    text-align: center;
  }
  
  .popup-content button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #00A3FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .popup-content button:hover {
    background-color: #303f9f;
  }
  </style>
  