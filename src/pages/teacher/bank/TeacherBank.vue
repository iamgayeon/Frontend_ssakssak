<script setup>
import StockChartLayout from '@/components/layouts/student/stock/StockChartLayout.vue';
import StockRate from '@/components/layouts/student/stock/StockRate.vue'
import StockNewsCreate from '@/components/layouts/student/stock/StockNewsCreate.vue';
</script>

<template>
    <div class="container mt-3" style="width: 70vw;">
        <div class="row">
            <div class="col-12">
                <StockChartLayout />
            </div>
        </div>
        <div class="row mt-3 g-0">
            <div class="col-6">
                <StockRate />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>