import { useAuthStore } from "@/stores/auth";

//////////////////////////////////////////////////////////
export const isAuthenticated = () => {
  const auth = useAuthStore();
  if (!auth.isLogin) {
    console.log("로그인 필요.....");
    return false;
  }
  return auth; // 로그인 정보 반환 (role 포함)
};
//////////////////////////////////////////////////////////
