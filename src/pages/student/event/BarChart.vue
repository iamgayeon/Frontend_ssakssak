<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['박선우', '박민주', '조성혁', '정인겸', '유유진'],
        datasets: [
          {
            label: '총 보유자산',
            data: [15000, 12000, 10000, 8000, 7000],
            backgroundColor: ['#4fa3f7', '#f37fae', '#79dca9', '#f3c051', '#9a6df1'],
            borderRadius: 20,
            barThickness: 40
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',  // 수평 막대 차트로 전환
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value.toLocaleString() + '원';  // 단위 K 추가
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false  // 범례 숨기기
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.raw.toLocaleString() + '원';  // 천 단위 콤마 및 '원' 추가
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 350px;
  width: auto;
}
</style>
