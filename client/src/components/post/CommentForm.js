import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postID, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postID, { text });
    setText("");
  };

  return (
    <div>
      <div className="bg-primary text-white">
        <h4 className="p-2 font-weight-bold">Leave a Comment</h4>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="my-2">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a Post"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
          className="form-control"
        ></textarea>
        <input type="submit" value="Submit" className="btn btn-dark my-2" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
