import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { addLike, removeLike } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  const onLikeClick = (postID) => {
    addLike(postID);
  };

  const onUnlikeClick = (postID) => {
    removeLike(postID);
  };

  return (
    <div className="post bg-white p-2 my-2">
      <div>
        <Link to="/profile">
          <img src={avatar} alt="" className="rounded-circle" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-2">{text}</p>
        <p>
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button onClick={() => onLikeClick(_id)} className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>

          <span>
            {likes.length > 0 && (
              <span className="badge badge-light">{likes.length}</span>
            )}
          </span>
        </button>
        <button onClick={() => onUnlikeClick(_id)} className="btn btn-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="badge badge-light">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
