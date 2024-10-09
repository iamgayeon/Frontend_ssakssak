import api from '@/api';

const BASE_URL = '/api/student/coupon';

export default {
    async getCouponlist() {
        try {
            const { data } = await api.get(`${BASE_URL}/list`);
            console.log('Couponlist info GET', data);
            return data;
        } catch (error) {
            console.error('Failed to fetch coupon list:', error);
            throw error;
        }
    },

    async getCouponById(cpId) {
        try {
            const { data } = await api.get(`${BASE_URL}/list/${cpId}`);
            console.log('Coupon info GET by ID', data);
            return data;
        } catch (error) {
            console.error(`Failed to fetch coupon with id ${cpId}:`, error);
            throw error;
        }
    },
};