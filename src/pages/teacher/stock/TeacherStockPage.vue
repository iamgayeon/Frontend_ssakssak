<script setup>
import StockChartLayout from '@/components/layouts/student/stock/StockChartLayout.vue';
import StockRate from '@/components/layouts/student/stock/StockRate.vue'
import StockNewsCreate from '@/components/layouts/student/stock/StockNewsCreate.vue';
import { ref, onMounted, computed } from 'vue';
import { useStockStore } from '@/stores/stockStore';
import { useAuthStore } from '@/stores/auth';

// const stockStore = useStockStore();

// onMounted(async () => {
//     await stockStore.fetchChartData();
// });

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
                <StockRate />
            </div>
            <div class="col-6">
                <StockNewsCreate />
            </div>
        </div>
    </div>
</template>