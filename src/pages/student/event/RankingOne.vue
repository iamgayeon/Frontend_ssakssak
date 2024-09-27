<template>
  <div class="container">
    <div class="card">
      <div class="card-header"><h4 class="text-muted">지난 주 우리반의 퀴즈왕은?</h4></div>
      <span class="text-muted card-body">퀴즈에 참여해서 다양한 혜택을 받아보세요!</span>
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

// Chart.js 플러그인 등록
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const emojis = ['🥈', '🥇', '🥉']; // 각 순위에 해당하는 이모티콘 설정

const allStudents = [
  { name: '박선우', assets: 8 },
  { name: '박민주', assets: 5 },
  { name: '조성혁', assets: 6 },
  { name: '정인겸', assets: 4 },
  { name: '유유진', assets: 3 },
];

const chartData = {
  labels: ['2등', '1등', '3등'], // "2등", "1등", "3등"을 넣을 배열
  datasets: [
    {
      label: '총 보유자산',
      data: [6, 8, 5], // 2등, 1등, 3등의 자산을 넣을 배열
      backgroundColor: ['#1fa3f7', '#f37fae', '#79dca9'], // 각 등수에 맞는 색상
      borderRadius: 20,
      barThickness: 40,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      display: false,
      ticks: {
        callback: function (value) {
          return value.toLocaleString() + '번'; // 단위 '원' 추가
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      anchor: 'center',
      align: 'center',
      color: 'blue',
      font: {
        size: '20px',
      },
      formatter: function (value, context) {
        console.log('object');
        // 이모티콘과 데이터 값을 함께 표시
        const index = context.dataIndex;

        // return 'zz';
        return `${emojis[index]}`;
      },
    },
    legend: {
      display: false, // 범례 숨기기
    },
    tooltip: {
      callbacks: {
        // 커서 올릴 시 툴팁에 이름을 표시
        label: function (tooltipItem) {
          const labels = ['2등', '1등', '3등']; // 2등, 1등, 3등
          const studentNames = ['박민주', '박선우', '조성혁']; // 상위 3명의 이름
          const index = tooltipItem.dataIndex;
          return `${labels[index]}: ${
            studentNames[index]
          } - ${tooltipItem.raw.toLocaleString()}번`;
        },
      },
    },
  },
};

// created() {
//   this.getTopThreeStudents(); // 컴포넌트가 생성될 때 상위 3명을 추출하여 설정
//   console.log('object111');
// },
// mounted() {
//   this.addEmojiToChart(); // 차트가 마운트된 후 이모티콘을 추가
// },

const getTopThreeStudents = () => {
  // 자산이 많은 순으로 정렬 후 상위 3명 추출
  let topThree = this.allStudents
    .sort((a, b) => b.assets - a.assets)
    .slice(0, 3);

  // 2등, 1등, 3등 순으로 배열을 재정렬 (1등이 가운데, 2등이 왼쪽, 3등이 오른쪽)
  topThree = [topThree[1], topThree[0], topThree[2]];

  // X축 라벨을 2등, 1등, 3등으로 설정
  this.chartData.labels = ['2등', '1등', '3등'];

  // 차트 데이터에 상위 3명의 자산을 2등, 1등, 3등 순으로 설정
  this.chartData.datasets[0].data = topThree.map((student) => student.assets);
};

//   addEmojiToChart() {
//     // 이모티콘을 막대 상단에 표시하기 위한 플러그인 추가
//     ChartJS.register({
//       id: 'emojiPlugin',
//       afterDatasetsDraw: (chart) => {
//         console.log('ranking');
//         console.log(chart);
//         const { ctx } = chart;
//         const emojis = ['🥈', '🥇', '🥉']; // 각 순위에 해당하는 이모티콘 설정
//         chart.data.datasets.forEach((dataset, datasetIndex) => {
//           const meta = chart.getDatasetMeta(datasetIndex);
//           meta.data.forEach((bar, dataIndex) => {
//             const xPos = bar.x; // 막대의 x 위치
//             const yPos = bar.y; // 막대의 상단에 위치하도록 y 좌표 조정
//             const emoji = emojis[dataIndex]; // 각 막대별로 다른 이모티콘 설정

//             // 이모티콘 크기와 위치 설정
//             ctx.font = '20px Arial';
//             ctx.textAlign = 'center'; // 이모티콘을 막대의 가운데에 위치시키기
//             ctx.fillText(emoji, xPos, yPos); // 이모티콘을 그리기
//           });
//         });
//       },
//     });
// },
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 27vh;
  width: 398px;
  padding-bottom:10px;
  padding-left: 10px;
  padding-right: 10px;
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  height:510px;
}

</style>
