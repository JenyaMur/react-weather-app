import React from "react";
import "./DayForecast.css"

export default function DailyForecast(props) {
    function maxTemp() {
        let max = Math.round(props.data.temp.max);
        return max;
    }
     function minTemp() {
        let min = Math.round(props.data.temp.min);
        return min;
    }
    function day() {
        let data = new Date(props.data.dt * 1000);
        let day = data.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    let altImg = props.data.weather[0].description;
    let urlImg = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`

    return (
                    <div className="DayForecast">
                <div>{day()}</div>
                <img src={urlImg} alt={altImg}/>
                <div>
                    <span>{maxTemp()}º</span> <span className="min-temp"> {minTemp()}º</span>
                </div>
            </div>
    );
}