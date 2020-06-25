import React, { Fragment } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Timer from "../Timer/Timer";

const Header = (props) => {
  return (
    <Fragment>
      <NavLink exact to="/" activeClassName="current__link">
        <button className="Header__link">Home</button>
      </NavLink>
      <NavLink to="/analysis" activeClassName="current__link">
        <button className="Header__link">Nutrition Analysis</button>
      </NavLink>
      <NavLink to="/workout" activeClassName="current__link">
        <button className="Header__link">Workout</button>
      </NavLink>
      <Timer />
    </Fragment>
  );
};

export default Header;
