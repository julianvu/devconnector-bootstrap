import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Media, Row } from "react-bootstrap";

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
    <Row className="justify-content-center align-items-center bg-light my-3 p-3 mx-4 mx-sm-5 mx-md-0 rounded-lg">
      <Col md="3" as="img" className="rounded-circle" src={avatar}></Col>
      <Col md="6" className="text-center text-md-left my-3 my-md-0">
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </Col>
      <Col md="3" className="d-flex flex-column align-items-center">
        <ul className="list-unstyled">
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <i className="fas fa-check"></i> {skill}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
