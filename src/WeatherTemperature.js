import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
}

function convertCelsius(event) {
   event.preventDefault();
   setUnit("celsius");
}

if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <span>
            {Math.round(props.celsius)}
        </span>
        <span className="unit"> °C |{" "} 
        <a href="_" onClick={convertFahrenheit}>°F
        </a>
        </span>
        </div>
    );
} else {
    let fahrenheitTemperature = (props.celsius * 9/5) + 32;
    return (
        <div className="WeatherTemperature">
        <span>
            {Math.round(fahrenheitTemperature)}
        </span>
        <span className="unit"> <a href="_" onClick={convertCelsius}>°C</a> |{" "} 
        °F
        </span>
        </div>
    );
}
   
}