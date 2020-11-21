import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGitHubRepos } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const ProfileGitHub = ({ username, getGitHubRepos, repos }) => {
  useEffect(() => {
    getGitHubRepos(username);
  }, [getGitHubRepos, username]);

  return (
    <div>
      <h2 className="text-primary my-2">GitHub Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div
            key={repo._id}
            className="d-flex justify-content-between border bg-white p-2 my-2"
          >
            <div>
              <h5 className="">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h5>
              {repo.description && <p>{repo.description}</p>}
            </div>
            <div>
              <ul className="mb-0">
                <li className="badge badge-primary d-block mb-1">
                  Stars: {repo.stargazers_count}
                </li>
                <li className="badge badge-dark d-block mb-1">
                  Watchers: {repo.watchers_count}
                </li>
                <li className="badge badge-light d-block">
                  Forks: {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGitHub.propTypes = {
  getGitHubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGitHubRepos })(ProfileGitHub);
