import React, { useState } from "react";

export default function TempConvertation (props) {
    let [unit, setUnit] = useState("metric");
    function showFahrenheit (event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("metric");
    }
    if (unit === "metric") {
        return (
     <div className="col-12 col-sm-4 text-center">
                    <span className="current-temperature"> {props.temp} <sup>°C | <a href="/" onClick={showFahrenheit}>°F</a></sup> </span>
                    <div>
                        <span className="day-min-temperature"> {props.mintemp}°</span>  <span className="day-max-temperature"> {props.maxtemp}°</span> 
                    </div>
    </div>
);
    } else {
        return (
            <div className="col-12 col-sm-4 text-center">
                    <span className="current-temperature"> {Math.round(props.temp*9/5+32)} <sup> <a href="/" onClick={showCelsius}>°C </a>| °F</sup> </span>
                    <div>
                        <span className="day-min-temperature"> {Math.round(props.mintemp*9/5+32)}°</span>  <span className="day-max-temperature"> {Math.round(props.maxtemp*9/5+32)}°</span> 
                    </div>
    </div>
        );
    }

}