import React from "react";
import "./weather.css";

export default function Weather () {
  return (
    <div className="weather">
<h2 className="city">Tallinn</h2>
<form className="Search">
  <input type="search" placeholder="Write city here" />
  <input type="submit" value="Submit" className="btn btn-warning" />
</form>
<ul className="dateTime">
  <li>May 31, 2021</li>
  <li>Updated at 16:00</li>
</ul>
<hr />
<div>
    <ul className="temperature">
      <li>Temperature: 20 C</li>
      <li>Icon</li>
      <li>Cloudy</li>
    </ul>
<div className="row">
      <div className="col-3">
        Icon
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