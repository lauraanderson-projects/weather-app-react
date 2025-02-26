import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="current-weather-temp">
        {Math.round(props.fahrenheit)}
      </span>
      <span className="current-weather-degree">°F</span>
    </span>
  );
}
