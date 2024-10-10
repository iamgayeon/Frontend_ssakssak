import api from '@/api';

const BASE_URL = '/api/teacher/bank';

const headers = { 'Content-Type': 'multipart/form-data' };


export default {
    async getWeeklyTaxTotal() {
        const { data } = await api.get(`${BASE_URL}/tax-week`);
        console.log('My seedtax info GET', data);
        return data;
    },

    async updateTax(taxData) {
        try {
            const response = await api.put(`${BASE_URL}/tax-policy/apply`, taxData);
            console.log('Treasury updated successfully', response.data);
            return response.data;
        } catch (error) {
            console.error('Failed to update Treasury', error);
            throw error;
        }
    },
};



