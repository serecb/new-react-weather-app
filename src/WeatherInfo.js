import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="txt-center">
        {props.data.city}, {props.data.country}
      </h1>
      <WeatherConversion celsius={props.data.temperature} />
      <WeatherIcon code={props.data.icon} size={130} />
      <h3 className="text-capitalize txt-center">
        <em>{props.data.description}</em>
      </h3>

      <div className="row">
        <div className="col-12 d-flex">
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-4">
            <h5>
              <em>Feels Like: </em>
              {props.data.feelsLike}°C
            </h5>
          </div>
          <div className="col-4 txt">
            <h5>
              <em>Humidity:</em> {props.data.humidity}%
            </h5>
          </div>
          <div className="col-4">
            <h5>
              <em>Wind: </em> {props.data.wind} mph
            </h5>
          </div>
          <h6>
            <em>Updated on:</em>
            <FormattedDate date={props.data.date} />
          </h6>
        </div>
      </div>
    </div>
  );
}
