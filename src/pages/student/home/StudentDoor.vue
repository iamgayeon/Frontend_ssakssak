<script setup>
import { ref } from 'vue';
import api from '@/api/studentDoorApi';

const firstPlaceStudent = ref('');
const secondPlaceStudent = ref('');
const thirdPlaceStudent = ref('');

const getSeedRankingThree = async () => {
  try {
    const studentRanking = await api.getSeedRankingThree();
    console.log('Student Ranking:', studentRanking);

    if (studentRanking.length >= 3) {
      firstPlaceStudent.value = studentRanking[0];
      secondPlaceStudent.value = studentRanking[1];
      thirdPlaceStudent.value = studentRanking[2];
    }
  } catch (error) {
    console.error('Failed to fetch seed ranking:', error);
  }
};

getSeedRankingThree();
</script>

<template>
  <div class="card-container">
    <router-link to="/student/profile" class="card">
      <div class="card-img-overlay">

        <span class="overlay-text1">{{ firstPlaceStudent }}</span>
        <span class="overlay-text2">{{ secondPlaceStudent }}</span>
        <span class="overlay-text3">{{ thirdPlaceStudent }}</span>
      </div>
    </router-link>

    <router-link to="/student/event" class="card">
      <div class="card-img-overlay"></div>
    </router-link>

    <router-link to="/student/event/test" class="card">
      <div class="card-img-overlay"></div>
    </router-link>
  </div>
</template>
  
  <style scoped>
  .card-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  
  .card {
    width: 48%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 25px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0px;
  }
  
  .card:nth-child(1) {
    background-image: url('@/assets/images/weeklyseedrankgogo.png');
  }
  
  .card:nth-child(2) {
    background-image: url('@/assets/images/dailycheckgogo.png');
  }
  
  .card:nth-child(3) {
    background-image: url('@/assets/images/finpingtestgogo.png');
  }
  .overlay-text1 {
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 172px;
    margin-left: 198px;
  }
  
  .overlay-text2 {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 120px;
    margin-left: 68px;
  }

  .overlay-text3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 75px;
    margin-left: 255px;
  }

  .btn {
    width: 115px;
    border-radius: 5px;
  }
  </style>
  