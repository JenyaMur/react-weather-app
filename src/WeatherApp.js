import React, { useState } from "react";
import axios from "axios";


export default function WeatherApp() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({});

  function searchCity(event) {
    event.preventDefault();
    let key = `81dd766b9316768af2b5be5120d2c81d`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function cityName(query) {
    setCity(query.target.value);
  }
  if (weather.icon) {
    return (
    
        <div className="container">
          <h1>Weather App</h1>
        <form onSubmit={searchCity}>
          <input type="search" onChange={cityName} />
          <input type="submit" value="search"/>
        </form>
        <ul>
          <li>Temperature: {weather.temperature}ºC</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
         <a href="https://github.com/JenyaMur/react-weather-app" target="_blank" rel="noopener noreferrer">Open source</a>
      </div>
    );
  } else {
    return (
      <div>
         <h1>Weather App</h1>
        <form onSubmit={searchCity}>
          <input type="search" onChange={cityName} />
          <input type="submit" value="search" />
        </form>
        <a href="https://github.com/JenyaMur/react-weather-app" target="_blank" rel="noopener noreferrer">Open source</a>
      </div>
    );
  }
}
