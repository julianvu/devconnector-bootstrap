import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

const Register = ({ setAlert, register, isAuthenticated }) => {
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

  // Redirect if authenticated
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="register" className="mt-5 mx-auto">
      <div className="text-center">
        <h1 className="display-4 text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
      </div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="nameRegister">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="emailRegister">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className="text-muted">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email.
          </small>
        </Form.Group>
        <Form.Group controlId="passwordRegister">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            minLength="6"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="passwordConfirmationRegister">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="passwordConfirmation"
            minLength="6"
            required
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
