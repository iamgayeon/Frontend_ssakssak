import api from "@/api";

const BASE_URL = "/api/teacher/reward";

const headers = { "Content-Type": "multipart/form-data" };

export default {
  async getRewardList() {
    try {
      const { data } = await api.get(`${BASE_URL}/list`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed fetch reward list", error);
    }
  },

  async addReward(request) {
    try {
      const { data } = await api.post(`${BASE_URL}/apply`, request);
      return data;
    } catch (error) {
      console.error("Failed reward add");
      throw error;
    }
  },

  async deleteReward(id) {
    try {
      const { data } = await api.post(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async getStudentList() {
    try {
      const { data } = await api.get(`${BASE_URL}/student-list`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async sendRewardToStudent(request) {
    try {
      const response = await api.post(`${BASE_URL}/pay`, request);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async getRewardGiveList(params) {
    try {
      const { data } = await api.get(`${BASE_URL}/pay/list`, {params});
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
