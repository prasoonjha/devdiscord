import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="icon-container">
        DevDiscord
      </Link>

      <div className="navlinks-container">
        <ul>
          <li>
            <Link to="!#">Developers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
