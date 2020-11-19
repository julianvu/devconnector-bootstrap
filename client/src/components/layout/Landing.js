import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <section
        id="hero"
        className="jumbotron jumbotron-fluid text-center text-light d-flex flex-column justify-content-center align-items-center"
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

export default Landing;
