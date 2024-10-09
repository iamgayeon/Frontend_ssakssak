<script setup>
import StoreItemDetails from './StoreItemDetails.vue';
import { ref } from 'vue';

const isShow = ref(false);

const showModal = () => {
    isShow.value = !isShow.value;
};

const props = defineProps({
    coupon: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['couponBuy']);

const couponBuy = () => {
    emit('couponBuy', props.coupon);
};
</script>

<template>
    <div class="container">
        <div class="card shadow-lg p-2">
            <div class="card-body align-items-center">
                <div class="row">
                    <div class="imgBox">
                        <img src="@/assets/images/coupon.png" alt="쿠폰 이미지">
                    </div>
                </div>

                <div class="row">
                    <span class="d-block mt-2 text-muted fs-6">쿠폰</span>
                    <div class="mb-2">
                        <span class="fs-5 fw-bold d-block coupon-name">{{ coupon.cpName }}</span>
                    </div>
                    <div class="mb-4">
                        <span class="fs-5 fw-semibold primary">{{ coupon.cpPrice }} 씨드</span>
                    </div>
                    <div class="mb-4">
                        <span class="fs-6 text-muted">남은 수량: <span class="fw-bold">{{ coupon.cpQuantity }}</span></span>
                    </div>

                    <div>
                        <button class="btn btn-primary btn-lg w-100" @click="showModal">상세보기</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <StoreItemDetails 
        v-if="isShow" 
        :couponId="coupon.cpId" 
        :coupon="coupon" 
        @close="showModal" 
        @couponBuy="couponBuy" 
    />
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

.coupon-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
}

.btn-outline-primary:hover {
    color: white;
    background-color: #00A3FF;
}
</style>