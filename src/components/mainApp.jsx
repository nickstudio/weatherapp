import React, { Component } from "react";
import Form from "./form";
import Weather from "./weather";
class MainApp extends Component {
  state = {};
  render() {
    let { currentWeather, onGetWeather } = this.props;
    return (
      <div className="form_container">
        <Form onGetWeather={onGetWeather} />
        <Weather currentWeather={currentWeather} />
      </div>
    );
  }
}

export default MainApp;
