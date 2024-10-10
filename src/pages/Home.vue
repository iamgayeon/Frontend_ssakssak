<!-- HomePage.vue -->
<template>
  <div>
    <HeroSection />
    <second />
    <third />
    <homefoot/>
  </div>
    <!-- 다른 컴포넌트들 추가 -->

</template>

<script setup>
// 각 섹션 컴포넌트를 가져옵니다.
import HeroSection from '../components/home/HeroSection.vue';
import second from '../components/home/second.vue';
import third from '../components/home/third.vue';
import homefoot from '../components/home/HomeFooter.vue';
</script>

<style scoped>
/* App.vue or global styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3, h4 {
  color: #333;
  font-family: 'Arial', sans-serif;
}
</style>