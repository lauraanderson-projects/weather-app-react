import React, { useState } from "react";

export default function Temperatures(props) {
  let [temperature, setTemperature] = useState(props.current);
  let [unit, setUnit] = useState("");

  function showCelsius(event) {
    event.preventDefault();
    let roundTemperature = Math.round(((props.current - 32) * 5) / 9);
    setTemperature(roundTemperature);
    setUnit("°C");
  }

  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(props.current);
    setUnit("°F");
  }

  return (
    <main>
      <div className="current-city-temperature d-flex justify-content-between flex-wrap">
        <div>
          <h1>{props.city}</h1>
          <p className="current-details">
            {props.date}
            <br />
            {props.description}
          </p>
        </div>
        <div>
          <p>
            <span className="current-weather-icon align-top">
              <img
                src={props.img}
                class="current-weather-icon"
                alt="current weather icon"
              />
            </span>
            <span className="current-weather-temp">{temperature}</span>
            <span className="current-weather-degree">
              <a href="/" onClick={showFarehrenheit}>
                {unit}
              </a>{" "}
              |{" "}
              <a href="/" onClick={showCelsius}>
                {unit}
              </a>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
