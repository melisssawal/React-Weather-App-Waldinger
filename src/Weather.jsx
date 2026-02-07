import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse (response) {


        setWeatherData ({ 
            
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            feelsLike: response.data.temperature.feels_like,
            iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
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


if (weatherData.ready) {
    return (
        <div className="Weather">

            <form action="Search" onSubmit={handleSubmit}>
    
                    <input className="search-text" type="search" placeholder="Enter a city..."  onChange={handleCityChange}  />
                
                    <input className="search-button" type="submit" value= "Search" />
            
            </form>
            <WeatherDisplay  data={weatherData} />
            
             </div> )
       } else {

        search();

        return "Loading...";
       
       }

}

export default Weather
