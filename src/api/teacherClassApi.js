import api from '@/api';

const BASE_URL = '/api/teacher';

export default {
  // 학생 CSV 파일 업로드
  async uploadCsv(StudentCsvDTO) {
    try {
      const response = await api.post(`${BASE_URL}/class`, StudentCsvDTO, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('학생 CSV 데이터 업로드 성공:', response.data);
      return response.data;
    } catch (error) {
      console.error('학생 CSV 데이터 업로드 실패:', error);
      throw error;
    }
  },
  async getStudent() {
    try {
      const response = await api.get(`${BASE_URL}/student/list`);
      return response.data;
    } catch (error) {
      console.error('학생 목록을 불러오는 데 실패했습니다:', error);
      throw error;
    }
  },

  async registStudent(StudentDTO) {
    try {
        const response = await api.post(`${BASE_URL}/student/student-apply`, StudentDTO);
        console.log('학생 추가 성공:', response.data);
        return response.data;
    } catch (error) {
        console.error('학생 추가 실패:', error);
        throw error;
    }
},

async getJobList() {
  try {
    const response = await api.get(`${BASE_URL}/student/job-list`);
    return response.data;
  } catch (error) {
    console.error('직업 목록을 불러오는 데 실패했습니다:', error);
    throw error;
  }
},

async registJob(JobDTO) {
  try {
      const response = await api.post(`${BASE_URL}/student/job-apply`, JobDTO);
      console.log('직업 추가 성공:', response.data);
      return response.data;
  } catch (error) {
      console.error('직업 추가 실패:', error);
      throw error;
  }
},

async updateStudent(StudentDTO) {
  try {
      const response = await api.put(`${BASE_URL}/student/update`, StudentDTO);
      console.log('student update successfully', response.data);
      return response.data;
  } catch (error) {
      console.error('Failed to update student', error);
      throw error;
  }
},


};
