import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="03d" size={40} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">3</span>
            <span className="WeatherForecast-temp-min"> / 3 *C</span>
          </div>
          <div className="WeatherForecast-descr">descr.</div>
        </div>
      </div>
    </div>
  );
}
