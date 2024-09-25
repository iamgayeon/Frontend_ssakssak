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
]);

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
    {
        sno: '5',
        name: '유진',
        seed: '1200',
    },
    {
        sno: '5',
        name: '유진',
        seed: '1200',
    },
    {
        sno: '5',
        name: '유진',
        seed: '1200',
    },
    {
        sno: '5',
        name: '유진',
        seed: '1200',
    },
    {
        sno: '5',
        name: '유진',
        seed: '1200',
    },
]);

// const rewardPaymentDetails = ref([
//     {
//         date: '2024-09-11',
//         name: '박민주',
//         rewardName: '선생님을 매우 잘 도와줌',
//         reward
//     }
// ])
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-md-6 reward-list">
                <div class="card shadow-sm">
                    <div class="mt-4 ms-4">
                        <span class="fs-2 fw-bold ms-3">현재 리워드 목록</span>
                    </div>
                    <div class="card-body pt-0 mt-3">
                        <div class="d-flex row m-0 mb-2" style="width: 100%">
                            <div class="col-6 text-center">
                                <span class="h4">리워드 명</span>
                            </div>
                            <div class="col-4 text-center">
                                <span class="h4 ">금액</span>
                            </div>
                            <div class="col-2 text-center">
                                <span class="h4">삭제</span>
                            </div>
                        </div>
                        <hr>
                        <div class="reward-list-wrap d-flex align-items-center" v-if="!rewardList">
                            <div class="m-auto">
                                <h2>생성된 리워드가 없습니다.. !</h2>
                            </div>
                        </div>
                        <div class="reward-list-wrap" v-if="rewardList">
                            <div v-for="(reward, idx) in rewardList" :key="idx" class="d-flex text-center py-2"
                                style="width: 100%;">
                                <div class="col-6 text-center" style="overflow-x: auto;">
                                    <span class="fs-5 text-dark">{{ reward.name }}</span>
                                </div>
                                <div class="col-4 text-center">
                                    <span class="fs-5 text-dark">{{ reward.amount }}</span>
                                </div>
                                <div class="col-2 text-center">
                                    <button type="button" class="btn btn-sm btn-outline-danger"
                                        @click="deleteReward(idx)">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-2">
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
                                    <button class="btn btn-success px-3" type="submit">리워드 추가</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 std-list card" style="overflow-y: hidden;">
                <div class="" style="max-height: 100%;">
                    <div class="d-flex justify-content-between mt-4 ms-4">
                        <span class="fs-2 fw-bold ms-3">학생 목록</span>
                        <div class="p-0 me-4">
                            <button class="btn btn-primary me-2 py-2" @click="toggleAllSelected">전체선택</button>
                            <button class="btn btn-outline-primary me-2 px-3 py-2"
                                @click="toggleAllDeselect">전체선택해제</button>
                        </div>
                    </div>
                    <div class="p-0 mt-3 text-center d-flex flex-column" style="height: 100%">
                        <div class="d-flex row m-0 mb-2" style="width: 100%">
                            <div class="col-2 text-center">
                                <span class="h4">선택</span>
                            </div>
                            <div class="col-2 text-center">
                                <span class="h4 ">번호</span>
                            </div>
                            <div class="col-4 text-center">
                                <span class="h4">이름</span>
                            </div>
                            <div class="col-4 text-center">
                                <span class="h4">보유 씨드</span>
                            </div>
                        </div>
                        <div class="std-list-wrap" style="overflow-y: scroll;">
                            <div v-for="student in students" :key="student.sno" class="d-flex text-center py-2"
                                style="width: 100%;">
                                <div class="col-2">
                                    <input type="checkbox" :value="student"
                                            @change="toggleStudentSelection(student)"
                                            :checked="selectedStudents.includes(student)" />
                                </div>
                                <div class="col-2 text-center" style="overflow-x: auto;">
                                    <span class="fs-5 text-dark">{{ student.sno }}</span>
                                </div>
                                <div class="col-4 text-center">
                                    <span class="fs-5 text-dark">{{ student.name }}</span>
                                </div>
                                <div class="col-4 text-center">
                                    <span class="fs-5 text-dark">{{ student.seed }}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
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
                <div class="custom-btn std-name me-2" v-if="selectedReward">{{ selectedReward.name }}</div>
            </div>
            <div class="text-end p-3">
                <button class="btn btn-warning">리워드 지급</button>
            </div>
        </div>

        <div class="card">
            <div>
                <span>리워드 지급 목록</span>
            </div>
            <div>
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
                            <td><input type="checkbox" :value="student" @change="toggleStudentSelection(student)"
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
</template>

<style scoped>
.container {
    max-width: 80vw;
}

.reward-list, .std-list {
    height: 500px;
    max-height: 500px;
}

.reward-list-wrap {
    height: 200px;
    max-height: 200px;
    overflow-y: scroll;
}

.reward-list-wrap::-webkit-scrollbar,
.std-list-wrap::-webkit-scrollbar {
    width: 10px;
}

.reward-list-wrap::-webkit-scrollbar-thumb,
.std-list-wrap::-webkit-scrollbar-thumb {
    background: rgb(255, 187, 187);
    border-radius: 10px;
}

.reward-list-wrap::-webkit-scrollbar-button,
.std-list-wrap::-webkit-scrollbar-button {
    display: none;
}

.std-list-wrap {
    height: 340px;
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

.btn-primary {
    background-color: #00A3FF; 
    border-color: #00A3FF ;
}

.btn-outline-primary {
    color: #00A3FF;
    border-color: #00A3FF ;
    --ar-btn-hover-bg: white;

}

.btn-outline-primary:hover {
    color: white;
}

.btn-outline-primary:after {
    background-color: #ffffff;
    color: white;
}

.btn:hover {
    border-color: #00A3FF;
    background-color: #00A3FF;
}

</style>