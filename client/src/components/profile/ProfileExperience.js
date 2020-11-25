import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import formatDate from "../../utils/formatDate";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h4 className="text-dark">{company}</h4>
    <p>
      {formatDate(from)} - {to && !current ? formatDate(to) : "Current"}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
