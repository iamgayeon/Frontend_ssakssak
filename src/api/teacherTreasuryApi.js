import api from '@/api';

const BASE_URL = '/api/teacher/home';

const headers = { 'Content-Type': 'multipart/form-data' };


export default {
    async Treasury() {
        const { data } = await api.get(`${BASE_URL}/total`);
        console.log('My Treasury info GET', data);
        return data;
    },

     // 주급 지급 API 호출
    async paySalary(studentSalaryDTO) {
        try {
            const response = await api.post(`${BASE_URL}/pay-salary`, studentSalaryDTO);
            console.log('주급 지급 성공:', response.data);
            return response.data;
        } catch (error) {
            console.error('주급 지급 실패:', error);
            throw error;
        }
    }
};

