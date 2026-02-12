import React from "react";
import "./weather.css";

function FormattedDate(props) {

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours = props.date.getHours();
let day = days[props.date.getDay()];
let minutes = props.date.getMinutes();


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
