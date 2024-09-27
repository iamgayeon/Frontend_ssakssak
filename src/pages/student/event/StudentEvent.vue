<template>
  <div class="container mt-3" style="width: 75vw;">
    <div class="row">
        <div class="col-12 mb-6">
          <BarChartOne/>
        </div>
        <div class="d-flex justify-content-between"> <!-- flexbox를 사용한 행 배치 -->
          <div class="col">
            <TestPing />
          </div>
          <div class="d-flex justify-content-between">
            <RankingOne />
            <StudentQuiz/>
          </div>
        </div>
    </div>

    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import BarChartOne from './BarChartOne.vue';
import RankingOne from './RankingOne.vue';
import TestPing from './TestPing.vue';
import StudentQuiz from './StudentQuiz.vue';
const router = useRouter();

export default {
  name: 'StudentEvent',
  components: {
    BarChartOne,
    RankingOne,
    TestPing,
    StudentQuiz
  }}


</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-top: 40px;
}

/* 카드 기본 스타일 */
.event-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 500px;
  padding: 20px;
  text-align: center;
}


.col {
  flex: 1; /* 두 컴포넌트를 동일한 너비로 나란히 배치 */
  padding:10px;
  margin-top:30px;
}

</style>
