import { defineStore } from "pinia";
import api from "@/api/teacherBankApi";
import jobApi from "@/api/teacherClassApi";

export const useBankStore = defineStore("bank", {
  state: () => ({
    savingList: [],
    jobList: [],
  }),
  actions: {
    async fetchSavingList() {
      try {
        const response = await api.getSavingList();
        console.log(response);
        this.savingList = response;
      } catch (error) {
        console.log("Failed fetch savingList", error);
        throw error;
      }
    },
    async fetchJobList() {
      try {
        const response = await jobApi.getJobList();
        console.log(response);
        this.jobList = response;
      } catch (error) {
        console.error("Failed fetch JobList", error);
        throw error;
      }
    },
  },
  persist: true,
});
