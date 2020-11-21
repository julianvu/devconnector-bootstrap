import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="bg-light p-5 my-3 text-center">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
          <hr />
        </Fragment>
      )}

      <h2 className="text-primary mt-4">Skill Set</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="p-2">
            <i className="fa fa-check"></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
