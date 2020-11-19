import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container">
      <h1 className="display-3 text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form>
        <div className="form-group">
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => onChange(e)}
            className="form-control"
          >
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are in your career
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            value={company}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="Website"
            value={website}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
          <small className="form-text">
            City & state suggested (e.g. Reno, NV)
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Skills"
            value={skills}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
          <small className="form-text">
            Please use comma separated values (e.g. HTML, CSS, Javascript, PHP)
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="githubusername">Github Username</label>
          <input
            type="text"
            id="githubusername"
            name="githubusername"
            placeholder="Github Username"
            value={githubusername}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="A short bio of yourself"
            value={bio}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="my-4">
          <button
            type="button"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span className="mx-2">Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group d-flex">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                id="twitter"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                id="facebook"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                id="youtube"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="LinkedIn URL"
                id="linkedin"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                id="instagram"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-2 mr-2" />
        <Link to="/dashboard" className="btn btn-light my-2">
          Go Back
        </Link>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default connect()(CreateProfile);
