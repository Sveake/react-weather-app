import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {

let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);


function handleResponse(response) {
    setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        
    );
} else {
    let apiKey = "9aef592de78a13851ffe5a565ea13c5f";
    let lat = props.cordinates.lat;
    let lon =props.cordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`
    
    
    axios.get(apiUrl).then(handleResponse);

    return null;
}

    
}