<script setup>
import { computed, ref } from 'vue';

const quantity = ref('0');
const price = ref('300');
const isShow = ref(false);

const showModal = () => {
    isShow.value = !isShow.value;
}

const minusQuantity = () => {
    if (quantity.value > 0) {
        quantity.value--;
    }
}

const plusQuantity = () => {
    quantity.value++;
}

const totalPrice = computed(() => {
    return quantity.value * price.value;
})

const emit = defineEmits(['close', 'couponBuy']);

const close = () => {
    emit('close');
}

const props = defineProps({
    coupon: {
        type: Object,
        required: true
    }
})

const couponBuy = () => {
    emit('couponBuy', quantity.value);
}
</script>

<template>
    <div class="modal-wrap">
        <div class="modal-container shadow-lg p-2">
            <div class="row card-body align-items-start p-2">
                <div class="col-4 mt-2">
                    <div class="imgBox">
                        <img src="@/assets/images/coupon.png" alt="노래 부르기 쿠폰 이미지">
                    </div>
                </div>

                <div class="col-8">
                    <div class="d-flex justify-content-between">
                        <span class="d-block mt-2 text-muted fs-6">쿠폰</span>
                        <button class="btn btn-outline-secondary text-center" @click="close"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div>
                        <span class="d-block fs-5 fw-bold">{{coupon.name}}</span>
                    </div>
                    <div class="text-end mb-2">
                        <span class="fs-5 fw-semibold primary">{{ coupon.price }} 씨드</span>
                    </div>
                    <div>
                        {{ coupon.description }}
                    </div>
                    <div class="mb-4">

                    </div>

                    <div class="mb-3 d-flex justify-content-between">
                        <div class="d-flex">
                            <button class="button cyan small fs-5" @click="minusQuantity">-</button>
                            <input type="text" class="form-control text-center fs-6 fw-semibold" v-model="quantity">
                            <button class="button cyan small fs-5" @click="plusQuantity">+</button>
                        </div>
                        <div class="fs-4 fw-semibold text-danger"><span>{{ totalPrice }} 씨드</span>
                        </div>
                    </div>
                    <div class="text-end">
                        <button class="btn btn-primary" @click="couponBuy">구매하기</button>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
}

/* modal or popup */
.modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}

.imgBox {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
}

.imgBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.form-control {
    border-radius: 5px;
    width: 80px;
    height: 40px;
}

.button {
    position: relative;
    border: 0;
    width: 40px;
    height: 35px;
    display: inline-block;
    text-align: center;
    color: white;
    border-radius: 5px;
}

.button:active {
    top: 4px;
}

.button.green {
    background-color: #9abf7f;
}

.button.green {
    box-shadow: 0px 4px 0px #87a86f;
}

.button.green:active {
    box-shadow: 0 0 #87a86f;
    background-color: #87a86f;
}

.custom-btn {
    width: 30px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.cyan {
    background-color: #7fccde;
    box-shadow: 0px 4px 0px #73B9C9;
}

.cyan:active {
    box-shadow: 0 0 #73B9C9;
    background-color: #70B4C4;
}

/* 1 */
.btn-1 {
    background: rgb(6, 14, 131);
    background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
    border: none;
}

.btn-1:hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
}

.primary {
    color: #00A3FF;
}

.btn:active {
    top: 4px;
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