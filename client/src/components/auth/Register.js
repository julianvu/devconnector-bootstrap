import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { name, email, password, passwordConfirmation } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setAlert("Passwords do not match", "danger", 3000);
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <h1 className="display-4 text-primary mt-5">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength="6"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation">Confirm Password</label>

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            minLength="6"
            id="passwordConfirmation"
            className="form-control"
            value={passwordConfirmation}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
