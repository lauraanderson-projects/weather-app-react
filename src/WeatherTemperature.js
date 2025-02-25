import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheigt(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="current-weather-temp">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="current-weather-degree">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="current-weather-temp">{Math.round(celsius())}</span>
        <span className="current-weather-degree">
          <a href="/" onClick={showFahrenheigt}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
