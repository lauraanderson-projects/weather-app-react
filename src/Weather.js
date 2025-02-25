import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Wednesday 07:00",
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      imgurl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-sm-10 text-center px-0 mt-2">
              <input
                type="search"
                placeholder="Enter a city.."
                required
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-2 text-left mt-2 p-0">
              <button type="submit" className="btn btn-outline-primary w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="current-city-temperature d-flex justify-content-between flex-wrap">
          <div>
            <h1>{weatherData.city}</h1>
            <p className="current-details">
              {weatherData.date},{" "}
              <span class="text-capitalize">{weatherData.condition}</span>
              <br />
              Humidity: {weatherData.humidity}%, Wind: {weatherData.wind} km/h
            </p>
          </div>
          <div>
            <p>
              <span className="current-weather-icon align-top">
                <img
                  src={weatherData.imgurl}
                  className="current-weather-icon"
                  alt={weatherData.condition}
                />
              </span>
              <span className="current-weather-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="current-weather-degree">
                <a href="/">°F</a> | <a href="/">°C</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd809658a5b50o74b7f3fe9fa5dft8a8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
