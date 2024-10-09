<template>
    <div class="card-container">
      <router-link to="/student/profile" class="card">
        <div class="card-img-overlay"></div>
      </router-link>
  
      <router-link to="/student/event" class="card">
        <div class="card-img-overlay"></div>
      </router-link>
  
      <router-link to="/student/event/test" class="card">
        <div class="card-img-overlay"></div>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .card-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  
  .card {
    width: 48%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 25px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0px;
  }
  
  .card:nth-child(1) {
    background-image: url('@/assets/images/weeklyseedrankgogo.png');
  }
  
  .card:nth-child(2) {
    background-image: url('@/assets/images/dailycheckgogo.png');
  }
  
  .card:nth-child(3) {
    background-image: url('@/assets/images/finpingtestgogo.png');
  }
  
  .overlay-text {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    position: absolute;
  }
  
  .tax-title {
    padding-top: 20px;
    color: white;
    font-size: 18px;
    margin-top: 120px;
    margin-left: 45px;
  }
  
  .alert {
    width: 250px;
    background-color: white;
    color: #00A3FF;
  }
  
  .taxAlert {
    color: #00A3FF;
  }
  
  .tax-footer {
    margin-left: 40px;
  }
  
  .saving-footer {
    margin-left: 70px;
  }
  
  .btn {
    width: 115px;
    border-radius: 5px;
  }
  </style>
  