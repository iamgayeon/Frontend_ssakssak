<!-- 매점관리 -->
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
            <tr v-for="(item, index) in storeItems" :key="index">
              <td class="text-muted">{{ item.date }}</td>
              <td class="text-muted">{{ item.productName }}</td>
              <td class="text-muted">{{ item.productPrice }} 씨드</td>
              <td class="text-muted">{{ item.count }} 개</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: '',
        productDescription: '',
        productPrice: 0,
        productQuantity: 0,
        storeItems: [
          { date: '2024-09-11', productName: '춘식이랑 1일자리바꾸기', productPrice: 200, count: 5 },
          { date: '2024-09-11', productName: '선생님한테 밥얻어먹기', productPrice: 200, count: 3 },
          { date: '2024-09-11', productName: '다음주 당번 면제', productPrice: 200, count: 1 }
        ],
        imagePreview: null, // 이미지 미리보기용 변수
      };
    },
    methods: {
      addProduct() {
        if (this.productName && this.productDescription && this.productPrice && this.productQuantity) {
          const newItem = {
            date: new Date().toISOString().slice(0, 10),
            productName: this.productName,
            productPrice: this.productPrice,
            count: this.productQuantity
          };
          this.storeItems.push(newItem);
          // 입력 필드 초기화
          this.productName = '';
          this.productDescription = '';
          this.productPrice = 0;
          this.productQuantity = 0;
        } else {
          alert('내용을 모두 입력해주세요.');
        }
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreview = e.target.result; // 미리보기 이미지를 설정
          };
          reader.readAsDataURL(file);
        }
      }
    }
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