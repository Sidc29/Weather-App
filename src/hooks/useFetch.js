import { useState, useEffect, useCallback } from "react";
import apiService from "../apiService";
import { toast } from "react-toastify";

const useFetch = (cityName, unit) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = useCallback(
    async (city) => {
      setLoading(true);
      try {
        const data = await apiService.getWeatherByCity(city, unit);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
        setWeatherData(null);
        if (error.message === "city not found") {
          toast.error(
            `City '${city}' not found, restoring back to default city`
          );
          if (city !== "belagavi") {
            fetchWeatherData("belagavi");
          }
        }
      } finally {
        setLoading(false);
      }
    },
    [unit]
  );

  useEffect(() => {
    fetchWeatherData(cityName);
  }, [unit]);

  return { weatherData, loading, fetchWeatherData };
};

export default useFetch;
