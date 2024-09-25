<script setup>
import { ref, computed, defineEmits } from 'vue';
const quantity = ref('')

const buyTotal = computed(() => {
    return quantity.value * props.stock
})

const plusQuantity = (num) => {
    quantity.value = Number(quantity.value) + Number(num)
}

const maxQuantity = () => {
    quantity.value = props.myStock.quantity;
}

const emit = defineEmits(['closePop']);

const props = defineProps({
    myStock: {
        type: Object
    },
    stock: {
        type: Number
    }
})

const closePop = () => {
    emit('close');
}
</script>
<template>
    <div class="modal-wrap">
        <div class="modal-container p-4 shadow-lg rounded bg-white">
            <div class="modal-header mb-4 d-flex justify-content-between align-items-center">
                <span class="fs-3 fw-bold">싹싹주식 매수하기</span>
            </div>

            <div class="modal-body">
                <div class="mb-2">
                    <span class="fs-5">싹싹 주식 금액 : </span>
                    <span class="fs-5 fw-bold">{{ stock }} 씨드</span>
                </div>
                <div class="mb-3">
                    <span class="fs-5">구매 가능한 주식 수량 : </span>
                    <span class="fs-5 fw-bold text-primary">{{ myStock.quantity }} 싹싹</span>
                </div>

                <div class="mb-3">
                    <span class="d-block fs-5 mb-2">구매할 수량</span>
                    <input type="number" class="form-control w-50" v-model="quantity" placeholder="0">
                    <div class="mt-2">
                        <button class="btn btn-outline btn-outline-danger me-2 pt-0 pb-1"
                            @click="plusQuantity(5)">+5</button>
                        <button class="btn btn-outline-danger btn-color-danger me-2 pt-0 pb-1"
                            @click="plusQuantity(10)">+10</button>
                        <button class="btn btn-outline-danger btn-color-danger me-2 pt-0 pb-1"
                            @click="plusQuantity(20)">+20</button>
                        <button class="btn btn-outline-danger btn-color-danger pt-0 pb-1"
                            @click="maxQuantity">전체</button>
                    </div>
                </div>

                <div class="mb-3">
                    <span class="d-block fs-5">주문 금액:</span>
                    <span class="fw-bold">{{ buyTotal }} 씨드</span>
                </div>
            </div>

            <!-- 버튼 -->
            <div class="modal-footer d-flex justify-content-end">
                <button class="btn btn-secondary me-2" @click="closePop">닫기</button>
                <button class="btn btn-danger">매수하기</button>
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
</style>