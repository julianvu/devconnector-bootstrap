import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById, clearProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGitHub from "./ProfileGitHub";

const Profile = ({
  getProfileById,
  clearProfile,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    return () => {
      clearProfile();
    };
  }, [getProfileById, match.params.id, clearProfile]);

  return (
    <div className="my-5">
      {loading ? (
        <Spinner />
      ) : profile === null ? (
        <Fragment>
          <h3 className="text-primary">
            This profile does not exist or has been removed.
          </h3>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light mx-1">
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark mx-1">
                Edit Profile
              </Link>
            )}
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className="d-flex flex-wrap flex-md-nowrap">
            <div className="border w-100 w-md-50 bg-white p-5">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience.id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
            <div className="mx-2"></div>
            <div className="my-2"></div>
            <div className="border w-100 w-md-50 bg-white p-5">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education.id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
          </div>
          <div>
            {profile.githubusername && (
              <ProfileGitHub username={profile.githubusername} />
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById, clearProfile })(
  Profile
);
