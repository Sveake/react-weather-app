import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo (props) {
    return (
        <div className="weatherInfo">
<h2 className="city">{props.data.city}</h2>
<ul className="dateTime">
  <li><FormatDate date={props.data.date} /></li> 
  <li>Updated at 16:00</li>
</ul>
<hr />
<div>
    <ul className="temperature">
      <li>{Math.round(props.data.temperature)} <span className="celsius">C</span> | <span className="fahrenheit">F</span></li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
<div className="row">
      <div className="col-2">
        <img src={props.data.icon} alt="weather" width="80" />
      </div>
  <div className="col-4">
    <ul className="weather-data">
      <li>Humidity: {props.data.humidity} %</li>
      <li>
      Wind speed: {props.data.wind} km / h
      </li>
    </ul>
  </div>
  </div>
</div>
</div>
    )
}