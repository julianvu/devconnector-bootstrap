import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGitHubRepos } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Badge } from "react-bootstrap";

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
                <Badge variant="primary" className="d-block mb-1">
                  Stars: {repo.stargazers_count}
                </Badge>
                <Badge variant="dark" className="d-block mb-1">
                  Watchers: {repo.watchers_count}
                </Badge>
                <Badge variant="light" className="d-block">
                  Forks: {repo.forks_count}
                </Badge>
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
