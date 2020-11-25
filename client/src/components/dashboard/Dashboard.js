import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { Button } from "react-bootstrap";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  const onDeleteClicked = () => {
    deleteAccount();
  };

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="mt-5">
      <h1 className="display-4 text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome{user && ", " + user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2">
            <Button variant="danger" onClick={() => onDeleteClicked()}>
              <i className="fas fa-user-minus"></i> Delete Account
            </Button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet set up a profile. Please add some info.</p>
          <Button
            as={Link}
            variant="primary"
            to="/create-profile"
            className="my-1"
          >
            Create Profile
          </Button>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
