import { defineStore } from "pinia";
import api from "@/api/teacherBankApi";
import stApi from "@/api/studentBankApi";
import jobApi from "@/api/teacherClassApi";

export const useBankStore = defineStore("bank", {
  state: () => ({
    savingList: [],
    jobList: [],
    depositList: [],
    myDepositList: [],
    mySavingList: [],
    depositAccount: "",
  }),
  actions: {
    async fetchSavingList() {
      try {
        const response = await api.getSavingList();
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
    async fetchDepositList() {
      try {
        const response = await api.getDepositList();
        this.depositList = response;
      } catch (error) {
        throw error;
      }
    },
    async fetchDepositAccount() {
      try {
        const response = await stApi.getDepositAccount();
        this.myDepositList = response;
      } catch (error) {
        throw error;
      }
    },
    async fetchSavingAccount() {
      try {
        const response = await stApi.getSavingAccount();
        this.mySavingList = response;
      } catch (error) {
        throw error;
      }
    },
  },
  persist: true,
});
