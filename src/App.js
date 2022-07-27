import React from "react";
import Weather from "./Weather";
import "./App.css"

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Львов"/>
                <footer className="mt-3 text-center">
                    <p>
                        <a href="https://github.com/JenyaMur/react-weather-app" target="_blank" rel="noopener noreferrer">Open source</a> by Jane Muravshchyk 
                     </p>  
              </footer>
            </div>
        </div>
    );
}