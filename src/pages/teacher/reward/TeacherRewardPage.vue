<script setup>
import { ref, computed, onMounted, toRaw, reactive, watch } from 'vue';
import { useRewardStore } from '@/stores/rewardStore';
import api from '@/api/teacherRewardApi';
import { useRoute, useRouter } from 'vue-router';
const activeTab = ref('reward'); // 현재 탭 상태

const route = useRoute();
const router = useRouter();

const rewardStore = useRewardStore();
onMounted(() => {
    rewardStore.fetchRewardList();
    rewardStore.fetchStudentList();
    rewardStore.fetchRewardGiveList();
})

const page = ref({});

const pageRequest = reactive({
    page: parseInt(route.query.page) || 1,
    amount: parseInt(route.query.amount) || 12,
});

console.log(page.value);
const rewardList = computed(() => rewardStore.rewardList);
// const rewardGiveList = computed(() => rewardStore.rewardGiveList);
const rewardGiveList = computed(() => page.value.rewardList);
const students = computed(() => rewardStore.studentList);


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
        await rewardStore.fetchRewardList();
    } catch (error) {
        console.log(error);
    }
}

const deleteReward = async (id) => {
    const response = await api.deleteReward(id);
    rewardStore.fetchRewardList();

}

const selectedStudents = ref([]);
const selectedReward = ref(null);

const toggleRewardSelect = (id) => {
    selectedReward.value = rewardList.value.find(reward => reward.rewardId === id);
}

const toggleRewardDeselect = () => {
    selectedReward.value = '';
}

const toggleStudentSelection = (student) => {
    console.log(student);
    const index = selectedStudents.value.findIndex(
        (selected) => selected.std_id === student.std_id
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


const sendReward = async () => {
    try {
        const students = selectedStudents.value.map(student => toRaw(student));
        const request = {
            students: students,
            reward_id: selectedReward.value.rewardId,
        }
        const response = await api.sendRewardToStudent(request);
        if (response.status === 200) {
            alert(response.data);
        }
        selectedStudents.value = [];
        selectedReward.value = null;
        await rewardStore.fetchStudentList();
        // await rewardStore.fetchRewardGiveList();
        load();
    } catch (error) {
        alert('잘못된 요청입니다.');
    }

}


const handlePageChange = async (pageNum) => {
    console.log('CLICK,,,,');
    router.push({
        query: {
            page: pageNum,
            amount: pageRequest.amount,
        },
    });
};

watch(route, async (newValue) => {
    console.log('WATCH', route.query.page);
    await load(route.query);
});

const load = async (query) => {
    try {
        page.value = await api.getRewardGiveList(query);
        console.log('asdf', page.value);

    } catch { }
};

load(pageRequest);
</script>
<template>
    <div class="container mt-5">
        <!-- 상단 버튼 -->


        <div v-if="activeTab === 'reward'">
            <!-- 좌측 리워드 목록 카드 -->
            <div class="row">
                <div class="col-12 col-md-6 reward-list">
                    <div class="card shadow-sm mb-3" style="height: 30%;"> <!-- 높이를 100vh로 설정하여 우측 두 카드의 높이와 맞춤 -->
                        <div class="reward-title mt-4 ms-4">
                            <span class="fs-2 fw-bold ms-3">현재 리워드 목록</span>
                        </div>
                        <div class="card-body pt-0 mt-3">
                            <!-- 리워드 목록 -->
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
                            <div class="reward-list-wrap" v-if="rewardList" style="overflow-y: auto; max-height: 80vh;">
                                <div v-for="(reward, idx) in rewardList" :key="reward.rewardId" class="d-flex text-center py-2 list-item" style="width: 100%;">
                                    <div class="col-6 text-center reward-name" @click="toggleRewardSelect(reward.rewardId)">
                                        <span class="fs-5 text-dark">{{ reward.rewardName }}</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <span class="fs-5 text-dark">{{ reward.rewardSeed }} 씨드</span>
                                    </div>
                                    <div class="col-2 text-center pe-2">
                                        <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteReward(reward.rewardId)">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- 리워드 추가 -->
                            <div class="mt-2">
                                <form @submit.prevent="addReward">
                                    <div class="mb-3 d-flex justify-content-between align-items-center">
                                        <label class="form-label fs-5 fw-bold reward-label">리워드 명</label>
                                        <input type="text" class="form-control reward-input" v-model="rewardName" placeholder="ex) 밥을 남기지 않고 잘 먹어요">
                                    </div>
                                    <div class="d-flex align-items-center reward-add-box">
                                        <label class="form-label fs-5 fw-bold reward-amount">금액</label>
                                        <input type="text" class="form-control me-2 w-50 text-end" v-model="rewardSeed" placeholder="ex) 300">
                                        <span class="me-4"> 씨드 </span>
                                        <button class="btn btn-primary px-3" type="submit">리워드 추가</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-sm" style="height: 30%;">
                        <div class="d-flex justify-content-between mt-4 ms-4">
                            <span class="fs-2 fw-bold ms-1">학생 목록</span>
                            <div class="p-0 me-4">
                                <button class="btn btn-primary me-2 py-2" @click="toggleAllSelected">전체선택</button>
                                <button class="btn btn-outline-primary me-2 px-3 py-2" @click="toggleAllDeselect">전체선택해제</button>
                            </div>
                        </div>
                        <!-- 학생 목록 -->
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
                                <div v-for="student in students" :key="student.std_id" class="d-flex text-center py-2 name-box" style="width: 100%;" @click="toggleStudentSelection(student)">
                                    <div class="col-2 text-center pt-1">
                                        <input type="checkbox" :value="student" @change="toggleStudentSelection(student)" :checked="selectedStudents.includes(student)" />
                                    </div>
                                    <div class="col-2 text-center" style="overflow-x: auto;">
                                        <span class="fs-5 text-dark">{{ student.std_id }}</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <span class="fs-5 text-dark">{{ student.std_name }}</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <span class="fs-5 text-dark">{{ student.seed }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <!-- 우측 학생 목록 및 리워드 지급 카드 -->
                <div class="col-12 col-md-6">
                    <!-- 리워드 지급 카드 -->
                    <div class="card shadow-sm reward-card d-flex flex-column" style="height: 100%;">
                        <div class="m-4" style="flex: 0.7; display: flex; flex-direction: column; justify-content: flex-start; padding-top: 200px;"> <!-- padding-top으로 상단에 200px 추가 -->
                            <!-- 타이틀을 항상 위에 고정 -->
                            <div class="ms-2 mt-6">
                                <span class="reward-title fs-3 fw-bold">리워드 적용 학생</span>
                            </div>
                            
                            <!-- 학생 목록 -->
                            <div class="d-flex mt-2 ms-3 flex-wrap">
                                <div v-for="(student, idx) in selectedStudents" :key="idx" class="btn btn-warning cyan me-2 mb-3" @click="toggleStudentSelection(student)">
                                    {{ student.std_name }}
                                </div>
                            </div>
                        </div>
                        
                        <!-- 적용 리워드 -->
                        <div class="mx-4" style="flex: 1; display: flex; flex-direction: column; justify-content: flex-start;">
                            <!-- span이 고정되도록 설정 -->
                            <div class="ms-2">
                                <span class="fs-3 fw-bold">적용 리워드</span>
                            </div>
                        
                            <!-- 리워드가 추가되어도 span이 올라가지 않음 -->
                            <div class="d-flex mt-2 ms-3 flex-wrap">
                                <div class="btn btn-warning d-inline-block" v-if="selectedReward" @click="toggleRewardDeselect">{{ selectedReward.rewardName }}</div>
                            </div>
                        </div>
                    
                        <!-- 리워드 지급 버튼 -->
                        <div class="text-center p-3 mt-auto mb-4">
                            <button class="btn btn-warning" style="width: 80%;" @click="sendReward">리워드 지급</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 리워드 지급 내역 (우측 버튼 클릭 시 표시) -->
        <div v-if="activeTab === 'reward'">
            <div class="card mt-3 reward-card2">
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
                            <div v-for="(record, idx) in rewardGiveList" :key="record.giveId" class="d-flex py-2 mx-auto" style="width: 90%;">
                                <div class="col-3 text-center">
                                    <span class="fs-5 text-dark">{{ record.giveDate }}</span>
                                </div>
                                <div class="col-2 text-center" style="overflow-x: auto;">
                                    <span class="fs-5 text-dark">{{ record.stdName }}</span>
                                </div>
                                <div class="col-5 text-center">
                                    <span class="fs-5 text-dark">{{ record.rewardName }}</span>
                                </div>
                                <div class="col-2 text-center">
                                    <span class="fs-5 text-dark">{{ record.giveSeed }} 씨드</span>
                                </div>
                            </div>

                            <div class="my-5 d-flex">
                                <div class="flex-grow-1 text-center">
                                    <vue-awesome-paginate :total-items="page.totalCount" :items-per-page="pageRequest.amount" :max-pages-shown="5" :show-ending-buttons="true" v-model="pageRequest.page" @click="handlePageChange">
                                        <template #first-page-button><i class="fa-solid fa-backward-fast"></i></template>
                                        <template #prev-button><i class="fa-solid fa-caret-left"></i></template>
                                        <template #next-button><i class="fa-solid fa-caret-right"></i></template>
                                        <template #last-page-button><i class="fa-solid fa-forward-fast"></i></template>
                                    </vue-awesome-paginate>
                                </div>
                            </div>
                        </div>
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
    height: 100%;
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

.name-box:hover {
    cursor: pointer;
    background-color: antiquewhite;
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

.reward-title{
    margin-top: 200px;
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

input[type="checkbox"] {
    width: 20px;
    height: 20px;
}

.btn-primary {
    background-color: #00A3FF;
    border-color: #00A3FF;
}

.btn-outline-primary {
    color: #00A3FF;
    border-color: #00A3FF;
}

.btn-outline-primary:hover {
    color: white;
    background-color: #00A3FF;
}

.reward-card {
    background-image: url('@/assets/images/reward_give.png'); /* 이미지 경로를 여기에 넣으세요 */
    background-size: cover; /* 이미지를 카드 크기에 맞게 조정 */
    background-position: center; /* 이미지를 중앙에 배치 */
    background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
}


</style>