<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>우리반 씨드 랭킹</h4>
      </div>
      <span class="card-body">
        성공은 작은 습관에서 시작됩니다! 꾸준한 자산 관리를 통해 랭킹에 도전해보세요!
      </span>
      <div class="chart-container">
        <Bar v-if="chartDataReady" :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getSeedRanking } from '@/api/BarChart';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const emojis = ['🔥', '✨', '🚀', '⚡️', '🌟', '💡'];

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: '씨드 랭킹',
      data: [],
      backgroundColor: ['#4fa3f7', '#f37fae', '#79dca9', '#f3c051', '#9a6df1'],
      borderRadius: 20,
      barThickness: 40,
    },
  ],
});
const chartDataReady = ref(false);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value.toLocaleString() + ' 씨드';
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
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.raw.toLocaleString() + ' 씨드';
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
        const index = context.dataIndex;
        return `${emojis[index]}`;
      },
    },
  },
};

const fetchSeedRanking = async () => {
  try {
    const seedData = await getSeedRanking();

    if (seedData && seedData.length) {
      chartData.value.labels = seedData.map(item => item.stdName);
      chartData.value.datasets[0].data = seedData.map(item => item.seed);

      chartDataReady.value = true;
    }
  } catch (error) {
    console.error('Error fetching seed ranking:', error);
  }
};

onMounted(() => {
  fetchSeedRanking();
});
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
.card {
  width: 80vw;
  height: 500px;
}

.card-header {
  padding-top: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0px;
}
</style>
