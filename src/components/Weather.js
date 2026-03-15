import React, { useState } from "react";
import axios from "axios";
import "../styles/Weather.css";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = "5380e681fadeed46dbcf40106b8ed4f1";

  const searchWeather = async () => {
    const current = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    const forecastData = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
    );

    setWeather(current.data);
    setForecast(forecastData.data.list);
  };

  return (
    <div className="weather-app">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search city..."
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchWeather}>Search</button>
      </div>

      {weather && (
        <div className="main-weather">
          <h1>{weather.name}</h1>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />

          <p className="desc">{weather.weather[0].description}</p>

          <h2>{Math.round(weather.main.temp)}°C</h2>

          <div className="extra-info">
            <div>
              <p>Wind</p>
              <span>{weather.wind.speed} m/s</span>
            </div>

            <div>
              <p>Humidity</p>
              <span>{weather.main.humidity}%</span>
            </div>

            <div>
              <p>Pressure</p>
              <span>{weather.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      )}

      {forecast.length > 0 && (
        <>
          <HourlyForecast data={forecast} />
          <WeeklyForecast data={forecast} />
        </>
      )}
    </div>
  );
}

export default Weather;
