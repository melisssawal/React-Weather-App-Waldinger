import React from "react";
import FormattedDate from "./FormattedDate.jsx";
import "./weather.css";
import WeatherTemperatureUnit from "./WeatherTemperatureUnit.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';




function WeatherDisplay (props) {

    return (
        <div className="WeatherData">

             <h1><strong>{props.data.city}</strong></h1>
             <ul className="list-unstyled main-description">
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize temp-description">{props.data.description}</li>
             </ul>
             <div className = "row justify-content-start">
                <div className="col-7 icon-temperature-section">
                    <img src={props.data.iconUrl} alt={props.data.description} className="icon" /> 
                    <WeatherTemperatureUnit celcius={props.data.temperature}/>
                </div>
                <div className="col-5">
                    <ul className="list-unstyled">
                        <li>Feels Like: {Math.round(props.data.feelsLike)}°C</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)}km/h</li>
                    </ul>
                </div>
                </div>
             

        </div>
    )
}

export default WeatherDisplay