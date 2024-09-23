<script setup>
import Header from './Header.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div id="container">
    <Header />
    <NavBar />
    <div :style="{backgroundColor : '#F6F4E2'}" class="content">
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
  justify-content: ;
}
</style>


