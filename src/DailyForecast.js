import React, { useState, useEffect } from "react";
import DayForecast from "./DayForecast";
import axios from "axios";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates]);



    function showWeatherDaily(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
          return (
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index<6 && index>0) {
                        return (
                      <div className="col text-center" key={index}>
                 <DayForecast data={dailyForecast}/>
            </div>
                );
                } else {
                    return null;
                }
            })}
           
        </div>
    );
    } else {
    let apiKey = `c503fd3e2b61af4d5ffcbbff44f2a89c`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherDaily);
    return "Loaded..."
    }
}