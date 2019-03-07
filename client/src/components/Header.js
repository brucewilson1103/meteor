import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="jumbotron jumbotron-fluid bg-info text-light">
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand text-white"><h2>
          Recent and Upcoming Near Earth Objects and Potentially Hazardous
          Asteroids</h2>
        </Link>
        <nav className="d-flex ml-auto">
          <NavLink
            to="/"
            className="nav-link text-white"
            activeClassName="active"
          >
            Search
          </NavLink>

          <NavLink
            to="/saved"
            className="nav-link text-white"
            activeClassName="active"
          >
            Saved
          </NavLink>
          <NavLink
            to="/neo"
            className="nav-link text-white"
            activeClassName="active"
          >
            Neo
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
