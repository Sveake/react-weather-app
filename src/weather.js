import React from "react";
import "./weather.css";

export default function Weather () {
  return (
    <div className="weather">
<h2 className="city">Tallinn</h2>
<form className="Search">
  <input type="search" placeholder="Write city here" autoFocus="on" />
  <input type="submit" value="Submit" className="btn btn-info" />
</form>
<ul className="dateTime">
  <li>May 31, 2021</li>
  <li>Updated at 16:00</li>
</ul>
<hr />
<div>
    <ul className="temperature">
      <li>Temperature: 20 <span className="celsius">C</span> | <span className="fahrenheit">F</span></li>
      <li>Cloudy</li>
    </ul>
<div className="row">
      <div className="col-2">
        <img src="https://cdn3.iconfinder.com/data/icons/weather-610/64/weather_drizzle_rain_cloud-512.png" alt="weather" width="80" />
      </div>
  <div className="col-4">
    <ul className="weather-data">
      <li>Humidity: 80%</li>
      <li>Precipitation: 15%
      </li>
      <li>
      Wind speed: 5 km / h
      </li>
    </ul>
  </div>
  </div>
</div>
    </div>
  );
}