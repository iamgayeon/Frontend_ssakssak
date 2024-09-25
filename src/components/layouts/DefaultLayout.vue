<script setup>
import Header from './Header.vue';
// import NavBar from './TeacherNavBar.vue';
import NavBar from './StudentNavBar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div id="container">
    <Header />
    <NavBar />
    <div :style="{backgroundColor : '#f8f6e9'}" class="content">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#container{
  display:flex;
  flex-direction: column;
  width:100vw;

}
</style>


