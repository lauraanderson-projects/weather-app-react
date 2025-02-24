import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeather(response) {
    //alert(`Weather in Seattle is ${response.data.main.temp}`);
  }

  let city = props.city;
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);

  console.log(apiUrl);

  return <h2>Hello again from Weather</h2>;
}
