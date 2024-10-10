import api from '@/api';

const BASE_URL = '/api/student/home';

const headers = { 'Content-Type': 'multipart/form-data' };


export default {
    async getSeedTax() {
        const { data } = await api.get(`${BASE_URL}/weeklytax`);
        console.log('My seedtax info GET', data);
        return data;
    }
};

