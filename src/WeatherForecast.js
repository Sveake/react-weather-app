import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
                <div className="col">
                    <div className="WeatherForecast-day">Friday</div>
                    <div className="WeatherForecast-icon">icon</div>
                    <div className="WeatherForecast-temperatures">
                        <span className="max-temp">20</span> | {" "}
                        <span className="min-temp">10</span>
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">Friday</div>
                    <div className="WeatherForecast-icon">icon</div>
                    <div className="WeatherForecast-temperatures">
                        <span className="max-temp">20</span> | {" "}
                        <span className="min-temp">10</span>
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">Friday</div>
                    <div className="WeatherForecast-icon">icon</div>
                    <div className="WeatherForecast-temperatures">
                        <span className="max-temp">20</span> | {" "}
                        <span className="min-temp">10</span>
                    </div>
                </div>
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