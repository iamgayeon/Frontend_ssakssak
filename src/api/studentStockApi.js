import api from '@/api';

const BASE_URL = '/api/student/stock';

const headers = { 'Content-Type': 'multipart/form-data' };


export default {
    async getNewsList() {
        const {data} = await api.get(`${BASE_URL}/news`);
        console.log('NEWS LIST GET', data);
        return data;
    }
};

