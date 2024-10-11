import api from "@/api";

const BASE_URL = "/api/student/event";

export async function getSeedRanking() {
  try {
    const { data } = await api.get(`${BASE_URL}/seed-ranking`);
    console.log("getSeedRanking", data);
    return data;
  } catch (error) {
    console.error('Error fetching seed ranking:', error);
    throw error;
  }
}
