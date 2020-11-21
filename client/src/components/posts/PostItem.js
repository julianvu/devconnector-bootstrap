import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { addLike, deletePost, removeLike } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  const onLikeClick = (postID) => {
    addLike(postID);
  };

  const onUnlikeClick = (postID) => {
    removeLike(postID);
  };

  const onDeleteClick = (postID) => {
    deletePost(postID);
  };

  return (
    <div className="post bg-white py-4 my-4 border rounded-lg row mx-auto align-items-center">
      <div className="col-md-3 text-center">
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="" className="rounded-circle" />
          <h4 className="m-0">{name}</h4>
        </Link>
      </div>
      <div className="col-md-9 align-self-end">
        <p>{text}</p>
        <div>
          <small className="text-muted">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </small>
          <div className="d-flex">
            <button
              onClick={() => onLikeClick(_id)}
              className="btn btn-light btn-like-unlike mr-2"
            >
              <i className="fas fa-thumbs-up"></i>

              <span>
                {likes.length > 0 && (
                  <span className="badge badge-light">{likes.length}</span>
                )}
              </span>
            </button>
            <button
              onClick={() => onUnlikeClick(_id)}
              className="btn btn-light btn-like-unlike mr-2"
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} className="btn btn-primary mr-2">
              Discussion{" "}
              {comments.length > 0 && (
                <span className="badge badge-light">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => onDeleteClick(_id)}
                className="btn btn-danger"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
