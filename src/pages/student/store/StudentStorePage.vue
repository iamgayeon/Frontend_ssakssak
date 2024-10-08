<script setup>
import StoreItem from '@/components/layouts/student/store/StoreItem.vue';

import { ref } from 'vue';

const coupons = ref([
    {
        name: "10분동안 노래부르기 쿠폰",
        description:
            "이 쿠폰을 소지한 학생은 교사에게 쿠폰을 제출한 후, 자신의 자리와 다른 학생의 자리를 하루 동안 바꿀 수 있습니다. 하지만 단순한 자리 교환이 아니라, 그날만큼은 새로운 위치에서 학습하고 환경을 새롭게 경험하는 기회가 됩니다.",
        price: 300,
        quantity: 10
    },
    {
        name: "10분 자유시간 쿠폰",
        description:
            "이 쿠폰을 사용하면 10분 동안 자유롭게 쉬거나, 개인적인 활동을 할 수 있는 시간이 주어집니다. 학교에서 잠시 벗어나 나만의 시간을 즐길 수 있는 특별한 기회입니다.",
        price: 200,
        quantity: 15
    },
    {
        name: "특별 학습 자료 제공 쿠폰",
        description:
            "이 쿠폰을 사용하면 선생님이 제공하는 특별 학습 자료를 받게 됩니다. 이 자료는 개인별 맞춤형으로 제공되며, 학습 성취도를 높이는 데 큰 도움이 될 것입니다.",
        price: 500,
        quantity: 5
    },
    {
        name: "하루 동안 자리 교환 쿠폰",
        description:
            "이 쿠폰을 사용하면 하루 동안 다른 학생과 자리를 교환할 수 있습니다. 새로운 위치에서 학습하고 교실 분위기를 새롭게 경험할 수 있는 특별한 기회입니다.",
        price: 350,
        quantity: 7
    },
    {
        name: "교사와의 개인 상담 쿠폰",
        description:
            "이 쿠폰을 사용하면 교사와 1:1 개인 상담을 받을 수 있는 기회를 얻게 됩니다. 학업 고민이나 개인적인 문제를 상의하고 해결할 수 있는 시간이 주어집니다.",
        price: 400,
        quantity: 8
    },
    {
        name: "하루 동안 조별 활동 리더 쿠폰길이 벗어나는 경우 테스트하기 위해 길게 적어놓음",
        description:
            "이 쿠폰을 사용하면 하루 동안 조별 활동에서 리더로 활동할 수 있는 기회를 얻게 됩니다. 친구들과 함께 활동을 주도하며 협동심과 리더십을 기를 수 있는 특별한 기회입니다.",
        price: 300,
        quantity: 12
    },
    {
        name: "교실 청소 면제 쿠폰",
        description:
            "이 쿠폰을 사용하면 하루 동안 교실 청소에서 면제됩니다. 친구들이 청소하는 동안 자유롭게 시간을 보낼 수 있습니다.",
        price: 250,
        quantity: 20
    }
]);

// const buyCoupon = async () => {
//     const c
// } 

</script>

<template>
    <div class="container mt-5">
        <div class="row g-0">
            <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="(coupon, idx) in coupons" :key="idx">
                <StoreItem :coupon="coupon" @couponBuy="buyCoupon"  />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 80vw;
    margin: 0 auto;
}
</style>