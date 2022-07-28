import React, { useState } from "react";
import CurrentData from "./CurrentData";
import TempConvertation from "./TempConvertation";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [weatherData, setWeatherData] = useState ({ready: false});
    function showWeather(response) {
        setWeatherData ({
            ready: true,
            name: response.data.name,
            temperature: Math.round(response.data.main.temp),
            feelstemp: Math.round(response.data.main.feels_like),
            maxtemp: Math.round(response.data.main.temp_max),
            mintemp: Math.round(response.data.main.temp_min),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: new Date (response.data.dt * 1000)
        })
    }

    function searchCity() {
        let apiKey = `c503fd3e2b61af4d5ffcbbff44f2a89c`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchCity();
    }
    function handleCity(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
          return (
        <div className="Weather"> 
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6 col-md-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" onChange={handleCity}/>
                    </div>
                    <div className="col-6 col-md-3 button-row">
                        <input type="submit" value="Search" className="btn btn-primary button-search"/>    
                         <button className="btn btn-primary button-search">Here</button> 
                    </div>
                </div>
            </form>
            <h1 className="mt-3">{weatherData.name}</h1>
            <ul>
                <li>
                    <CurrentData date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row forecast-row">
                <div className="col-12 col-sm-3">
                    <img src={weatherData.icon} alt={weatherData.description} className="current-weather-image" />
                </div>
                <TempConvertation temp={weatherData.temperature} mintemp={weatherData.mintemp} maxtemp={weatherData.maxtemp} />
                <div className="col-12 col-sm-5 weather-day-info">
                    <ul>
                        <li>
                            feels: {weatherData.feelstemp}°C
                        </li>
                         <li>
                             humidity: {weatherData.humidity}%
                        </li>
                         <li>
                            pressure, mm: {weatherData.pressure}
                        </li>
                         <li>
                            wind: {weatherData.wind} m/s
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
    } else {
        searchCity();
        return "Loading..."
    }
}