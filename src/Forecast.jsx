import React, {useState, useEffect} from "react";
import "./forecast.css";
import axios from "axios";
import ForecastDate from "./ForecastDate";



function Forecast (props) {
    const [loaded, setLoaded] = useState (false);
    const [forecastData, setForecastData] = useState ({});

    useEffect (() => {
        setLoaded(false);
    }, [props.data.city]);




    function handleResponse (response) {
        setLoaded(true);
        setForecastData(response.data.daily);



    }
    
   


if (loaded) {

    return (
        <div className="Forecast">
               <div className="row">
                {forecastData.map(function(dailyForecast, index){

                    if (index < 5) {
                        return (
                        <div className="col" key={index}>
                            <ForecastDate data={dailyForecast} />
                        </div>); 
                        }
                    })}
                
            </div>
        </div>
    )


} else {


    let city = props.data.city;
    const apiKey = "34d34bfd03ebff0892b49ada97eo706t";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;

}
}



export default Forecast