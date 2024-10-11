import { defineStore } from "pinia";
import api from "@/api/teacherRewardApi";

export const useRewardStore = defineStore("reward", {
    state: () => ({        
        rewardList: [],
    }),
    actions: {
        async fetchRewardList() {
            try {
                const response = await api.getRewardList();
                // console.log(response);
                this.rewardList = response;
            } catch (error) {
                console.error("Failed to fetch reward:", error);
            }
        }
    },
    persist: true,
});