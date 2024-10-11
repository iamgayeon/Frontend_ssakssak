<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useStockStore } from '@/stores/stockStore';
import api from '@/api/teacherStockApi';
const stockStore = useStockStore();
onMounted(async () => {
    await stockStore.fetchChartData();
});

const chartData = computed(() => stockStore.chartData);


const dateFormat = (date) => {
    let dateFormat = date.getFullYear() + '-' +
        ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
        '-' + ((date.getDate()) < 10 ? '0' + (date.getDate()) : (date.getDate()));
    return dateFormat;
}


const fiveDayRates = computed(() => {
    const rates = [];
    console.log('22', chartData.value.length);
    if(chartData.value && chartData.value.length > 0){
        for (let i = chartData.value.length - 1; i >= chartData.value.length - 5; i--) {
            if(i >= 0) {
                console.log(chartData.value[i]);
                const price = chartData.value[i].stockPrice;
                const date = new Date(chartData.value[i].stockDate);
                const day = dateFormat(date);
                const change = chartData.value[i].change;
                const rateData = {
                    price: price,
                    day: day,
                    change: change
                };
                rates.push(rateData);
            }
        }
    }
    console.log('33', rates);
    return rates;
})

const currentRate = ref('');
const setCurrentRate = async () => {
    if (currentRate.value > 100) {
        alert('0에서 100사이의 숫자로 입력해주세요');
        return;
    } else if (currentRate.value === '') {
        return;
    } else if(isNaN(currentRate.value)) {
        alert('숫자만 입력해주세요');
        currentRate.value = '';
        return; 
    }
    try {
        const latestPrice = chartData.value[chartData.value.length - 1].stockPrice;
        const newPrice = latestPrice * (1 + parseFloat(currentRate.value) / 100);
        const request = {
            change: currentRate.value,
            stock_price: parseInt(newPrice),
        }
    
        await api.addRate(request);
        currentRate.value = '';

        await stockStore.fetchChartData();  // 추가된 부분
    } catch (error) {
        console.error(error);
    }
};

</script>

<template>
    <div class="container">
        <div class="shadow card p-4">
            <div>
                <span class="fs-2 fw-bold">주식 등락률 관리</span>
            </div>
            <div class="section">
                <ul class="list-group">
                    <li v-for="(rate, index) in fiveDayRates" :key="index"
                        class="list-group-item border-0 p-3 mb-2 d-flex justify-content-between align-items-center shadow-sm rounded"
                        :class="{
                            'bg-light-success': parseFloat(rate) > 0,
                            'bg-light-danger': parseFloat(rate) < 0
                        }">
                        <span class="fs-6 fw-semibold">
                            {{ rate.day }} :
                            <span :class="parseFloat(rate.change) > 0 ? 'text-danger' : 'txt-primary'"> {{ rate.price
                                }}
                            </span> 씨드
                            <span :class="parseFloat(rate.change) > 0 ? 'text-danger' : 'txt-primary'">
                                &nbsp {{ rate.change }}%
                            </span>
                            <span>
                                {{ rate.change > 0 ? (rate.change === 0 ? '보합' : '상승') : '하락' }}
                            </span>
                        </span>
                        <i :class="parseFloat(rate.change) > 0 ? 'bi bi-arrow-up text-danger' : 'bi bi-arrow-down txt-primary'"
                            class="fs-5"></i>
                    </li>
                </ul>
            </div>
            <div class="mt-2">
                <span class="fs-5 fw-semibold ps-2">주식 등락률 설정</span>
                <div class="row d-flex align-items-center">
                    <div class="col-3">
                        <span class="fs-6 fw-bold ps-3">오늘 등락률: </span>
                    </div>
                    <div class="col-9 d-flex p-0">
                        <input type="text" v-model="currentRate" class="form-control w-75 mx-2"
                            placeholder="등락률을 입력하세요 (%)">
                        <button class="btn btn-primary" @click="setCurrentRate">
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    height: 500px;
}

.section {
    height: 70%;
}

.list-group {
    height: 100%;
    overflow-y: auto;
}


.btn-primary {
    background-color: #00A3FF;
    border-color: #00A3FF;
}

.btn-active-primary {
    color: #00A3FF;
    border-color: #00A3FF;
    --ar-btn-hover-bg: white;

}

.btn-active-primary.active {
    color: white;
    background-color: #00A3FF;
}

.txt-primary {
    color: blue;
}
</style>
