<template>
  <div class="card text-white">
    <img src="@/assets/images/Test_logo.png" class="card-img" alt="...">
    <div class="card-img-overlay d-flex justify-content-center align-items-center">
        <router-link to="/student/event/test">
            <button class="btn btn-warning">나만의 금융핑 테스트하기!</button>
        </router-link>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.card{
  width:400px;
}

.btn{
  background-color: #fffa90;
  color : #f5493c;
  border : 2px solid #892d2d;
  text-decoration: none;
  margin-bottom : 25px;
  font-weight: 1000;
}
</style>
