<script setup>
import StoreItem from '@/components/layouts/student/store/StoreItem.vue';
import { ref, onMounted } from 'vue';
import api from '@/api/studentStoreApi';

const coupons = ref([]);

const getCouponList = async () => {
  try {
    const response = await api.getCouponlist();
    coupons.value = response;
    // console.log('Coupon list:', coupons.value);
  } catch (error) {
    console.error('Failed to fetch coupon list:', error);
  }
};

onMounted(() => {
  getCouponList();
});

const buyCoupon = (coupon) => {
  console.log('Coupon purchased:', coupon);
};
</script>

<template>
  <div class="container mt-5">
    <div class="row g-0">
      <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="(coupon, idx) in coupons" :key="idx">
        <StoreItem :coupon="coupon" @couponBuy="buyCoupon" />
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