<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="card-group">
    <div class="card">
    <router-link to="/teacher/home">
      <img src="@/assets/images/student2.png" class="card-img-top mx-auto" alt="check-img">
    </router-link>
      <div class="card-body">
        <div class="card-title mb-1" style="color : #F06335">Student_management</div>
        <h5 class="card-title">학생관리 바로가기</h5>
        <p class="card-text">선생님이 학생들을 손쉽게 확인하고 관리할 수 있습니다. 기록을 통해 학생들의 출결 상태를 한눈에 파악하고, 필요한 경우 즉각적인 피드백을 제공하세요. 출석 현황을 주기적으로 점검하여 학생들의 참여도를 높일 수 있습니다!</p>
      </div>
      <div class="card-footer">
        <div class="d-grid gap-2">
            <router-link to="/"><button class="btn btn-primary w-100" type="button">바로가기</button></router-link>
            </div>
      </div>
    </div>
    <div class="card">
        <router-link to="/teacher/home">
      <img src="@/assets/images/store.png" class="card-img-top mx-auto" alt="reward-img">
        </router-link>
      <div class="card-body">
        <div class="card-title mb-1" style="color : #F06335">Store_Management</div>
        <h5 class="card-title">매점관리 바로가기</h5>
        <p class="card-text"> 학생들이 수행 가능한 리워드 목록과 각자의 진행 상황을 한눈에 확인할 수 있습니다. 학생들이 달성한 성과를 쉽게 파악하고, 그에 맞는 피드백을 제공하여 동기부여를 높여보세요. 리워드 관리와 피드백을 통해 학생들의 지속적인 성장을 도와줄 수 있습니다</p>
      </div>
      <div class="card-footer">
        <div class="d-grid gap-2">
            <router-link to="/"><button class="btn btn-primary w-100" type="button">바로가기</button></router-link>
            </div>
      </div>
    </div>
    <div class="card">
    <router-link to="/teacher/home">
      <img src="@/assets/images/rewardm.png" class="card-img-top mx-auto" alt="check-img">
    </router-link>
      <div class="card-body">
        <div class="card-title mb-1" style="color : #F06335">Reward_Payment</div>
        <h5 class="card-title">리워드 지급 바로가기</h5>
        <p class="card-text">학생들이 달성한 리워드를 지급하고 관리할 수 있습니다. 각 학생의 성과를 확인한 후 적절한 보상을 제공하여 동기부여를 높이세요. 리워드를 통해 학생들의 노력을 격려하고, 지속적인 성장을 지원할 수 있습니다!</p>
      </div>
      <div class="card-footer">
        <div class="d-grid gap-2">
            <router-link to="/teacher/reward"><button class="btn btn-primary w-100" type="button">바로가기</button></router-link>
            </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 250px;
  height: 250px;
  display: block;
  margin: auto; /* 이미지를 가운데로 정렬 */
}
.btn-primary{
    background-color: #00A3FF;
    box-shadow:none;
    border: none;
}
.btn-primary:hover{
    box-shadow:none;
}
</style>
