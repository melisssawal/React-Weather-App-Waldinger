import React from "react"; 


function ForecastDate(props) {
    
    function day() {

        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

        return weekdays[day];

    }

    function icon() {
         let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;

         return iconUrl[icon];
    }

    return (      

        <div className="Forecast-Day">
                    <div className="forecast-weekday">{day()}</div>
                    <div><img src={icon()} alt={props.data.condition.description} className="forecast-icon" /></div>
                    <span className="forecast-min-temp">{Math.round(props.data.temperature.minimum)}°</span>
                    <span className="forecast-max-temp">{Math.round(props.data.temperature.maximum)}°</span>
                </div>
    )



}


export default ForecastDate