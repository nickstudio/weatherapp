import React, { Component } from "react";
class WeatherComponent extends Component {
  state = {};
  render() {
    let {
      city,
      temp,
      humidity,
      weather
    } = this.props.currentWeather.fetched_data;
    let { shown, err } = this.props.currentWeather;
    return (
      <React.Fragment>
        <div className={shown ? "" : "hidden"}>
          <div id="weather_container" className={!err.show ? "" : "hidden"}>
            <div>
              <span>Location: </span>
              <span>{city}</span>
            </div>
            <div>
              <span>Temperature: </span>
              <span>{temp}</span>
            </div>
            <div>
              <span>Humidity: </span>
              <span>{humidity}</span>
            </div>
            <div>
              <span>Weather: </span>
              <span>{weather}</span>
            </div>
          </div>
          <div id="error" className={err.show ? "" : "hidden"}>
            Error: {err.message}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WeatherComponent;
// "", false, "string"
// if ("") -> all !visible
//if (!false) -> hidden top
//if (=== "") -> hidden bottom
