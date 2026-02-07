import React, {useState} from "react";
import "./weather.css";


function WeatherTemperatureUnit (props) {

    const [unit, setUnit] = useState ("celcius");


    function fahrenheitUnit(event) {
        event.preventDefault();
        setUnit("fahrenheit");

    }

    function celciusUnit(event) {
        event.preventDefault();
        setUnit ("celcius");

    }


   if ( unit === "celcius") {
    return (
         <span className="temperature"> <span className="temperature-digit">{Math.round(props.celcius)}</span><span className="temperature-unit"><a href="/" onClick={celciusUnit}>°C</a> | <a href="/" onClick={fahrenheitUnit}>°F</a></span></span>
    )

} else {

    let fahrenheitTemperature = (props.celcius * 9/5) + 32;

    return (
         <span className="temperature"><span className="temperature-digit">{Math.round(fahrenheitTemperature)}</span> <span className="temperature-unit"><a href="/" onClick={celciusUnit}>°C</a> | <a href="/" onClick={fahrenheitUnit}>°F</a></span></span>
    )
} 

}

export default WeatherTemperatureUnit