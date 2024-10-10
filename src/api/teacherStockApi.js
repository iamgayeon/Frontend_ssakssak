import api from "@/api";

const BASE_URL = "/api/teacher/stock";

const headers = { "Content-Type": "multipart/form-data" };

export default {
    async getStockNewsList() {
        const {data} = await api.get(`${BASE_URL}/news/list`);
        return data;
    }
}