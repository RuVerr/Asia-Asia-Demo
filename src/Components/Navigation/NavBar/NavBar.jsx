import React from "react";
import { NavLink } from "react-router-dom";

import "./navBar.scss";
import "./NavBarMedia.scss";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to={"/invest"}>
            Invest
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to={"/about"}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to={"/team"}>
            Our team
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to={"/journey"}>
            Our journey
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
