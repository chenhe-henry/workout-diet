import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Landing from "../component/Landing/Landing";
import HomePage from "../pages/HomePage/HomePage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>{this.props.appName}</h1>
        <HomePage />
        <Switch></Switch>
      </div>
    );
  }
}

export default App;
