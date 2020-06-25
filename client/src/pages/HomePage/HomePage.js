import React, { Fragment } from "react";
import "./HomePage.scss";
import { NavLink } from "react-router-dom";

import Workout from "../../component/Workout/Workout";

const HomePage = (props) => {
  const style = {
    border: "1px solid black",
    borderRadius: "3px",
    display: "inline-block",
    margin: "2px",
    padding: "15px",
  };
  return (
    <Fragment>
      <NavLink exact to="/" activeClassName="current__link">
        <button className="HomePage__link">Home</button>
      </NavLink>
      <NavLink to="/analysis" activeClassName="current__link">
        <button className="HomePage__link">Nutrition Analysis</button>
      </NavLink>
      <NavLink to="/workout" activeClassName="current__link">
        <Workout title="Workout" style={style} />
      </NavLink>
    </Fragment>
  );
};

export default HomePage;
