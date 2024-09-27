<template>
  <div class="container">
    <div class="card">
      <div class="card-header"><h4>우리반 씨드 랭킹</h4></div>
      <span class="card-body">성공은 작은 습관에서 시작됩니다! 꾸준한 자산 관리를 통해 랭킹에 도전해보세요!</span>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
</div>
</div>
</div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Chart.js 플러그인 및 Datalabels 등록
import ChartDataLabels from 'chartjs-plugin-datalabels';

// 플러그인 등록
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels // Datalabels 등록
);

const emojis = ['🔥', '✨', '🚀', '⚡️', '🌟', '💡']; // 이모티콘 배열

// 차트 데이터
const chartData = {
  labels: ['조성혁', '한가연', '박민주', '박선우', '이상엽'],
  datasets: [
    {
      label: 'Sample Data',
      data: [15000, 12000, 10000, 8000, 7000],
      backgroundColor: ['#4fa3f7', '#f37fae', '#79dca9', '#f3c051', '#9a6df1'],
      borderRadius: 20,
      barThickness: 40,
    },
  ],
};

// 차트 옵션
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y', // 수평 막대 차트로 전환
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value.toLocaleString() + '씨드'; // 단위 '원' 추가
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false, // 범례 숨기기
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.raw.toLocaleString() + '씨드'; // 천 단위 콤마 및 '원' 추가
        },
      },
    },
    datalabels: {
      anchor: 'end',
      align: 'center',
      color: 'blue',
      font: {
        weight: 'bold',
      },
      formatter: function (value, context) {
        console.log('object');
        // 이모티콘과 데이터 값을 함께 표시
        const index = context.dataIndex;

        // return '';
        return `${emojis[index]}`;
      },
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 350px;
  width: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  
}
.card{
  width:80vw;
  height:500px;
}

.card-header {
  padding-top:20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0px;
}


</style>
