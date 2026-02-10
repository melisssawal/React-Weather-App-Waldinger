import React, {useState} from "react";
import "./forecast.css";
import axios from "axios";



function Forecast (props) {
    const [city, setCity] = useState ("");



    function handleResponse (response) {
        console.log(response.data);
        setCity (props.data.city)
    }
    
    const apiKey = "34d34bfd03ebff0892b49ada97eo706t";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);


    return (
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-weekday">Mon</div>
                    <div><img src={props.data.iconUrl} alt={props.data.description} className="forecast-icon" /></div>
                    <span className="forecast-min-temp">19°</span>
                    <span className="forecast-max-temp">27°</span>

                </div>
            </div>
        </div>
    )
}



export default Forecast