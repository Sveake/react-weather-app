 // import React, { useState } from "react";
 //  import axios from "axios";
 // import "./weather.css";

 // export default function Weather() {
    //  let [city, setCity] = useState(null);
  //   let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(
      <ul className="forecast">
        <li>
          Temperature: {Math.round(response.data.main.temp)} degrees Celsius
        </li>
        <li>Humidity: {response.data.main.humidity} %</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather"
          />
        </li>
      </ul>
    );
  }

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9aef592de78a13851ffe5a565ea13c5f&units=metric
    `;
    axios.get(url).then(showForecast);
  }

  return (
    <div className="App">
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={getCity}
          type="search"
          placeholder="Type city here..."
        />
        <input type="submit" value="Search" />
      </form>

      <div> {forecast} </div>
    </div>
  );
} 