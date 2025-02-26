import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-date">{day()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          className="WeatherForecast-icon"
          alt="weather forecast"
        />
      </div>
      <div className="WeatherForecast-temperature">
        <strong>{maxTemperature()}&deg;</strong> - {minTemperature()}&deg;
      </div>
    </div>
  );
}
