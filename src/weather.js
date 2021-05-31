import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather () {
const [weatherData, setWeatherData] = useState({});
const [ready, setReady] = useState(false);



function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
  });
  setReady(true);
}

if (ready) {
  return (
    <div className="weather">
<h2 className="city">{weatherData.city}</h2>
<form className="Search">
  <input type="search" placeholder="Write city here" autoFocus="on" />
  <input type="submit" value="Submit" className="btn btn-info" />
</form>
<ul className="dateTime">
  <li><FormatDate date={weatherData.date} /></li> 
  <li>Updated at 16:00</li>
</ul>
<hr />
<div>
    <ul className="temperature">
      <li>{Math.round(weatherData.temperature)} <span className="celsius">C</span> | <span className="fahrenheit">F</span></li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
<div className="row">
      <div className="col-2">
        <img src="https://cdn3.iconfinder.com/data/icons/weather-610/64/weather_drizzle_rain_cloud-512.png" alt="weather" width="80" />
      </div>
  <div className="col-4">
    <ul className="weather-data">
      <li>Humidity: {weatherData.humidity} %</li>
      <li>
      Wind speed: {weatherData.wind} km / h
      </li>
    </ul>
  </div>
  </div>
</div>
    </div>
  );
} else {
  const apiKey = "9aef592de78a13851ffe5a565ea13c5f";
  let city = "Tallinn";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading";
}

  
}