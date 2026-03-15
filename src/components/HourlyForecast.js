import React from "react";

function HourlyForecast({ data }) {
  const hourly = data.slice(0, 8);

  return (
    <div className="hourly">
      {hourly.map((item, index) => (
        <div key={index} className="hour-card">
          <p>
            {new Date(item.dt_txt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
          />

          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
