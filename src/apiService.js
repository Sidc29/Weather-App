import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const API_BASE_URL = process.env.REACT_APP_OPEN_WEATHER_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  params: {
    appid: API_KEY,
    units: "metric",
  },
});

const apiService = {
  getWeatherByCity: async (city, unit) => {
    try {
      const response = await axiosInstance.get("/weather", {
        params: {
          q: city || "belagavi",
          units: unit || "metric",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default apiService;
