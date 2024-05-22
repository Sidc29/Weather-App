import { useState } from "react";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const { weatherData, loading, fetchWeatherData } = useFetch(city, unit);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
    setCity("");
  };

  if (loading) return <Loading />;

  return (
    <main>
      <Weather
        weatherData={weatherData}
        city={city}
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default App;
