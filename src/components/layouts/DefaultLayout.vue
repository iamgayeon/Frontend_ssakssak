<script setup>
import Header from './Header.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="container">
    <Header />
    <NavBar />
    <div :style="{backgroundColor : '#F6F4E2'}" class="content">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>


