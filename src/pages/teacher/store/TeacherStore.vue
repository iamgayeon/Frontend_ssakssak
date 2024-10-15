<template>
  <div class="container my-5 p-5 rounded" style="background-color: #fff;">
    <!-- 상품 사진 등록 -->
    <h4 class="mb-3 text-muted">매점 상품 등록</h4>
    <div class="row mb-4">
      <div class="col-md-4 d-flex justify-content-center align-items-center flex-column">
        <label class="image-upload-label">
          <img :src="imagePreview || 'https://via.placeholder.com/150'" class="img-thumbnail" />
          <input type="file" class="d-none" @change="onFileChange" />
        </label>
        <small class="text-muted mt-2">상품사진등록</small>
        <small class="text-muted mt-2">.png, .jpg, .jpeg 파일만 등록 가능합니다.</small>
      </div>

      <!-- 상품명 및 설명 -->
      <div class="col-md-8">
        <div class="form-group mb-3">
          <label class="text-muted">상품명</label>
          <input type="text" class="form-control text-muted" v-model="productName" placeholder="상품명을 입력하세요" />
        </div>

        <div class="form-group mb-3">
          <label class="text-muted">상품설명</label>
          <textarea class="form-control text-muted" v-model="productDescription" placeholder="상품 설명을 입력하세요"></textarea>
        </div>
      </div>
    </div>

    <!-- 상품 가격 및 수량 -->
    <div class="row mb-4">
      <div class="col-md-6">
        <label class="text-muted">상품가격</label>
        <div class="input-group">
          <input type="number" class="form-control text-muted" v-model="productPrice" />
          <span class="input-group-text text-muted">씨드</span>
        </div>
      </div>

      <div class="col-md-6">
        <label class="text-muted">상품수량</label>
        <div class="input-group">
          <input type="number" class="form-control text-muted" v-model="productQuantity" />
          <span class="input-group-text text-muted">개</span>
        </div>
      </div>
    </div>

    <!-- 등록 버튼 -->
    <div class="text-center">
      <button class="btn btn-warning px-5" @click="addProduct">등록</button>
    </div>
  </div>

  <div class="container md-4 p-5 rounded" style="background-color: #fff;">
    <!-- 매점 상품 목록 -->
    <div class="mt-0">
      <h4 class="mb-3 text-muted">상품 등록 내역</h4>
      <table class="table custom-table">
        <thead class="table-light">
          <tr>
            <th class="text-muted">날짜</th>
            <th class="text-muted">상품명</th>
            <th class="text-muted">상품가격</th>
            <th class="text-muted">상품수량</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sortedStoreItems" :key="index">
            <td class="text-muted" v-text="formatDate(item.cpDate)"></td>
            <td class="text-muted">{{ item.cpName }}</td>
            <td class="text-muted">{{ item.cpPrice }} 씨드</td>
            <td class="text-muted">{{ item.cpQuantity }} 개</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue';
import storeApi from "@/api/teacherStoreApi"; // API 파일 import

const formatDateToLocalDateTime = () => {
  const now = new Date();
  return now.toISOString('T').slice(0, 19); // yyyy-MM-ddTHH:mm:ss 형식으로 변환
};

const sortedStoreItems = computed(() => {
  return storeItems.value.slice().sort((a, b) => {
    const dateA = new Date(a.cpDate);
    const dateB = new Date(b.cpDate);
    return dateB - dateA; // 내림차순 정렬
  });
});

// 상품 등록을 위한 상태 변수
const productName = ref('');
const productDescription = ref('');
const productPrice = ref(0);
const productQuantity = ref(0);
const storeItems = ref([]); // 매점 상품 목록 배열
const imagePreview = ref(null); // 이미지 미리보기용 변수

const fetchStoreItems = async () => {
  try {
    const data = await storeApi.getCouponlist(); // API 호출로 상품 목록을 가져옴
    console.log("상품 목록 데이터:", data);  // 데이터 확인을 위해 콘솔에 출력
    storeItems.value = data; // 가져온 데이터를 storeItems에 저장
  } catch (error) {
    console.error('Failed to fetch store items:', error);
  }
};

// 컴포넌트가 마운트될 때 매점 상품 목록을 가져옴
onMounted(() => {
  fetchStoreItems();
});
// 상품을 추가하는 함수
const addProduct = async () => {
  if (productName.value && productDescription.value && productPrice.value && productQuantity.value && selectedFile.value) {
    const storeDTO = {
      cpImage:imagePreview.value,
      cpName: productName.value,
      cpContent: productDescription.value,
      cpPrice: productPrice.value,
      cpQuantity: productQuantity.value,
      cpDate: formatDateToLocalDateTime(),
      };

    try {
      // API로 상품 정보와 파일 전송
      const response = await storeApi.applyCoupon(storeDTO, selectedFile.value);

      console.log("상품 등록 성공:", response);

      // 등록 후 리스트를 다시 불러옴
      await fetchStoreItems();

      // 입력 필드 초기화
      productName.value = '';
      productDescription.value = '';
      productPrice.value = 0;
      productQuantity.value = 0;
      imagePreview.value = null;
      selectedFile.value = null;

    } catch (error) {
      console.error("상품 등록 실패:", error);
    }
  } else {
    alert('내용을 모두 입력하고 이미지를 등록해주세요.');
  }
};

// 파일이 변경될 때 호출되는 함수 (이미지 미리보기 설정 및 파일 객체 저장)
const selectedFile = ref(null); // 선택된 파일을 저장할 변수

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file; // 선택한 파일을 저장

    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result; // 미리보기 이미지를 설정
    };
    reader.readAsDataURL(file);
  }
};

const formatDate = (dateArray) => {
  if (typeof dateArray === 'string') {
    // 날짜가 문자열로 들어오는 경우
    const date = new Date(dateArray);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  } else if (Array.isArray(dateArray)) {
    // 날짜가 배열로 들어오는 경우
    const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }
  return ''; // 예상치 못한 형식일 경우 빈 문자열 반환
};

</script>

<style scoped>
.container {
  max-width: 1280px;
}
.image-upload-label {
  cursor: pointer;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: #f8f9fa;
}
input[type="file"] {
  display: none;
}
.btn-warning {
  background-color: #0091f9;
  border: none;
  color: white;
}
.table.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #ffffff;
}
.table.custom-table th,
.table.custom-table td {
  border-top: none;
  border-bottom: 1px solid #dee2e6;
}
.table.custom-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  vertical-align: middle;
}
.table.custom-table td {
  padding: 12px;
  text-align: center;
  vertical-align: middle;
}
.table.custom-table tr:last-child td {
  border-bottom: none;
}
.table.custom-table th:first-child,
.table.custom-table td:first-child {
  border-left: none;
}
.table.custom-table th:last-child,
.table.custom-table td:last-child {
  border-right: none;
}
.text-muted {
  color: #6c757d !important;
}
</style>
