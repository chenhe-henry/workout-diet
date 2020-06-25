import React, { Fragment } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

import Workout from "../Workout/Workout";

const Landing = (props) => {
  const style = {
    border: "1px solid black",
    borderRadius: "3px",
    display: "inline-block",
    margin: "2px",
    padding: "15px",
  };
  return (
    <Fragment>
      <Link to="/analysis" className="Landing__link">
        <h2 className="Landing__navigation">Nutrition Analysis</h2>
      </Link>
      <Link to="/workout" className="Landing__link">
        <Workout title="Workout" style={style} />
      </Link>
    </Fragment>
  );
};

export default Landing;
