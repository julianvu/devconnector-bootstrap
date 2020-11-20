import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Fragment>
      <h1 className="display-4 text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            placeholder="* Job Title"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
            placeholder="* Company"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
            placeholder="Location"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From Date</label>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            name="current"
            value={current}
            checked={current}
            onChange={(e) => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
            className="form-check-input"
          />
          <label htmlFor="current" className="form-check-label">
            Current Job
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="to">To Date</label>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description"></label>
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={(e) => onChange(e)}
            className="form-control"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary my-2 mr-2"
        />
        <Link to="/dashboard" className="btn btn-light my-2">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
