<script setup>
import StudentModify from '@/components/layouts/teacher/student/StudentModify.vue';
import StudentJobModify from '@/components/layouts/teacher/student/StudentJobModify.vue';


import { computed, ref } from 'vue';
import { useCounterStore } from '@/stores/couter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

const studentModifyModalShow = ref(false);
const studentJobModifyModalShow = ref(false);

const getJobName = (jno) => {
    const job = store.jobs.find(job => job.jno === jno);
    return job ? job.name : '무직';

};

const deleteStudent = (id) => {
    store.deleteStudent(id);
}

const deleteStudentJob = (jno) => {
    store.deleteStudentJob(jno);
}

const studentModifyModal = (id) => {
    if (id) {
        studentData.value = store.students.find((student) => student.id === id);
    }
    studentModifyModalShow.value = !studentModifyModalShow.value;
}

const studentJobModifyModal = (jno) => {
    if (jno) {
        studentJobData.value = store.jobs.find((job) => job.jno === jno);
    }
    studentJobModifyModalShow.value = !studentJobModifyModalShow.value;
}

const studentData = ref('');
const studentJobData = ref('');

const newStudent = ref({
    id: '',
    name: '',
    birthday: '',
    job: '',
    seed: ''
})

const addStudentFormStatus = ref(true);

const addStudent = async () => {
    if (newStudent.value.id === '' || newStudent.value.name === '' ||
        newStudent.value.birthday === '' || newStudent.value.job === '' ||
        newStudent.value.seed === '') {
        addStudentFormStatus.value = false;
        return;
    }
    addStudentFormStatus.value = true;
    if (addStudentFormStatus.value) {
        await store.students.push({ ...newStudent.value });

        newStudent.value.id = '';
        newStudent.value.name = '';
        newStudent.value.birthday = '';
        newStudent.value.job = '';
        newStudent.value.seed = '';
    }
}

const newJob = ref({
    jno: '',
    name: '',
    description: ''
});

const addJobFormStatus = ref(true);

const addJob = async () => {
    if (newJob.value.name === '' || newJob.value.description === '') {
        addJobFormStatus.value = false;
        return;
    }
    addJobFormStatus.value = true;
    if (addJobFormStatus.value) {
        newJob.value.jno = parseInt(store.getJobsLastJno) + 1;
        await store.jobs.push({ ...newJob.value });

        newJob.value.name = '';
        newJob.value.description = '';
    }
}

const jobs = ref([...store.jobs]);

</script>
<!-- 학생관리 -->
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
                            <div v-for="student in store.students" :key="student.id" class="row text-center py-2 m-0"
                                style="width:100%">
                                <div class="col-1">
                                    <span class="fs-6 text-dark">{{ student.id }}</span>
                                </div>
                                <div class="col-2 text-center">
                                    <span class="fs-6 text-dark">{{ student.name }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <span class="fs-6 text-dark">{{ getJobName(student.job) }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <span class="fs-6 text-dark">{{ student.seed }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <button class="btn btn-primary px-3 py-2 me-2"
                                        @click="studentModifyModal(student.id)">수정</button>
                                    <button class="btn btn-danger px-3 py-2 me-3"
                                        @click="deleteStudent(student.id)">이별</button>
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
                                <input type="text" id="sno" class="form-control" v-model="newStudent.id"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">이름</label>
                                <input type="text" id="name" class="form-control" v-model="newStudent.name" required>
                            </div>
                            <div class="mb-3">
                                <label for="birthday" class="form-label">생일</label>
                                <input type="date" id="birthday" class="form-control" v-model="newStudent.birthday"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="jobs" class="form-label">직업</label><br>
                                <select class="form-select" name="jobs" id="jobs" v-model="newStudent.job" required>
                                    <option value="">선택하세요</option>
                                    <option v-for="job in store.jobs" :key="job.jno" :value="job.jno">{{ job.name }}
                                    </option>
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
                            <div v-for="job in store.jobs" :key="job.jno" class="row text-center py-2 m-0"
                                style="width:100%">
                                <div class="col-3">
                                    <span class="fs-6 text-dark">{{ job.name }}</span>
                                </div>
                                <div class="col-6 text-center">
                                    <span class="fs-6 text-dark">{{ job.description }}</span>
                                </div>
                                <div class="col-3 text-center">
                                    <button class="btn btn-primary px-3 py-2 me-2"
                                        @click="studentJobModifyModal(job.jno)">수정</button>
                                    <button class="btn btn-danger px-3 py-2 me-3" type="button"
                                        @click="deleteStudentJob(job.jno)">삭제</button>
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
                            <input type="text" id="job-description" class="form-control" v-model="newJob.description"
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

    <StudentModify v-if="studentModifyModalShow" @close="studentModifyModal" :student="studentData" :jobs="jobs" />
    <StudentJobModify v-if="studentJobModifyModalShow" @close="studentJobModifyModal" :job="studentJobData" />
</template>

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