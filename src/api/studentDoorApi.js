import api from '@/api';

const BASE_URL = '/api/student/home';

const headers = { 'Content-Type': 'multipart/form-data' };

export default {
    async getSeedRankingThree() {
        const {data} = await api.get(`${BASE_URL}/seedranking`);
        console.log('Seed ranking three students:', data);
        return data;
    }
};
