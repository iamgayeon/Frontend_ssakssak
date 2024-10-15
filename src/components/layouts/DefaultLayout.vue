<script setup>
import TeacherHeader from './TeacherHeader.vue';
import StudentHeader from './StudentHeader.vue';
import TeacherNavBar from './TeacherNavBar.vue';
import StudentNavBar from './StudentNavBar.vue';
import StudentFooter from './StudentFooter.vue';
import TeacherFooter from './TeacherFooter.vue';
import { isAuthenticated } from '@/util/guards';
import { ref, watch } from 'vue';

const auth = isAuthenticated();
const role = ref("");
watch(
  () => auth.roles,
  (roles) => {
    if (Array.isArray(roles)) {
      if (roles.includes("ROLE_TEACHER")) {
        role.value = "ROLE_TEACHER";
      } else if (roles.includes("ROLE_STUDENT")) {
        role.value = "ROLE_STUDENT";
      } else {
        role.value = "";
      }
    } else {
      role.value = ""; // 로그아웃 시 역할 초기화
    }
  },
  { immediate: true } // 즉시 watch 시작
);

</script>

<template>
  <div id="container">
    <TeacherHeader v-if="role === 'ROLE_TEACHER'" />
    <StudentHeader v-if="role === 'ROLE_STUDENT'" />
    <TeacherNavBar v-if="role === 'ROLE_TEACHER'" />
    <StudentNavBar v-if="role === 'ROLE_STUDENT'" />
    <div :style="{ backgroundColor: '#f8f6e9' }" class="content">
      <slot></slot>
    </div>
    <TeacherFooter class="mt-5" v-if="role === 'ROLE_TEACHER'" />
    <StudentFooter class="mt-5" v-if="role === 'ROLE_STUDENT'" />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>
