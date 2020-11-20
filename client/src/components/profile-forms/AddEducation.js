import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { Link } from "react-router-dom";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className="display-4 text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that
        you have attended
      </p>
      <small>* = required field</small>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="school">* School or Bootcamp</label>
          <input
            type="text"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
            placeholder="School or Bootcamp"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree">* Degree or Certificate</label>
          <input
            type="text"
            name="degree"
            value={degree}
            onChange={(e) => onChange(e)}
            placeholder="Degree or Certificate"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fieldofstudy">Field of Study</label>
          <input
            type="text"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            placeholder="Field of Study"
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
            Current School or Bootcamp
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
            placeholder="Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
