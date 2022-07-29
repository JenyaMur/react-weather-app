import React from "react";

export default function TempConvertation (props) {
    
        return (
     <div className="col-12 col-sm-4 text-center">
                    <span className="current-temperature"> {props.temp} <sup>°C</sup> </span>
                    <div>
                        <span className="day-min-temperature"> {props.mintemp}°</span>  <span className="day-max-temperature"> {props.maxtemp}°</span> 
                    </div>
    </div>
);
}