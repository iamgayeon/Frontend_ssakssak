import { defineStore } from "pinia";
import api from "@/api/teacherRewardApi";

export const useRewardStore = defineStore("reward", {
  state: () => ({
    rewardList: [],
    rewardGiveList: [],
    studentList: [],
  }),
  actions: {
    async fetchRewardList() {
      try {
        const response = await api.getRewardList();
        // console.log(response);
        this.rewardList = response;
      } catch (error) {
        console.error("Failed to fetch reward:", error);
        throw error;
      }
    },
    async fetchStudentList() {
      try {
        const response = await api.getStudentList();
        this.studentList = response;
      } catch (error) {
        console.error("Failed to fetch studentList:", error);
        throw error;
      }
    },
    async fetchRewardGiveList() {
      try {
        const response = await api.getRewardGiveList();
        this.rewardGiveList = response;
      } catch (error) {
        console.error("Failed to fetch rewardGiveList", error);
        throw error;
      }
    },
  },
  persist: true,
});
