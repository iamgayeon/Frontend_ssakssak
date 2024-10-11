import api from "@/api";

const BASE_URL = "/api/teacher/reward";

const headers = { "Content-Type": "multipart/form-data" };

export default {
    async getRewardList() {
        try {
            const {data} = await api.get(`${BASE_URL}/list`);
            console.log(data);
            return data;
        } catch(error) {
            console.error('Failed fetch reward list' , error);
        }
    },

    async addReward(request) {
        try {
            // console.log(request);
            const {data} = await api.post(`${BASE_URL}/apply`, request);
            return data;
        } catch (error) {
            console.error('Failed reward add');
            throw error;
        }
    },

    async deleteReward(id) {
        try {
            const {data} = await api.post(`${BASE_URL}/${id}`);
            return data;
        } catch (error) {
            throw error;
        }
    }
}