import api from "@/api";

const BASE_URL = "/api/teacher/stock";

const headers = { "Content-Type": "multipart/form-data" };

export default {
    async getStockNewsList() {
        const { data } = await api.get(`${BASE_URL}/news/list`);
        return data;
    },

    async addRate(request) {
        try {
            const response = await api.post(`${BASE_URL}/rate-apply`, request.value);
            console.log('등락률 추가 결과', response);
        } catch (error) {
            throw error;
        }
    },

    async addNews(request) {
        try {
            const response = await api.post(`${BASE_URL}/news`, request);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async delete(id) {
        try {
            const response = await api.post(`${BASE_URL}/news/${id}`);

            return response;
        } catch (error) {
            throw error;
        }
    }
}