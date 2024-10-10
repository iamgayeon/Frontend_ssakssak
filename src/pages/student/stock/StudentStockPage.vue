<script setup>
import { ref, onMounted,computed } from 'vue';
import { useStockStore } from '@/stores/stockStore';

import StockChartLayout from '@/components/layouts/student/stock/StockChartLayout.vue';
import StockNews from '@/components/layouts/student/stock/StockNews.vue';
import StockHeld from '@/components/layouts/student/stock/StockHeld.vue'

const stockStore = useStockStore();

onMounted(async () => {
    await stockStore.fetchMyStock();
    await stockStore.fetchChartData();
});

</script>

<template>
    <div class="container mt-3" style="width: 90vw;">
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

<style scoped></style>