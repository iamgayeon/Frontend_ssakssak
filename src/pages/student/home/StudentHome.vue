<script setup>
import StockChart from './StockChartLayout.vue';
import StudentDoor from './StudentDoor.vue';
import StudentTax from './StudentTax.vue';
</script>

<template>
    <div class="container mt-3" style="width: 100vw;">
        <div class="row">

          <div class="col-12 mb-6">
            <StudentTax />
          </div>
          
            <div class="chart col-12 mb-6">
                <StockChart />
            </div>
            <div class="col-12 mb-6">
                <StudentDoor />
            </div>

        </div>

        </div>
</template>

<style scoped>
#Treasury{
    margin : 0px;
    padding: 0px;
}

.chart{
    padding-right: 0px;
}

.Tax{
    padding-right: 5px;
}

.btn{
    
}
</style>