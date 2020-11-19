import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-primary">
        <h1>
          <Link to="/" className="navbar-brand text-light font-weight-bold">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="#" className="nav-link text-light">
              Developers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link text-light">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-light">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
