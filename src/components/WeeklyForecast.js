import React from "react";

function WeeklyForecast({ data }) {
  const days = data.filter((item, index) => index % 8 === 0);

  return (
    <div className="weekly">
      {days.map((day, index) => (
        <div key={index} className="day-card">
          <p>
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt=""
          />

          <p>{Math.round(day.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
