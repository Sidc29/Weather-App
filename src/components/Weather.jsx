import { getTimeFormatted } from "../lib/utils";

const Weather = ({
  weatherData,
  city,
  setCity,
  unit,
  setUnit,
  handleSubmit,
}) => {
  const handleUnitChange = (newUnit) => {
    if (unit === newUnit) return;
    setUnit(newUnit);
  };

  return (
    <div className="container">
      <div className="weather__header">
        <form className="weather__search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a city..."
            className="weather__searchform"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className="weather__units">
          <span
            className={`weather_unit_celsius ${
              unit === "metric" && "active_unit"
            }`}
            onClick={() => handleUnitChange("metric")}
          >
            °C
          </span>
          <span
            className={`weather_unit_farenheit ${
              unit === "imperial" && "active_unit"
            }`}
            onClick={() => handleUnitChange("imperial")}
          >
            °F
          </span>
        </div>
      </div>
      <div className="weather__body">
        <h1 className="weather__city">
          {weatherData?.name}, {weatherData?.sys?.country}
        </h1>
        <div className="weather__datetime">{getTimeFormatted()}</div>
        <div className="weather__forecast">
          {weatherData?.weather[0]?.description}
        </div>
        <div className="weather__icon">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            alt="weather"
          />
        </div>
        <p className="weather__temperature">{weatherData?.main?.temp} °</p>
        <div className="weather__minmax">
          <p>Min: {weatherData?.main?.temp_min} °</p>
          <p>Max: {weatherData?.main?.temp_max} °</p>
        </div>
      </div>

      <div className="weather__info">
        <div className="weather__card">
          <i className="fa-solid fa-temperature-full"></i>
          <div>
            <p>Real Feel</p>
            <p className="weather__realfeel">
              {weatherData?.main?.feels_like} °
            </p>
          </div>
        </div>
        <div className="weather__card">
          <i className="fa-solid fa-droplet"></i>
          <div>
            <p>Humidity</p>
            <p className="weather__humidity">{weatherData?.main?.humidity}%</p>
          </div>
        </div>
        <div className="weather__card">
          <i className="fa-solid fa-wind"></i>
          <div>
            <p>Wind</p>
            <p className="weather__wind">{weatherData?.wind?.speed} m/s</p>
          </div>
        </div>
        <div className="weather__card">
          <i className="fa-solid fa-gauge-high"></i>
          <div>
            <p>Pressure</p>
            <p className="weather__pressure">
              {weatherData?.main?.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
