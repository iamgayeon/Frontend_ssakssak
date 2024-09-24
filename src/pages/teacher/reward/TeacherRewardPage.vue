<script setup>
import { ref } from 'vue';

const rewardName = ref('');
const rewardAmount = ref('');

const addReward = () => {
    const reward = {
        name: rewardName.value,
        amount: rewardAmount.value
    };
    rewardList.value.push(reward);

    rewardName.value = '';
    rewardAmount.value = '';
}

const deleteReward = (idx) => {
    rewardList.value = rewardList.value.filter((reward) => rewardList.value[idx] !== reward)
}

// 선택된 학생들을 저장할 배열
const selectedStudents = ref([]);
const selectedReward = ref('');

const toggleRewardSelect = (idx) => {
    selectedReward.value = rewardList.value[idx];
}

const toggleStudentSelection = (student) => {
    const index = selectedStudents.value.findIndex(
        (selected) => selected.sno === student.sno
    );

    if (index > -1) {
        selectedStudents.value.splice(index, 1);
    } else {
        selectedStudents.value.push(student);
    }
};

const toggleAllSelected = () => {
    selectedStudents.value = [...students.value];
}

const toggleAllDeselect = () => {
    selectedStudents.value = []
}
const rewardList = ref([
    {
        name: '선생님을 매우 잘 도와줌',
        amount: '300',
    },
    {
        name: '친구에게 모르는 문제를 알려줌',
        amount: '300',
    },
    {
        name: '선생님을 매우 잘 도와줌',
        amount: '300',
    },
    {
        name: '선생님을 매우 잘 도와줌',
        amount: '300',
    },
])

const students = ref([
    {
        sno: '1',
        name: '박민주',
        seed: '3000',
    },
    {
        sno: '2',
        name: '한가연',
        seed: '1000',
    },
    {
        sno: '3',
        name: '정인겸',
        seed: '5000',
    },
    {
        sno: '4',
        name: '고대호',
        seed: '2400',
    },
    {
        sno: '5',
        name: '유진',
        seed: '1200',
    },
])

const test = (reward) => {
    alert(reward.value);
}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <!-- 리워드 목록 카드 -->
            <div class="col-12 col-md-6 mb-4">
                <div class="card shadow-sm p-2">
                    <div class="">
                        <span class="fs-3 fw-bold ms-3">현재 리워드 목록</span>
                    </div>
                    <div class="card-body">
                        <table class="table table-borderless">
                            <thead class="table-secondary fs-5">
                                <tr>
                                    <th>리워드 목록</th>
                                    <th>리워드 금액</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(reward, idx) in rewardList" :key="idx" >
                                    <td @click="toggleRewardSelect(idx)">{{ reward.name }}</td>
                                    <td>{{ reward.amount }} 씨드</td>
                                    <td><button type="button" class="btn btn-sm btn-outline-danger"
                                            @click="deleteReward(idx)">
                                            <i class="bi bi-trash"></i>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                        <form @submit.prevent="addReward">
                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                <label class="form-label fs-5 fw-bold reward-label ">리워드 명</label>
                                <input type="text" class="form-control reward-input" v-model="rewardName"
                                    placeholder="ex) 밥을 남기지 않고 잘 먹어요">
                            </div>
                            <div class="d-flex align-items-center reward-add-box">
                                <label class="form-label fs-5 fw-bold reward-amount">금액</label>
                                <input type="text" class="form-control me-2 w-50 text-end" v-model="rewardAmount"
                                    placeholder="ex) 300"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
                                <span class="me-4"> 씨드 </span>
                                <button class="btn btn-success" type="submit">리워드 추가</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- 학생 목록 카드 -->
            <div class="col-12 col-md-6 mb-4">
                <div class="card shadow-sm">
                    <div class="d-flex justify-content-between mt-3 px-4">
                        <span class="fs-3 fw-bold">학생 목록</span>
                        <div>
                            <button class="btn btn-primary me-2" @click="toggleAllSelected">전체선택</button>
                            <button class="btn btn-outline-primary" @click="toggleAllDeselect">전체선택해제</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-borderless">
                            <thead class="table-secondary fs-5">
                                <tr>
                                    <th>선택</th>
                                    <th>번호</th>
                                    <th>이름</th>
                                    <th>보유 씨드</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="student in students" :key="student.sno">
                                    <td><input type="checkbox" :value="student"
                                            @change="toggleStudentSelection(student)"
                                            :checked="selectedStudents.includes(student)" /></td>
                                    <td>{{ student.sno }}</td>
                                    <td>{{ student.name }}</td>
                                    <td>{{ student.seed }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="m-4">
                <div class="mb-2">
                    <span class="fs-3 fw-bold">리워드 적용 학생</span>
                </div>
                <div class="d-flex">
                    <div v-for="(student, idx) in selectedStudents" :key="idx" class="custom-btn std-name me-2">
                        {{ student.name }}
                    </div>
                </div>
            </div>
            <div class="mx-4">
                <div class="mb-2">
                    <span class="fs-3 fw-bold">적용 리워드</span>
                </div>
                <div class="custom-btn std-name me-2">{{ selectedReward.name }}</div>
            </div>
            <div class="text-end p-3">
                <button class="btn btn-warning">리워드 지급</button>
            </div>
        </div>

        <div class="card">
            <div>
                <span>리워드 지급 목록</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 90vw;
}

.reward-input {
    width: 80%;
}

.reward-label,
.reward-amount {
    width: 20%;
}

.reward-add-box {
    position: relative;
}

.reward-add-box button {
    position: absolute;
    right: 0;
}

.custom-btn {
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}


/* 16 */
.std-name {
    border: none;
    color: #000;
}

.std-name:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow:
        -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
}

.std-name:hover {
    color: #000;
}
</style>