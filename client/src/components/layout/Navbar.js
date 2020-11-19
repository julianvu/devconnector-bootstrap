import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link onClick={logout} to="#" className="nav-link text-light">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="d-none d-md-inline">Log Out</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link text-light">
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
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-primary">
        <h1>
          <Link to="/" className="navbar-brand text-light font-weight-bold">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
        {!loading ? (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        ) : null}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
