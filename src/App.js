import React from "react";
import Weather from "./Weather";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Weather App</h1>
                <Weather />
                <footer>
                    <p>
                        <a href="https://github.com/JenyaMur/react-weather-app" target="_blank" rel="noopener noreferrer">Open source</a> by Jane Muravshchyk 
                     </p>  
              </footer>
            </div>
        </div>
    );
}