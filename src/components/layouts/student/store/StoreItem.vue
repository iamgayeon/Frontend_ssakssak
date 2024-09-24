<script setup>
import StoreItemDetails from './StoreItemDetails.vue';
import { computed, ref } from 'vue';


const isShow = ref(false);

const showModal = () => {
    isShow.value = !isShow.value;
}

const props = defineProps({
    coupon: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['couponBuy']);

const couponBuy = () => {
    emit('couponBuy');
};
</script>

<template>
    <div class="container">
        <div class="card shadow-lg p-2">
            <div class="card-body align-items-center">
                <div class="row">
                    <div class="imgBox">
                        <img src="@/assets/images/coupon.png" alt="노래 부르기 쿠폰 이미지">
                    </div>
                </div>

                <div class="row">
                    <span class="d-block mt-2 text-muted fs-6">쿠폰</span>
                    <div class="mb-2">
                        <span class="fs-5 fw-bold">{{ coupon.name }}</span>
                    </div>
                    <div class="mb-4">
                        <span class="fs-5 fw-semibold text-success">{{ coupon.price }} 씨드</span>
                    </div>


                    <div>
                        <button class="btn btn-primary btn-lg w-100" @click="showModal">상세보기</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <StoreItemDetails v-if="isShow" :coupon="coupon" @close="showModal" @couponBuy="couponBuy" />

</template>


<style scoped>
.container {
    max-width: 350px;
}

.imgBox {
    width: 300px;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
}

.imgBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.form-control {
    width: 50px;
    height: 45px;
}

.button {
    position: relative;
    border: 0;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    color: white;
    border-radius: 10px;
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
</style>