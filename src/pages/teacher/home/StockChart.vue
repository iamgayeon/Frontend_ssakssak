<script setup>
import apexcharts from 'vue3-apexcharts';
import { ref } from 'vue';
const chartOptions = ref({
    chart: {
        id: 'basic-bar'
    },
    xaxis: {
        categories: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30
        ]
    }
})

const series = ref([
    {
        name: 'series-1',
        data: [100, 100, 102, 105, 104, 104, 107, 108, 107, 108, 108, 107, 107, 103, 100, 99, 97, 97, 95, 93, 96, 95, 95, 92, 91, 92, 89, 90, 89, 88]
    }
])
</script>

<template>
    <div class="container">
        <apexcharts style="width:100%;" type="line" :options="chartOptions" :series="series" />
    </div>
</template>