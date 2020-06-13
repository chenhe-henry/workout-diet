import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../component/Landing/Landing";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>{this.props.appName}</h1>
          <Route exact path="/" component={Landing}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
