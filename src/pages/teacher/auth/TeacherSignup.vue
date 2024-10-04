<template>
    <div class="signup-page">
        <!-- 왼쪽 금융싹싹 소개 섹션 -->
        <div class="intro-section">
            <img src="@/assets/images/9.png" alt="금융싹싹 로고" class="logo" />
            <h1>금융싹싹에 오신 걸 환영합니다</h1>
            <p>금융싹싹으로 학생들에게 쉽고 재미있는 금융 교육을 제공하세요! <br />
                적금 상품 비교 및 가입, 주식 거래 등 실생활에서 필요한 금융 서비스를<br />직접 경험하고 배울 수 있습니다.
            </p>
        </div>

        <!-- 오른쪽 회원가입 폼 -->
        <div class="signup-section">
            <h2>회원 가입하기</h2>

            <div class="form-group">
                <label for="name">이름</label>
                <input type="text" v-model="name" placeholder="이름을 입력하세요." />
            </div>

            <div class="form-group">
                <label for="id">아이디</label>
                <input type="text" v-model="id" placeholder="아이디를 입력하세요." />
            </div>

            <div class="form-group">
                <label for="email">이메일</label>
                <input type="email" v-model="email" placeholder="이메일을 입력하세요." />
            </div>

            <div class="form-group">
                <label for="password">비밀번호</label>
                <input type="password" v-model="password" placeholder="비밀번호를 입력하세요." />
                <p class="help-text">비밀번호는 8-16자의 영문 대/소문자, 숫자, 특수문자만 사용 가능합니다.</p>
            </div>

            <div class="form-group">
                <label for="password-confirm">비밀번호 확인</label>
                <input type="password" v-model="passwordConfirm" placeholder="비밀번호를 재입력하세요." />
                <p v-if="passwordMismatch" class="error-text">비밀번호가 일치하지 않습니다.</p>
            </div>

            <button type="submit" class="signup-button">가입하기</button>

            <!-- 이미 계정이 있으신가요? 로그인하기 -->
            <div class="login-section">
                <span class="black-text">이미 계정이 있으신가요?</span>
                <a @click="goToSignup">로그인하기</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            id: '',
            email: '',
            password: '',
            passwordConfirm: '',
        };
    },
    computed: {
        passwordMismatch() {
            return this.password !== this.passwordConfirm;
        },
    },
    methods: {
        goToSignup() {
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.signup-page {
    display: flex;
    height: 100vh;
    background-color: #f9f9f9;
}

/* 왼쪽 금융싹싹 소개 섹션 */
.intro-section {
    background-color: #00A3FF;
    color: white;
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 400px;
    margin-bottom: 20px;
}

h1 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #ffffff;
}

p {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    max-width: 80%;
    color: white;
}

/* 오른쪽 회원가입 폼 섹션 */
.signup-section {
    width: 50%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h2 {
    font-size: 24px;
    margin-top: 100px;
}

p {
    font-size: 14px;
    margin-bottom: 20px;
}

a {
    color: #00A3FF;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signup-button {
    width: 100%;
    padding: 15px;
    background-color: #00A3FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.signup-button:hover {
    background-color: #007ACC;
}

.error-text {
    color: red;
    text-align: left;
    font-size: 12px;
}

.help-text {
    font-size: 12px;
    color: red;
    text-align: left;
}

/* "이미 계정이 있으신가요? 로그인하기" 한 줄로 정렬 */
.login-section {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
}

.black-text {
    color: #3d3d3d;
}

a {
    color: #00A3FF;
}
</style>