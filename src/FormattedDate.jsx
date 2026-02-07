import React from "react";
import "./weather.css";

function FormattedDate(props) {

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours = props.date.getDay();
let day = days[props.date.getDay()];
let minutes = props.date.getDay();

if (hours < 10 ) {

    hours = `0${hours}`;

} 

if (minutes < 10 ) {

    minutes = `0${minutes}`;
}

return (
    <div>
        {day} {hours}:{minutes}
    </div>
)
}

export default FormattedDate
