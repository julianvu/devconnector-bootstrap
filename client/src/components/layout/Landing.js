import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <section
        id="hero"
        className="jumbotron jumbotron-fluid mb-0 text-center text-light d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container ">
          <h1 className="display-3 font-weight-bold">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers.
          </p>
          <div className="row justify-content-center">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <div className="mx-1"></div>
            <Link to="/login" className="btn btn-light">
              Log In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
