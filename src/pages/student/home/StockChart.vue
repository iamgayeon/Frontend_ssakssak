<script setup>
import apexcharts from 'vue3-apexcharts';
import { ref } from 'vue';

const chartOptions = ref({
    chart: {
        type: 'candlestick',
        id: 'basic-candlestick',
        toolbar: {
            show: true, // 줌, 다운로드 등의 툴바 옵션을 활성화
        },
        zoom: {
            enabled: true // 줌 기능 활성화
        }
    },
    xaxis: {
        type: 'category',
        labels: {
            style: {
                colors: '#6c757d', // x축 레이블 색상
                fontSize: '12px'
            }
        },
        title: {
            text: 'Date',
            style: {
                color: '#6c757d',
                fontWeight: 'bold'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#6c757d', // y축 레이블 색상
                fontSize: '12px'
            }
        },
        title: {
            text: 'SEED',
            style: {
                color: '#6c757d',
                fontWeight: 'bold'
            }
        }
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: '#00A3FF', // 상승 캔들 색상 (파란색)
                downward: '#EF5858' // 하락 캔들 색상 (빨간색)
            },
            wick: {
                useFillColor: true // 위크 부분을 캔들 색상과 동일하게
            }
        }
    },
    tooltip: {
        enabled: true, // 툴팁 활성화
        theme: 'dark', // 툴팁 테마 설정 (dark, light)
        x: {
            show: true,
            formatter: function(val) {
                return 'Day ' + val; // 툴팁에서 x축 값 표시 방식
            }
        }
    },
    grid: {
        borderColor: '#e7e7e7', // 그리드 색상
        strokeDashArray: 4, // 그리드 선 스타일 (점선)
        position: 'back' // 그리드가 차트 뒤에 표시되도록 설정
    },
    title: {
        text: '싹싹 차트 조회',
        align: 'left',
        style: {
            fontSize: '24px',
            color: '#062375' 
        }
    }
});

const series = ref([
    {
        name: 'candle-series',
        data: [
            { x: 1, y: [100, 104, 99, 103] },
            { x: 2, y: [103, 105, 101, 104] },
            { x: 3, y: [104, 108, 102, 105] },
            { x: 4, y: [105, 107, 103, 106] },
            { x: 5, y: [106, 110, 105, 108] },
            { x: 6, y: [108, 109, 106, 107] },
            { x: 7, y: [107, 110, 106, 108] },
            { x: 8, y: [108, 112, 107, 110] },
            { x: 9, y: [110, 113, 108, 109] },
            { x: 10, y: [109, 112, 107, 108] },
            { x: 11, y: [108, 110, 105, 106] },
            { x: 12, y: [106, 109, 104, 107] },
            { x: 13, y: [107, 108, 105, 106] },
            { x: 14, y: [106, 109, 103, 104] },
            { x: 15, y: [104, 107, 101, 103] },
            { x: 16, y: [103, 106, 100, 102] },
            { x: 17, y: [102, 105, 99, 101] },
            { x: 18, y: [101, 104, 98, 100] },
            { x: 19, y: [100, 103, 97, 99] },
            { x: 20, y: [99, 102, 95, 98] },
            { x: 21, y: [98, 101, 94, 97] },
            { x: 22, y: [97, 100, 93, 96] },
            { x: 23, y: [96, 99, 92, 95] },
            { x: 24, y: [95, 98, 91, 94] },
            { x: 25, y: [94, 97, 90, 93] },
            { x: 26, y: [93, 96, 89, 92] },
            { x: 27, y: [92, 95, 88, 91] },
            { x: 28, y: [91, 94, 87, 90] },
            { x: 29, y: [90, 93, 86, 89] },
            { x: 30, y: [89, 92, 85, 88] }
        ]
    }
]);
</script>

<template>
    <div class="container">
        <apexcharts style="width: 100%;" type="candlestick" :options="chartOptions" :series="series" />
    </div>
</template>

<style scoped>
.container {
    width:100%; /* 차트 너비를 제한 */
    margin: 0 auto;
    padding: 20px;
}
</style>
