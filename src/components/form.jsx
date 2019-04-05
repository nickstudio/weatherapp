import React, { Component } from "react";
class Form extends Component {
  state = {};
  render() {
    let { onGetWeather } = this.props;
    return (
      <div>
        <form onSubmit={onGetWeather}>
          <input
            type="text"
            name="city"
            placeholder="Input your city"
            autoComplete="off"
          />
          <button type="submit" className="button">
            GO
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
