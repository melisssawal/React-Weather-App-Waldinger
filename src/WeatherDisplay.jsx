import React from "react";
import FormattedDate from "./FormattedDate.jsx";
import Weather from "./Weather.jsx";
import WeatherTemperatureUnit from "./WeatherTemperatureUnit.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';




function WeatherDisplay (props) {

    return (
        <div className="WeatherData">

             <h1><strong>{props.data.city}</strong></h1>
             <ul className="list-unstyled">
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
             </ul>
             <div className = "row">
                <div className="col-6">
                    <div className = "clearfix">
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <WeatherTemperatureUnit celcius={props.data.temperature}/>
                   
                </div>
                </div>
                <div className="col-6">

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