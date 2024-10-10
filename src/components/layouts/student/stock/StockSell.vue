<script setup>
import { ref, computed, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import api from '@/api/studentStockApi';
import { useStockStore } from '@/stores/stockStore';

const authStore = useAuthStore();
const nowQuantity = ref('');
const stockStore = useStockStore();
const myStock = computed(() => stockStore.myStock);

const chartData = computed(() => stockStore.chartData);

const avaliableStock = computed(() => {
    const lastChartData = chartData.value[chartData.value.length - 1];
    if (!lastChartData || !lastChartData.stockPrice) {
        return 0; // 또는 다른 기본값
    }
    return parseInt(myStock.value.seed / lastChartData.stockPrice);
});

const lastChartData = computed(() => {
    if (chartData.value.length === 0) {
        return 0; // 또는 다른 기본값
    }
    return chartData.value[chartData.value.length - 1];
});



const sellTotal = computed(() => {
    return nowQuantity.value * lastChartData.value.stockPrice;
})



const stockRequest = ref({
    username: authStore.username,
    name: authStore.name,
    quantity: '',
    stock_price: ''
});

const plusQuantity = (num) => {
    nowQuantity.value = Number(nowQuantity.value) + Number(num);
};

const maxQuantity = () => {
    nowQuantity.value = myStock.value.totalQuantity;
};

const emit = defineEmits(['closePop']);

const sellStock = async () => {
    stockRequest.value.quantity = nowQuantity.value;
    stockRequest.value.stock_price = lastChartData.value.stockPrice;
    try {
        const response = await api.sellStock(stockRequest.value);
        stockStore.updateMyStock(response.data);

        closePop();
    } catch (error) {
        console.error('주식팔기 실패..', error);
    }
};

const closePop = () => {
    emit('close');
}
</script>
<template>
    <div class="modal-wrap">

        <div class="modal-container p-4 shadow-lg rounded bg-white">
            <div class="modal-header mb-4 d-flex justify-content-between align-items-center">
                <span class="fs-3 fw-bold">싹싹주식 판매하기</span>
            </div>

            <div class="modal-body">
                <div class="mb-2">
                    <span class="fs-5">싹싹 주식 금액 : </span>
                    <span class="fs-5 fw-bold">{{ lastChartData.stockPrice }} 씨드</span>
                </div>
                <div class="mb-3">
                    <span class="fs-5">판매 가능한 주식 수량 : </span>
                    <span class="fs-5 fw-bold txt-primary">{{ myStock.totalQuantity }} 싹싹</span>
                </div>

                <div class="mb-3">
                    <span class="d-block fs-5 mb-2">판매할 수량</span>
                    <div class="d-flex align-items-center">
                        <input type="number" class="form-control w-50" v-model="nowQuantity" placeholder="0">
                        <!-- <span v-if="errorMsg" class="text-danger fs-6 ms-3">{{ errorMsg }}</span> -->
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-outline btn-quantity btn-outline-primary me-2"
                            @click="plusQuantity(5)">+5</button>
                        <button class="btn btn-outline-primary btn-quantity btn-color-primary me-2"
                            @click="plusQuantity(10)">+10</button>
                        <button class="btn btn-outline-primary btn-quantity btn-color-primary me-2"
                            @click="plusQuantity(20)">+20</button>
                        <button class="btn btn-outline-primary btn-quantity btn-color-primary"
                            @click="maxQuantity">최대</button>
                    </div>
                </div>

                <div class="mb-3">
                    <span class="fs-5 me-2">주문 금액 :</span>
                    <span class="fs-5 fw-bold">{{ sellTotal }} 씨드</span>
                </div>
            </div>

            <div class="modal-footer d-flex justify-content-end">
                <button class="btn btn-secondary me-2" @click="closePop">닫기</button>
                <button class="btn btn-primary" @click="sellStock">매도하기</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* dimmed */
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

/* modal or popup */
.modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}

.txt-primary {
    color: #00A3FF;
}

.btn-quantity {
    width: 50px;
    height: 30px;
    border-radius: 5px;
    box-shadow: none;
}

.btn-primary {
    background-color: #00A3FF;
    border-color: #00A3FF;
}

.btn-outline-primary {
    color: #00A3FF;
    border-color: #00A3FF;
    --ar-btn-hover-bg: white;

}

.btn-outline-primary:hover {
    color: white;
    background-color: #00A3FF;
}


.btn-outline-primary:after {
    background-color: #ffffff;
    color: #00A3FF;
}
</style>