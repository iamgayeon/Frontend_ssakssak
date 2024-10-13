import api from "@/api";

const BASE_URL = "/api/teacher";

export default {
  async getSavingList() {
    const { data } = await api.get(`${BASE_URL}/bank/saving-list`);
    return data;
  },
};
