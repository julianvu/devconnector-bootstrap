import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
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
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
