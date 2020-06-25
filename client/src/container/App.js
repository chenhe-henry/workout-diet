import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Header from "../component/Header/Header";
import Landing from "../component/Landing/Landing";
import Workout from "../component/Workout/Workout";
import Analysis from "../component/Analysis/Analysis";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>{this.props.appName}</h1>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/workout" component={Workout} />
          <Route exact path="/analysis" component={Analysis} />
        </Switch>
      </div>
    );
  }
}

export default App;
