<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRewardStore } from '@/stores/rewardStore';
import api from '@/api/teacherRewardApi';

const rewardStore = useRewardStore();
onMounted(() => {
    rewardStore.fetchRewardList();
})
const rewardList = computed(() => rewardStore.rewardList);

const rewardName = ref('');
const rewardSeed = ref('');

const addReward = async () => {
    try {
        const reward = {
            reward_name: rewardName.value,
            reward_seed: rewardSeed.value
        };
    
        const response = await api.addReward(reward);
        console.log(response);
        rewardName.value = '';
        rewardSeed.value = '';
        rewardStore.fetchRewardList();
    } catch (error) {
        console.log(error);
    }
}

const deleteReward = async (id) => {
    const response = await api.deleteReward(id);
    rewardStore.fetchRewardList();

}

// 선택된 학생들을 저장할 배열
const selectedStudents = ref([]);
const selectedReward = ref(null);

const toggleRewardSelect = (id) => {
    selectedReward.value = rewardList.value.find(reward => reward.rewardId === id);
}

const toggleRewardDeselect = () => {
    selectedReward.value = '';
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
        sno: '6',
        name: '김유진',
        seed: '1200',
    },
    {
        sno: '7',
        name: '최유진',
        seed: '1200',
    },
    {
        sno: '8',
        name: '박유진',
        seed: '1200',
    },
    {
        sno: '9',
        name: '이유진',
        seed: '1200',
    },
    {
        sno: '10',
        name: '소유진',
        seed: '1200',
    },
]);

const rewardGiveRecords = ref([
    { date: '2024-09-26', student_name: '김철수', reward_name: '교실 청소 도우미', reward_seed: 150 },
    { date: '2024-09-25', student_name: '이영희', reward_name: '쓰레기 줍기', reward_seed: 100 },
    { date: '2024-09-24', student_name: '박민수', reward_name: '친구 도와주기', reward_seed: 200 },
    { date: '2024-09-23', student_name: '최정훈', reward_name: '질서 잘 지키기', reward_seed: 120 },
    { date: '2024-09-22', student_name: '정예진', reward_name: '책 읽기 시간 참여', reward_seed: 180 },
    { date: '2024-09-21', student_name: '강현우', reward_name: '학습 도구 정리', reward_seed: 130 },
    { date: '2024-09-20', student_name: '송하나', reward_name: '조용한 자습 시간 유지', reward_seed: 170 },
    { date: '2024-09-19', student_name: '문태수', reward_name: '교실 장식 도움', reward_seed: 140 },
    { date: '2024-09-18', student_name: '임유리', reward_name: '특별 발표 참여', reward_seed: 190 },
    { date: '2024-09-17', student_name: '최동혁', reward_name: '학교 행사 자원봉사', reward_seed: 160 },
    { date: '2024-09-16', student_name: '김철수', reward_name: '교실 청소 도우미', reward_seed: 150 },
    { date: '2024-09-15', student_name: '이영희', reward_name: '쓰레기 줍기', reward_seed: 100 },
    { date: '2024-09-14', student_name: '박민수', reward_name: '친구 도와주기', reward_seed: 200 },
    { date: '2024-09-13', student_name: '최정훈', reward_name: '질서 잘 지키기', reward_seed: 120 },
    { date: '2024-09-12', student_name: '정예진', reward_name: '책 읽기 시간 참여', reward_seed: 180 },
    { date: '2024-09-11', student_name: '강현우', reward_name: '학습 도구 정리', reward_seed: 130 },
    { date: '2024-09-10', student_name: '송하나', reward_name: '조용한 자습 시간 유지', reward_seed: 170 },
    { date: '2024-09-09', student_name: '문태수', reward_name: '교실 장식 도움', reward_seed: 140 },
    { date: '2024-09-08', student_name: '임유리', reward_name: '특별 발표 참여', reward_seed: 190 },
    { date: '2024-09-07', student_name: '최동혁', reward_name: '학교 행사 자원봉사', reward_seed: 160 }
]);

const visibleRewardsCount = ref(10);

const visibleRewards = computed(() => {
    return rewardGiveRecords.value.slice(0, visibleRewardsCount.value);
})

const canLoadMore = computed(() => {
    return visibleRewardsCount.value < rewardGiveRecords.value.length;
})

const loadMore = () => {
    visibleRewardsCount.value += 10;
}



</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-md-6 reward-list">
                <div class="card shadow-sm" style="height:100%">
                    <div class="mt-4 ms-4">
                        <span class="fs-2 fw-bold ms-3">현재 리워드 목록</span>
                    </div>
                    <div class="card-body pt-0 mt-3">
                        <div class="d-flex row m-0 mb-2 pe-3" style="width: 100%">
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
                            <div v-for="(reward, idx) in rewardList" :key="reward.rewardId"
                                class="d-flex text-center py-2 list-item" style="width: 100%;">
                                <div class="col-6 text-center reward-name" @click="toggleRewardSelect(reward.rewardId)">
                                    <span class="fs-5 text-dark">{{ reward.rewardName }}</span>
                                </div>
                                <div class="col-4 text-center">
                                    <span class="fs-5 text-dark">{{ reward.rewardSeed }} 씨드</span>
                                </div>
                                <div class="col-2 text-center pe-2">
                                    <button type="button" class="btn btn-sm btn-outline-danger"
                                        @click="deleteReward(reward.rewardId)">
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
                                    <input type="text" class="form-control me-2 w-50 text-end" v-model="rewardSeed"
                                        placeholder="ex) 300"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
                                    <span class="me-4"> 씨드 </span>
                                    <button class="btn btn-primary px-3" type="submit">리워드 추가</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 std-list card" style="overflow-y: hidden;">
                <div style="max-height: 100%;">
                    <div class="d-flex justify-content-between mt-4 ms-4">
                        <span class="fs-2 fw-bold ms-1">학생 목록</span>
                        <div class="p-0 me-4">
                            <button class="btn btn-primary me-2 py-2" @click="toggleAllSelected">전체선택</button>
                            <button class="btn btn-outline-primary me-2 px-3 py-2"
                                @click="toggleAllDeselect">전체선택해제</button>
                        </div>
                    </div>
                    <div class="p-0 mt-3 text-center d-flex flex-column" style="height: 100%">
                        <div class="d-flex row m-0 mb-2 pe-2" style="width: 100%">
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
                                    <input type="checkbox" :value="student" @change="toggleStudentSelection(student)"
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
                <div class="mt-3 ms-2">
                    <span class="fs-3 fw-bold">리워드 적용 학생</span>
                </div>
                <div class="d-flex mt-2 ms-3">
                    <div v-for="(student, idx) in selectedStudents" :key="idx" class="custom-btn cyan me-2"
                        @click="toggleStudentSelection(student)">
                        {{ student.name }}
                    </div>
                </div>
            </div>
            <div class="mx-4">
                <div class="mt-3 ms-2">
                    <span class="fs-3 fw-bold">적용 리워드</span>
                </div>
                <div class="custom-btn blue mt-2 ms-3 d-inline-block " v-if="selectedReward"
                    @click="toggleRewardDeselect">{{ selectedReward.rewardName }}</div>
            </div>
            <div class="text-end p-3">
                <button class="btn btn-primary">리워드 지급</button>
            </div>
        </div>

        <div class="card mt-3">
            <div class="mt-4 ms-4">
                <span class="fs-2 fw-bold ms-3">리워드 지급 목록</span>
            </div>
            <div>
                <div class="p-0 mt-3 d-flex flex-column" style="height: 100%">
                    <div class="d-flex row m-0 mb-2 mx-auto" style="width: 90%">
                        <div class="col-3 text-center">
                            <span class="h4">날짜</span>
                        </div>
                        <div class="col-2 text-center">
                            <span class="h4 ">이름</span>
                        </div>
                        <div class="col-5 text-center">
                            <span class="h4">리워드명</span>
                        </div>
                        <div class="col-2 text-center">
                            <span class="h4">금액</span>
                        </div>
                    </div>
                    <div>
                        <div v-for="(record, idx) in visibleRewards" :key="idx" class="d-flex py-2 mx-auto"
                            style="width: 90%;">
                            <div class="col-3 text-center">
                                <span class="fs-5 text-dark">{{ record.date }}</span>
                            </div>
                            <div class="col-2 text-center" style="overflow-x: auto;">
                                <span class="fs-5 text-dark">{{ record.student_name }}</span>
                            </div>
                            <div class="col-5 text-center">
                                <span class="fs-5 text-dark">{{ record.reward_name }}</span>
                            </div>
                            <div class="col-2 text-center">
                                <span class="fs-5 text-dark">{{ record.reward_seed }} 씨드</span>
                            </div>
                        </div>

                        <button class="btn btn-primary d-block mx-auto fs-5 mt-3" v-if="canLoadMore"
                            @click="loadMore">더보기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 80vw;
}

.reward-list,
.std-list {
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

.reward-list-wrap .reward-name {
    cursor: pointer;
}

.reward-list-wrap .list-item:hover {
    background-color: antiquewhite;
    transition: 2px;
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

.custom-btn.cyan {
    height: 40px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    box-shadow: 0px 4px 0px #73B9C9;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #7fccde
}

.custom-btn.cyan:active {
    box-shadow: 0 0 #73B9C9;
    background-color: #70B4C4;
}

.custom-btn.blue {
    height: 40px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    box-shadow: 0px 4px 0px #74a3b0;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #7fb1bf
}

.custom-btn.blue:active {
    box-shadow: 0 0 #74a3b0;
    background-color: #709CA8;
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