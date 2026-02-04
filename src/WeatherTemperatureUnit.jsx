import React, {useState} from "react";


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
         <div className="temperature">{Math.round(props.celcius)} <span><a href="/" onClick={celciusUnit}>°C</a> | <a href="/" onClick={fahrenheitUnit}>°F</a></span></div>
    )

} else {

    let fahrenheitTemperature = (props.celcius * 9/5) + 32;

    return (
         <div className="temperature">{Math.round(fahrenheitTemperature)} <span><a href="/" onClick={celciusUnit}>°C</a> | <a href="/" onClick={fahrenheitUnit}>°F</a></span></div>
    )
} 

}

export default WeatherTemperatureUnit