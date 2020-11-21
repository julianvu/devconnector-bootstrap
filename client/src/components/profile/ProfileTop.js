import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="bg-primary p-2 text-light text-center">
      <img src={avatar} alt="" className="rounded-circle my-2" />
      <h1 className="display-5 font-weight-bold">{name}</h1>
      <p className="lead">
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="my-2">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mr-1"
          >
            <i className="fas fa-globe fa-2x"></i>
          </a>
        )}

        {social && social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-1"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        )}

        {social && social.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-1"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        )}
        {social && social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-1"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        )}
        {social && social.youtube && (
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-1"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}
        {social && social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light ml-1"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
