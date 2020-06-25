import React from "react";
import "./Workout.scss";

const Workout = ({ style, title }) => (
  <button style={style} className="Workout__link ">
    {title}
  </button>
);

export default Workout;
