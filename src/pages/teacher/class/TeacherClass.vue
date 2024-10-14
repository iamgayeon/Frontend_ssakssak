<template>
  <div class="container my-5 p-5 bg-light rounded">
    <h3 class="mb-4"><strong>파일 업로드</strong></h3>
    
    <div
      class="upload-box bg-light d-flex flex-column justify-content-center align-items-center p-5 rounded"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <p class="text-center" style="font-size: 1.1rem;">파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
      <input type="file" @change="handleFileUpload" class="d-none" ref="fileInput" accept=".xls,.xlsx,.csv"/>
      <button class="btn btn-primary mt-3" @click="selectFile">
        <i class="bi bi-upload me-2"></i>파일 선택
      </button>
    </div>

    <div v-if="uploadedFiles.length" class="mt-4">
      <div v-for="(file, index) in uploadedFiles" :key="index" class="d-flex justify-content-between align-items-center py-3 px-3 border">
        <span>{{ file.name }}</span>
        <button class="btn btn-link text-black" @click="removeFile(index)">X 삭제</button>
      </div>
    </div>

    <div class="text-center mt-3">
      <button class="btn btn-primary" :disabled="!uploadedFiles.length" @click="submitFiles">
        등록
      </button>
    </div>

    <div v-if="csvDataArray.length" class="mt-5">
      <h5><strong>CSV 파일 파싱 결과</strong></h5>
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="(header, index) in csvDataArray[0]" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in csvDataArray.slice(1)" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import apiService from '@/api/teacherClassApi';

const fileInput = ref(null);
const uploadedFiles = reactive([]);
const csvDataArray = ref([]);

const handleFileUpload = (event) => {
  const files = event.target.files;
  
  addFilesToList(files);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file && file.type === 'text/csv') {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;

        csvDataArray.value = csvToArray(contents);

        console.log('CSV Data Array:', csvDataArray.value);
      };

      reader.readAsText(file);
    } else {
      console.error('Invalid file type. Please upload a CSV file.');
    }
  }
};

const csvToArray = (csv) => {
  const rows = csv.split('\n');
  return rows.map((row) => row.split(','));
};

const selectFile = () => {
  fileInput.value.click();
};

const addFilesToList = (files) => {
  for (let i = 0; i < files.length; i++) {
    uploadedFiles.push(files[i]);
  }
};

const handleDrop = (event) => {
  const files = event.dataTransfer.files;
  addFilesToList(files);
};

const removeFile = (index) => {
  uploadedFiles.splice(index, 1);
};

const submitFiles = async () => {
  if (!uploadedFiles.length) return;

  const formData = new FormData();
  formData.append('file', uploadedFiles[0]);

  try {
    const response = await apiService.uploadCsv(formData);
    console.log('파일 업로드 성공:', response);
    alert('파일이 성공적으로 등록되었습니다.');
    uploadedFiles.length = 0;
  } catch (error) {
    console.error('파일 업로드 실패:', error);
    alert('파일 업로드 중 오류가 발생했습니다.');
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

button.btn-link {
  font-size: 1rem;
  padding: 0;
  border: none;
  background: none;
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
