import React, { Component } from "react";
import WeatherComponent from "./weathercomponent";
class Weather extends Component {
  state = {};
  render() {
    let { currentWeather } = this.props;
    return (
      <div className="weather">
        <WeatherComponent currentWeather={currentWeather} />
      </div>
    );
  }
}

export default Weather;
