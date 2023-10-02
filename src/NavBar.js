import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

  return (
    <div className="NavBar">
      <NavLink className="NavBar-item" to="/">Home</NavLink>
      <NavLink className="NavBar-item" to="/soda">Soda</NavLink>
      <NavLink className="NavBar-item" to="/chips">Chips</NavLink>
      <NavLink className="NavBar-item" to="/candy-bar">Candy Bar</NavLink>
    </div>
  );


}

export default NavBar;
