import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="row justify-content-center align-items-center bg-light my-3 p-3 mx-5 mx-md-0 rounded-lg">
      <img src={avatar} alt="" className="rounded-circle col-md-3" />
      <div className="col-md-6 text-center text-md-left my-3 my-md-0">
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-center">
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check"></i> {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
