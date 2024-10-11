import { defineStore } from "pinia";
import api from "@/api/studentStockApi";

export const useStockStore = defineStore("stock", {
  state: () => ({
    myStock: {
      stdId: "",
      totalQuantity: "",
      totalInvestment: "",
      averagePrice: "",
      currentValue: "",
      profitLoss: "",
      profitRate: "",
      seed: "",
    },
    chartData: [],
    newsList: [],
  }),
  actions: {
    async fetchMyStock() {
      try {
        const response = await api.getMyStock();
        // console.log(response);
        this.myStock = response;
      } catch (error) {
        console.error("Failed to fetch stock:", error);
      }
    },
    updateMyStock(stockData) {
      this.myStock = stockData;
    },
    async fetchChartData() {
      try {
        const response = await api.getChartData();
        this.chartData = response;
      } catch (error) {
        console.error("Failed to fetch chart data:", error);
      }
    },
    async fetchNewsList() {
      try {
        const response = await api.getNewsList();
        this.newsList = response;
      } catch (error) {
        console.error('Failed to fetch newsList', error);
      }
    }
  },
  persist: true,
});
