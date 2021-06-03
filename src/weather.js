import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather (props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);



function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    coord: response.data.coord,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  });
}

function search() {
  const apiKey = "9aef592de78a13851ffe5a565ea13c5f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault()
  search();
}

function handleCity(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
  return (
    <div className="weather">
<form onSubmit={handleSubmit}>
  <input type="search" placeholder="Write city here" autoFocus="on" onChange={handleCity}/>
  <input type="submit" value="Submit" className="btn btn-info" />
</form>
<WeatherInfo data={weatherData} />
<WeatherForecast cordinates={weatherData.coord}/>

    </div>
  );
} else {
search();
  return "Loading";
}

  
}

