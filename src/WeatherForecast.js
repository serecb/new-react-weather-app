import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "e387700277877d3a7708785c26e28f96";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
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
