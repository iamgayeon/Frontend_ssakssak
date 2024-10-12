<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-8" style="overflow-y: hidden;">
                <div class="card std-list px-3" style="max-height: 100%;">
                    <div class="d-flex mt-4 ms-2">
                        <span class="h4">학생 목록</span>
                    </div>
                    <div class="mt-3 text-center" style="height: 100%">
                        <div class="row m-0 mb-2 pe-3" style="width: 100%">
                            <div class="col-1 text-center">
                                <span class="fs-5">번호</span>
                            </div>
                            <div class="col-2 text-center">
                                <span class="fs-5">이름</span>
                            </div>
                            <div class="col-3 text-center">
                                <span class="fs-5">직업</span>
                            </div>
                            <div class="col-3 text-center">
                                <span class="fs-5">보유 씨드</span>
                            </div>
                            <div class="col-3 text-center">
                                <span class="fs-5">수정 / 이별</span>
                            </div>
                        </div>
                        <div class="std-list-wrap" style="overflow-y: scroll;">
                            <div v-for="student in students" :key="student.id" class="row text-center py-2 m-0"
                                style="width:100%">
                                <div class="col-1">
                                    <span class="fs-6 text-dark">{{ student.stdNum }}</span>
                                </div>
                                <div class="col-2 text-center">
                                    <span class="fs-6 text-dark">{{ student.stdName }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <span class="fs-6 text-dark">{{ getJobName(student.jobId) }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <span class="fs-6 text-dark">{{ student.seed }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <button class="btn btn-primary px-3 py-2 me-2"
                                        @click="studentModifyModal(student)">수정</button>
                                    <button class="btn btn-danger px-3 py-2 me-3"
                                        @click="deleteStudent(student.stdId)">이별</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 shadow-sm">
                <div class="card std-list" style="max-height: 100%;">
                  <div class="p-4">
                    <h4 class="mb-4">새 친구가 왔어요</h4>
                    <form @submit.prevent="addStudent"
                          :class="addStudentFormStatus ? 'needs-validation' : 'needs-validation was-validated'"
                          style="height:100%" novalidate>
                      <div class="mb-3">
                        <label for="sno" class="form-label">번호</label>
                        <input type="text" id="sno" class="form-control" v-model="newStudent.stdNum"
                               oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                               required>
                      </div>
                      <div class="mb-3">
                        <label for="name" class="form-label">이름</label>
                        <input type="text" id="name" class="form-control" v-model="newStudent.stdName" required>
                      </div>
                      <div class="mb-3">
                        <label for="birthday" class="form-label">생일</label>
                        <input type="date" id="birthday" class="form-control" v-model="newStudent.stdBirth" required>
                      </div>
                      <div class="mb-3">
                        <label for="jobs" class="form-label">직업</label><br>
                        <select class="form-select" name="jobs" id="jobs" v-model="newStudent.jobId" required>
                          <option value="">선택하세요</option>
                          <option v-for="job in jobs" :key="job.jobId" :value="job.jobId">{{ job.jobName }}</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="title" class="form-label">씨드</label>
                        <input type="text" id="title" class="form-control" v-model="newStudent.seed"
                               oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                               required>
                      </div>
                      <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary w-100">등록</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        </div>
        <div class="mt-4">
            <div class="card job-list px-3" style="max-height: 100%;">
                <div class="d-flex mt-4 ms-2">
                    <span class="h4">직업 목록</span>
                </div>
                <div class="mt-2 text-center" style="height: 100%">
                    <div class="row m-0 mb-2 pe-4" style="width: 100%">
                        <div class="col-3 text-center">
                            <span class="fs-4">직업명</span>
                        </div>
                        <div class="col-6 text-center">
                            <span class="fs-4">상세설명</span>
                        </div>
                        <div class="col-3 text-center">
                            <span class="fs-4">수정 / 삭제</span>
                        </div>
                    </div>
                    <div class="job-list-wrap pb-4">
                        <div class="job-list-items"  style="overflow-y: scroll; height: 100%;">
                            <div v-for="job in jobs" :key="job.jobId" class="row text-center py-2 m-0"
                                style="width:100%">
                                <div class="col-3">
                                    <span class="fs-6 text-dark">{{ job.jobName }}</span>
                                </div>
                                <div class="col-6 text-center">
                                    <span class="fs-6 text-dark">{{ job.jobContent }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <button class="btn btn-primary px-3 py-2 me-2"
                                        @click="studentJobModifyModal(job.jno)">수정</button>
                                    <button class="btn btn-danger px-3 py-2 me-3" type="button"
                                        @click="deleteStudentJob(job.jobId)">삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="card std-list" style="max-height: 100%;">
                <div class="p-4">
                    <h4 class="mb-4">새 직업 등록</h4>
                    <form @submit.prevent="addJob"
                          :class="addJobFormStatus ? 'needs-validation' : 'needs-validation was-validated'"
                          style="height:100%" novalidate>
                        <div class="mb-3">
                            <label for="job-name" class="form-label">직업명</label>
                            <input type="text" id="job-name" class="form-control" v-model="newJob.name" required>
                        </div>
                        <div class="mb-3">
                            <label for="job-description" class="form-label">상세설명</label>
                            <input type="text" id="job-description" class="form-control" v-model="newJob.description" required>
                        </div>
                        <div class="mb-3">
                            <label for="job-isPrime" class="form-label">우대금리</label>
                            <input type="text" id="job-isPrime" class="form-control" v-model="newJob.isPrime" required>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary w-100">등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <StudentModify v-if="studentModifyModalShow" @close="studentModifyModal" :student="selectedStudent" :jobs="jobs" />
    <StudentJobModify v-if="studentJobModifyModalShow" @close="studentJobModifyModal" :job="studentJobData" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import StudentModify from '@/components/layouts/teacher/student/StudentModify.vue';
import StudentJobModify from '@/components/layouts/teacher/student/StudentJobModify.vue';
import apiService from '@/api/teacherClassApi'; // API 파일 import
import { useCounterStore } from '@/stores/couter';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
console.log(auth.roles);
// Pinia store 사용
const store = useCounterStore();

// 모달 상태 관리
const studentModifyModalShow = ref(false);
const studentJobModifyModalShow = ref(false);

// 학생 데이터 관리
const students = ref([]);
const studentData = ref('');
const studentJobData = ref('');
const jobs = ref([...store.jobs]);
const selectedStudent = ref(null); 

// 학생 데이터 가져오는 함수
const fetchStudents = async () => {
    try {
        const data = await apiService.getStudent(); // API 호출
        console.log('학생 데이터:', data); // API 응답 데이터 확인
        students.value = data; // students에 할당
    } catch (error) {
        console.error('학생 데이터를 불러오는데 실패했습니다:', error);
    }
};
const fetchjobs = async () => {
    try {
        const data = await apiService.getJobList(); // API 호출
        console.log('직업 데이터:', data); // API 응답 데이터 구조 확인
        jobs.value = data; // jobs에 할당
    } catch (error) {
        console.error('직업 데이터를 불러오는데 실패했습니다:', error);
    }
};

const getJobName = (jobId) => {
    // jobs 배열에서 student의 jobId와 매칭되는 직업을 찾음
    const job = jobs.value.find(job => job.jobId === jobId);
    // 매칭된 직업이 있으면 job.jobName 반환, 없으면 '무직' 반환
    return job ? job.jobName : '무직';
};

const deleteStudentJob = (id) => {
    // students 배열에서 해당 id를 가진 학생을 찾아서 삭제
    const index = jobs.value.findIndex(job => job.jobId === id);
    if (index !== -1) {
        jobs.value.splice(index, 1);  // 배열에서 해당 학생 삭제
        console.log(`직업 ${id}가 삭제되었습니다.`);
    } else {
        console.error(`직업을 ${id}를 찾을 수 없습니다.`);
    }
};


const deleteStudent = (id) => {
    // students 배열에서 해당 id를 가진 학생을 찾아서 삭제
    const index = students.value.findIndex(student => student.stdId === id);
    if (index !== -1) {
        students.value.splice(index, 1);  // 배열에서 해당 학생 삭제
        console.log(`학생 ID ${id}가 삭제되었습니다.`);
    } else {
        console.error(`학생 ID ${id}를 찾을 수 없습니다.`);
    }
};

// 학생 수정 모달
const studentModifyModal  = (student) => {
    selectedStudent.value = student;
    studentModifyModalShow.value = !studentModifyModalShow.value;
};


// 학생 직업 수정 모달
const studentJobModifyModal = (jno) => {
    if (jno) {
        studentJobData.value = store.jobs.find((job) => job.jno === jno);
    }
    studentJobModifyModalShow.value = !studentJobModifyModalShow.value;
};

// 새 친구 등록을 위한 폼 상태와 데이터 관리
const newStudent = ref({
  stdNum: '',
  stdName: '',
  stdBirth: '',
  jobId: '',
  seed: ''
});

const addStudentFormStatus = ref(true);

// 학생 등록 API 호출
const addStudent = async () => {
  if (!newStudent.value.stdNum || !newStudent.value.stdName || !newStudent.value.stdBirth || !newStudent.value.jobId || !newStudent.value.seed) {
    addStudentFormStatus.value = false; // 유효성 검사 실패 시 처리
    return;
  }

  try {
    // 학생 등록 API 호출
    const response = await apiService.registStudent(newStudent.value);
    console.log('학생 등록 성공:', response);
    
    // 등록 후 폼 초기화
    newStudent.value.stdNum = '';
    newStudent.value.stdName = '';
    newStudent.value.stdBirth = '';
    newStudent.value.jobId = '';
    newStudent.value.seed = '';
  } catch (error) {
    console.error('학생 등록 실패:', error);
  }
};

// 직업 등록 상태 관리 변수
const addJobFormStatus = ref(true);

// 새 직업 등록 데이터
const newJob = ref({
    name: '',
    description: '',
    isPrime: ''
});


// 새 직업 등록 함수
const addJob = async () => {
    try {
        // newJob 데이터를 서버에 POST 요청으로 전송
        const response = await apiService.registJob(newJob.value);
        console.log('직업 추가 성공:', response.data);

        // 서버 응답이 성공적으로 돌아오면 jobs 배열에 새 직업을 추가
        const addedJob = {
            jobId: response.data.jobId,  // 서버 응답에서 jobId 받아오기
            jobName: newJob.value.name,  // 입력한 직업명
            jobContent: newJob.value.description,  // 입력한 직업 설명
            isPrime: newJob.value.isPrime  // 입력한 우대금리 여부
        };
        jobs.value.push(addedJob); // jobs 배열에 새 직업 추가

        // 성공 시 상태 초기화
        newJob.value.name = '';
        newJob.value.description = '';
        newJob.value.isPrime = '';
        
        addJobFormStatus.value = true; // 폼 제출 상태 변경
    } catch (error) {
        console.error('직업 추가 실패:', error);
        addJobFormStatus.value = false; // 에러 시 상태 유지
    }
};

// 페이지가 로드될 때 학생 데이터를 불러옴
onMounted(() => {
    fetchStudents();
    fetchjobs();
});
</script>

<style scoped>
.std-list {
    height: 100%;
    max-height: 550px;
}

.std-list-wrap::-webkit-scrollbar,
.job-list-items::-webkit-scrollbar {
    width: 10px;
}

.job-list-items::-webkit-scrollbar-thumb,
.std-list-wrap::-webkit-scrollbar-thumb {
    background: rgb(255, 187, 187);
    border-radius: 10px;
}

.job-list-wrap::-webkit-scrollbar-button,
.job-list-items::-webkit-scrollbar-button {
    display: none;
}

.std-list-wrap {
    height: 450px;
}

.job-list-wrap {
    height: 400px;
}

.btn-primary {
    background-color: #00A3FF;
    border-color: #00A3FF;
}

.btn-outline-primary {
    color: #00A3FF;
    border-color: #00A3FF;
    --ar-btn-hover-bg: white;
}

.btn-outline-primary:hover {
    color: white;
    background-color: #00A3FF;
}

.btn-outline-primary:after {
    background-color: #ffffff;
    color: #00A3FF;
}
</style>
