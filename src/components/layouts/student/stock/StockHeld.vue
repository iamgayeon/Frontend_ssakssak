<script setup>
</script>
<template>
    <div class="container">
        <div class="shadow card">
            <div class="row p-4">
                <div class="col-6">
                    <h3>내 보유 주식</h3><br>
                    <table class="table table-borderless table-hover">
                        <tbody>
                            <tr>
                                <td>원금</td>
                                <td class="fw-bold">1,200 씨드</td>
                            </tr>
                            <tr>
                                <td>현재 평가액</td>
                                <td class="fw-bold">1,320 씨드</td>
                            </tr>
                            <tr>
                                <td>보유 수량</td>
                                <td class="fw-bold">12 싹싹</td>
                            </tr>
                            <tr>
                                <td>1주 평균 금액</td>
                                <td class="fw-bold">100 씨드</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <div class="d-flex justify-content-center  align-items-center rounded-circle mt-5 bg-success-subtle"
                            style="width: 100px; height: 100px;">
                            <img src="../../../../assets/images/images-removebg-preview 1.png" width="80px"
                                height="70px" class="img-fluid">
                        </div>
                        <div class="pt-3">
                            <div>
                                <span class="fs-5">현재 수익률 :</span>
                                <span class="fs-6 badge bg-danger-subtle text-danger rounded-pill ms-1">+ 10%</span>
                            </div>
                            <div>
                                <span class="fs-5">현재 수익금 :</span>
                                <span class="fs-6 ms-2 text-danger fw-bold">120 씨드</span>
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
    height: 400px;
}

.card {
    height: 100%;
}
</style>