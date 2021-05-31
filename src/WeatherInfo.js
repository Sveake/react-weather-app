import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

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
    <WeatherTemperature celsius={props.data.temperature}/>
<div className="row">
      <div className="col-2">
          <span className="text-capitalize">{props.data.description}</span>
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