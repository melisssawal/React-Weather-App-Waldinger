import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay.jsx";

function Weather() {
    const [ready, setReady] = useState (false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse (response) {
        setReady(true);
        setWeatherData ({ 
            
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            feelsLike: response.data.temperature.feels_like,
            iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/fog.png`,
            date: new Date (response.data.time * 1000),

        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleCityChange (event) {
        setCity(event.target.value)
    }

    function search () {

        const apiKey = "34d34bfd03ebff0892b49ada97eo706t";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);

    }


if (ready) {
    return (
        <div className= "Weather">

            <form action="Search" onSubmit={handleSubmit}>
            <div className="row text-center">
                <div className="col-10">
                <input type="search" placeholder="Enter a city..." className="form-control" onChange={handleCityChange}/></div>
                <div className="col-2"><input type="submit" value= "Search" className="btn btn-primary"/></div>
                </div>
            </form>
            <WeatherDisplay  data={weatherData} />
            
             </div> )
       } else {

        search();

        return ("Loading...");
       
       }

}

export default Weather
