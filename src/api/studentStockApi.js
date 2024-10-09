import api from "@/api";

const BASE_URL = "/api/student/stock";

const headers = { "Content-Type": "multipart/form-data" };

export default {
  async getNewsList() {
    const { data } = await api.get(`${BASE_URL}/news`);
    console.log("NEWS LIST GET", data);
    return data;
  },

  async updateNewsStatus(newsId) {
    try {
      const response = await api.put(`${BASE_URL}/news/${newsId}/status`, {
        status: "n",
      });
      console.log("News status updated:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating news status:", error);
      throw error;
    }
  },

  async getMyStock() {
    const { data } = await api.get(`${BASE_URL}/my-stock`);
    console.log("get my stock: ", data);
    return data;
  },
};
