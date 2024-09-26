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
                        <span class="fs-5 fw-bold d-block coupon-name">{{ coupon.name }}</span>
                    </div>
                    <div class="mb-4">
                        <span class="fs-5 fw-semibold primary">{{ coupon.price }} 씨드</span>
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

.coupon-name {
  white-space: nowrap; /* 한 줄로 표시 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  text-overflow: ellipsis; /* 말줄임표(...) 추가 */
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