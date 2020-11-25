import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav } from "react-bootstrap";

const MainNav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Nav>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/profiles" className="text-light">
          Developers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/posts" className="text-light">
          Posts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/dashboard" className="text-light">
          <i className="fas fa-user"></i>{" "}
          <span className="d-none d-md-inline">Dashboard</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} onClick={logout} to="#" className="text-light">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="d-none d-md-inline">Log Out</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const guestLinks = (
    <Nav className="d-flex flex-row justify-content-around justify-content-sm-end w-100">
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/profiles" className="text-light">
          Developers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/register" className="text-light">
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/login" className="text-light">
          Sign In
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <div>
      <Navbar
        bg="dark"
        expand="sm"
        className="border-bottom border-primary d-flex justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap"
      >
        <h1 className="align-self-center">
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-light font-weight-bold"
          >
            <i className="fas fa-code"></i> DevConnector
          </Navbar.Brand>
        </h1>
        {!loading ? (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        ) : null}
      </Navbar>
    </div>
  );
};

MainNav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MainNav);
