<script setup>
import StockChart from './StockChartLayout.vue';
import TeacherDoor from './Teacherdoor.vue';
import TeacherTax from './tax.vue';
import Treasury from './treasury.vue';
</script>

<template>
    <div class="container mt-3" style="width: 75vw;">
        <div class="row">
            <div class="col-12 mb-6">
                <StockChart />
            </div>
            <div class="col-12 mb-6">
                <TeacherDoor />
            </div>
            <div class="col-12 mb-6">
                <TeacherTax />
            </div>
            <div class="col-12 mb-6">
                <Treasury />
            </div>
        </div>

        </div>
</template>

<style scoped>

</style>