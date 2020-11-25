import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import formatDate from "../../utils/formatDate";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h4 className="text-dark">{school}</h4>
    <p>
      {formatDate(from)} - {to && !current ? formatDate(to) : "Current"}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
