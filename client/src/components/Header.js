import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-light">
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand text-white"><h2>
          Recent and Upcoming Near Earth Objects and Potentially Hazardous
          Asteroids</h2>
        </Link>
        <nav className="d-flex">
          <NavLink
            to="/search"
            className="nav-link text-white"
            activeClassName="active"
          >
            <button className= "btn-info">Birthday Asteroids</button>
          </NavLink>

          <NavLink
            to="/saved"
            className="nav-link text-white"
            activeClassName="active"
          >
            <button className= "btn-info"> Saved</button>
          </NavLink>
          <NavLink
            to="/neo"
            className="nav-link text-white"
            activeClassName="active"
          >
            <button className="btn-info">Neo </button>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
