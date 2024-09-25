<!-- 학급관리 -->
<template>
  <div class="container my-5 p-5 bg-light rounded">
    <h3 class="mb-4"><strong>파일 업로드</strong></h3>
    
    <!-- 파일 업로드 박스 -->
    <div
      class="upload-box bg-light d-flex flex-column justify-content-center align-items-center p-5 rounded"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <p class="text-center" style="font-size: 1.1rem;">파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
      <!-- accept 속성을 사용해 엑셀 파일만 업로드 가능하게 제한 -->
      <input type="file" @change="handleFileUpload" class="d-none" ref="fileInput" accept=".xls,.xlsx"/>
      <button class="btn btn-primary mt-3" @click="selectFile">
        <i class="bi bi-upload me-2"></i>파일 선택
      </button>
    </div>

    <!-- 파일 목록 -->
    <div v-if="uploadedFiles.length" class="mt-4">
      <div v-for="(file, index) in uploadedFiles" :key="index" class="d-flex justify-content-between align-items-center py-3 px-3 border">
        <span>{{ file.name }}</span>
        <!-- 삭제 버튼 -->
        <button class="btn btn-link text-black" @click="removeFile(index)">X 삭제</button>
      </div>
    </div>

    <!-- 등록 버튼 -->
    <div class="text-center mt-3">
      <button class="btn btn-primary" :disabled="!uploadedFiles.length" @click="submitFiles">
        등록
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFiles: [] // 업로드한 파일들을 저장할 배열
    };
  },
  methods: {
    // 파일 선택창 열기
    selectFile() {
      this.$refs.fileInput.click();
    },
    // 파일 선택 후 파일 목록에 추가
    handleFileUpload(event) {
      const files = event.target.files;
      this.addFilesToList(files);
    },
    // 드래그 앤 드롭으로 파일 추가
    handleDrop(event) {
      const files = event.dataTransfer.files;
      this.addFilesToList(files);
    },
    // 파일을 목록에 추가
    addFilesToList(files) {
      for (let i = 0; i < files.length; i++) {
        this.uploadedFiles.push(files[i]);
      }
    },
    // 파일 목록에서 제거
    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },
    // 파일 등록 버튼 눌렀을 때
    submitFiles() {
      alert("파일이 성공적으로 등록되었습니다.");
      this.uploadedFiles = []; // 파일 목록 초기화
    }
  }
};
</script>

<style scoped>
.upload-box {
  border: 2px dashed #dcdcdc;
  text-align: center;
  height: 200px;
  background-color: #f8f9fa;
  transition: background-color 0.2s ease;
}
.upload-box:hover {
  background-color: #e9ecef;
}
/* 삭제 버튼 둥근 도형 없애기 */
button.btn-link {
  font-size: 1rem;
  padding: 0; /* 버튼 내 여백 제거 */
  border: none;
  background: none; /* 둥근 도형 없애기 */
  color: #007bff;
}

.btn-primary{
  --ar-btn-color: #ffffff;
    --ar-btn-bg: #0091f9;
    --ar-btn-border-color: #e3f2fd;
    --ar-btn-hover-bg: #56b9ff;
    --ar-btn-hover-border-color: #e3f2fd;
    --ar-btn-active-bg:#e3f2fd;
    --ar-btn-active-border-color: #56b9ff;
    --ar-btn-disabled-bg: #e3f2fd;
    --ar-btn-disabled-border-color: #e3f2fd;
}

.text-center {
  text-align: center;
}
</style>