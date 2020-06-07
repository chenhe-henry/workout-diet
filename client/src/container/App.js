import React from "react";
import "./App.scss";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>{this.props.appName}</h1>
      </div>
    );
  }
}

export default App;
