import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };

  return (
    <div>
      <div className="bg-primary text-white">
        <h4 className="p-2 font-weight-bold">Say Something...</h4>
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
