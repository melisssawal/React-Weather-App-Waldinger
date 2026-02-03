import React from "react";
import FormattedDate from "./FormattedDate.jsx";




function WeatherDisplay (props) {

    return (
        <div className= "WeatherData">
            <div className= "Weather">

            <form action="Search">
            <div className="row text-center">
                <div className="col-10">
                <input type="search" placeholder="Enter a city..." className="form-control"/></div>
                <div className="col-2"><input type="submit" value= "Search" className="btn btn-primary"/></div>
                </div>
            </form>

             <h1>{weatherData.city}</h1>
             <ul>
                <li><FormattedDate /></li>
                <li className="text-capitalize">{weatherData.description}</li>
             </ul>
             <div className = "row">
                <div className="col-6">
                    <div className = "clearfix">
                    <img src={weatherData.iconUrl} alt={weatherData.description}  className = "float-left"/>
                    {Math.round(weatherData.temperature)}°C
                </div>
                </div>
                <div className="col-6">

                    <ul>
                        <li>Feels Like: {Math.round(weatherData.feelsLike)}°C</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                    </ul>
                </div>
                </div>
             </div> 

        </div>
    )
}

export default WeatherDisplay