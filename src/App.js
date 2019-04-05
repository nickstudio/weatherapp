import React, { Component } from "react";
import Title from "./components/title";
import MainApp from "./components/mainApp";
const API_KEY = "YOUR_API_KEY_HERE";
class App extends Component {
  state = {
    fetched_data: {
      city: undefined,
      temp: undefined,
      humidity: undefined,
      weather: undefined
    },
    shown: false,
    err: {
      show: false,
      message: ""
    }
  };
  getWeather = async e => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    const api_kall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_kall.json();
    let fetched_data, err;
    if (data.cod === 200) {
      fetched_data = {
        city: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        weather: data.weather[0].main
      };
      err = {
        show: false,
        message: ""
      };
      this.setState({ fetched_data });
    } else {
      err = {
        show: true,
        message: data.message
      };
    }
    this.setState({ shown: true, err });
    console.log = function() {};
  };
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Title />
          <MainApp onGetWeather={this.getWeather} currentWeather={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
