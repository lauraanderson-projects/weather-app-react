import React from "react";
import "./WeatherForecastDay.css";

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
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-date">{day()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          className="img-fluid"
          alt="weather forecast"
        />
      </div>
      <div className="WeatherForecast-temperature">
        <strong>
          <span className="maxTemperature">{maxTemperature()}&deg;</span>
        </strong>{" "}
        <span className="minTemperature">{minTemperature()}&deg;</span>
      </div>
    </div>
  );
}
