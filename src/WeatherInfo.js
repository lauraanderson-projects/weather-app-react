import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-city-temperature d-flex justify-content-between flex-wrap">
        <div>
          <h1>{props.data.city}</h1>
          <p className="current-details">
            <FormattedDate date={props.data.date} />,{" "}
            <span className="text-capitalize">{props.data.condition}</span>
            <br />
            Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/h
          </p>
        </div>
        <div>
          <p>
            <span className="current-weather-icon align-top">
              <img
                src={props.data.imgurl}
                className="current-weather-icon"
                alt={props.data.condition}
              />
            </span>
            <span className="current-weather-temp">
              {Math.round(props.data.temperature)}
            </span>
            <span className="current-weather-degree">
              <a href="/">°F</a> | <a href="/">°C</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
