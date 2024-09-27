<script setup>
import { ref } from 'vue';

// 상태 관리
const currentQuestion = ref(0); // 현재 질문 번호
const totalQuestions = 5; // 질문 총 개수

// 각 버튼 선택 횟수
const answerCounts = ref({
  answer1: 0,
  answer2: 0,
  answer3: 0,
  answer4: 0,
});

// 질문과 답변 데이터
const questions = ref([
  {
    question: '용돈을 받았을 때 어떻게 쓰나요?',
    answers: [
      '원하는 장난감을 사거나 책을 산다',
      '친구들과 함께 놀러 가거나 맛있는 음식을 사먹는다',
      '일부는 저축하고 일부는 재미있는 것에 쓴다',
      '그냥 모아두거나 나중에 필요할 때 쓴다',
    ],
  },
  {
    question: '새로운 물건을 사고 싶을 때 어떻게 하나요?',
    answers: [
      '바로 사고 싶은 물건을 산다',
      '부모님에게 돈을 빌려서 산 후 갚는다',
      '조금 기다렸다가 돈이 충분해지면 산다',
      '할인 기간을 기다려 사고, 가격을 비교해서 가장 저렴한 것을 산다',
    ],
  },
  {
    question: '친구들과 외출할 때 돈을 어떻게 사용하나요?',
    answers: [
      '가지고 있는 돈을 모두 쓰거나 필요한 만큼 빌려서 쓴다',
      '대략 필요한 금액을 생각하고 돈을 쓰지만, 남은 돈은 계획하지 않는다',
      '예산을 세우고, 그 안에서만 돈을 사용하려고 노력한다',
      '미리 예산을 정하고, 반드시 그 예산 내에서 소비한다',
    ],
  },
  {
    question: '저축을 할 때 어떤 방식으로 하나요?',
    answers: [
      '특별한 계획 없이 남은 돈을 저축한다',
      '필요할 때만 돈을 모으고 필요하면 저축한 돈을 꺼내 쓴다',
      '목표를 정하지 않고 정해진 금액을 저축하려고 한다',
      '구체적인 목표를 세우고, 목표에 맞춰 일정 금액을 정기적으로 저축한다',
    ],
  },
  {
    question: '갑자기 사고 싶은 물건이 생겼을 때 어떻게 하나요?',
    answers: [
      '바로 구매한다',
      '부모님이나 친구들에게 돈을 빌려서 산다',
      '일단 사고 싶은 마음을 참고, 돈을 모아 나중에 구매한다',
      '사고 싶은 물건을 미리 계획하고, 그에 맞춰 돈을 모아 계획적으로 구매한다',
    ],
  }
]
);

// 선택한 답변 기록 및 다음 질문으로 이동
const handleAnswerClick = (answerIndex) => {
  if (answerIndex === 0) answerCounts.value.answer1++;
  else if (answerIndex === 1) answerCounts.value.answer2++;
  else if (answerIndex === 2) answerCounts.value.answer3++;
  else if (answerIndex === 3) answerCounts.value.answer4++;

  // 마지막 질문인지 확인 후 다음 질문으로 이동
  if (currentQuestion.value < totalQuestions - 1) {
    currentQuestion.value++;
  } else {
    // 모든 질문이 끝난 경우 결과 페이지로 이동
    showResult.value = true;
  }
};

// 결과를 표시할 때
const showResult = ref(false);

// 가장 많이 선택된 답변 결과를 계산
const getResult = () => {
  const maxCount = Math.max(
    answerCounts.value.answer1,
    answerCounts.value.answer2,
    answerCounts.value.answer3,
    answerCounts.value.answer4
  );

  if (answerCounts.value.answer1 === maxCount) return '1번 이미지를 출력합니다.';
  if (answerCounts.value.answer2 === maxCount) return '2번 이미지를 출력합니다.';
  if (answerCounts.value.answer3 === maxCount) return '3번 이미지를 출력합니다.';
  if (answerCounts.value.answer4 === maxCount) return '4번 이미지를 출력합니다.';
};
</script>

<template>
    <div class="container py-5 mt-2 mt-lg-5 mb-lg-4 my-xl-5">
        <div class="row pt-sm-5 pt-lg-0">
            <section class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
                <div class="card-header" v-if="!showResult"><img class="header-img" src="@/assets/images/pinkping.png"></div>
    <!-- 질문과 답변 -->
    <div v-if="!showResult">
      <div class="question-title"><h3>{{ questions[currentQuestion].question }}</h3></div>
      <div v-for="(answer, index) in questions[currentQuestion].answers" :key="index" class="question-body">
        <button class="a-button" @click="handleAnswerClick(index)">
          {{ answer }}
        </button>
      </div>
    </div>
    

    <!-- 결과 페이지 -->
    <div class=result1 v-else>

      <img class="result-image" v-if="getResult() === '1번 이미지를 출력합니다.'" src="@/assets/images/ping1.png" alt="1번 이미지" />
      <img class="result-image" v-if="getResult() === '2번 이미지를 출력합니다.'" src="@/assets/images/ping2.png" alt="2번 이미지" />
      <img class="result-image" v-if="getResult() === '3번 이미지를 출력합니다.'" src="@/assets/images/ping3.png" alt="3번 이미지" />
      <img class="result-image" v-if="getResult() === '4번 이미지를 출력합니다.'" src="@/assets/images/ping4.png" alt="4번 이미지" />
      
    </div>
    </section>
  </div>
</div>
</template>

<style scoped>
/* 간단한 스타일링 */
button {
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
}

h3 {
  margin-bottom: 20px;
}

img {
  width: 200px;
  height: auto;
}

.event-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 500px;
    padding: 20px;
    text-align: center;
  }
.card-header{
    display:flex;
    justify-content: center;
    width:auto;
}
.question-title{
    display:flex;
    justify-content: center;
}
.question-body{
    display:flex;
    justify-content: center;
}
h3{
    background-color: #FF4699;
    color : #fff;
    border : none;
    border-radius: 10px;
    padding : 10px;
    width:600px;
    text-align: center;
}
.a-button{
    width:600px;
    background-color: #F6F4E2;
}
.a-button :hover{
    color:#f0f0f0;
}

.container{
    width:860px;
}

.result-image{
    display:flex;
    justify-content: center;
    width:600px;
}
.result1{
    display:flex;
    justify-content: center;
}

.header-img{
  width:300px;
  height: auto;
}
</style>