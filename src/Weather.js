import React from "react";

export default function Weather() {
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                        <button className="btn btn-primary">My city</button>      
                    </div>
                </div>
            </form>
            <h1>Mislata</h1>
            <ul>
                <li>Tuesday 11:48</li>
                <li>Clouds</li>
            </ul>
            <div className="row">
                <div className="col-4">
                    <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="Clouds" />
                </div>
                <div className="col-4">
                    +18 °C
                    <div>
                        +16° +19°
                    </div>
                </div>
                <div className="col-4">
                    <ul>
                        <li>
                            Visibility: 10.0km
                        </li>
                         <li>
                             humidity: 72%
                        </li>
                         <li>
                            pressure, mm: 1019
                        </li>
                         <li>
                            wind: 2.06 m/s
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}