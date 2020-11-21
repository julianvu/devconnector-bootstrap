import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postID,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  const onDeleteClick = (postID, commentID) => {
    deleteComment(postID, commentID);
  };

  return (
    <div className="row py-4 my-4 border rounded-lg row mx-auto align-items-center">
      <div className="col-md-3 text-center">
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="" className="rounded-circle" />
          <h4 className="m-0">{name}</h4>
        </Link>
      </div>
      <div className="col-md-9 align-self-center">
        <p className="my-2">{text}</p>
        <small className="text-muted">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{" "}
        </small>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => onDeleteClick(postID, _id)}
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  postID: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
