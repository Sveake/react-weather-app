import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let apiKey = "9aef592de78a13851ffe5a565ea13c5f";
let lat = props.cordinates.lat;
let lon =props.cordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(handleResponse);

function handleResponse(response) {
    console.log(response);

}

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Friday</div>
                    <div className="WeatherForecast-icon">icon</div>
                    <div className="WeatherForecast-temperatures">
                        <span className="max-temp">20</span> | {" "}
                        <span className="min-temp">10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}