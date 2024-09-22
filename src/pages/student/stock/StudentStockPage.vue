<script setup>
import StockChartLayout from '@/components/layouts/student/stock/StockChartLayout.vue';
import StockNews from '@/components/layouts/student/stock/StockNews.vue';
import StockHeld from '@/components/layouts/student/stock/StockHeld.vue'


</script>

<template>
    <a href="/teacher/stock">선생페이지</a>
    <div class="container mt-3" style="width: 70vw;">
        <div class="row">
            <div class="col-12">
                <StockChartLayout />
            </div>
        </div>

        <div class="row mt-3 g-0">
            <div class="col-6">
                <StockNews />
            </div>
            <div class="col-6">
                <div class="col-12 mb-3">
                    <StockHeld />
                </div>
            </div>
        </div>
    </div>
</template>