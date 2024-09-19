<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from './components/layouts/DefaultLayout.vue';
</script>

<template>
  <div id="app" class="main-background">
  <DefaultLayout>
  <RouterView />
  </DefaultLayout>
</div>
</template>

<style scoped>
.main-background {
  background-color: #000; /* 원하는 배경색 */
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
  margin: 0;
  padding: 0;
}
</style>
