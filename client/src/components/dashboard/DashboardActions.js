import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const DashboardActions = () => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center justify-content-sm-start">
      <Button as={Link} variant="light" to="/edit-profile" className="mr-2">
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Button>
      <Button as={Link} variant="light" to="/add-experience" className="mr-2">
        <i className="fab fa-black-tie text-primary"></i> Add Experience
      </Button>
      <Button as={Link} variant="light" to="/add-education">
        <i className="fas fa-graduation-cap text-primary"></i> Add Education
      </Button>
    </div>
  );
};

export default DashboardActions;
