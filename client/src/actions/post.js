import { setAlert } from "./alert";
import api from "../utils/api";
import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  REMOVE_COMMENT,
  UPDATE_LIKES,
} from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get("/posts");
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get post by ID
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/posts/${id}`);
    dispatch({ type: GET_POST, payload: res.data });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
    dispatch(setAlert("Post Removed", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/posts/", formData);
    dispatch({ type: ADD_POST, payload: res.data });
    dispatch(setAlert("Post Created", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add comment
export const addComment = (postID, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/posts/comment/${postID}`, formData);
    dispatch({ type: ADD_COMMENT, payload: res.data });
    dispatch(setAlert("Comment Added", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete comment
export const deleteComment = (postID, commentID) => async (dispatch) => {
  try {
    await api.delete(`/posts/comment/${postID}/${commentID}`);
    dispatch({ type: REMOVE_COMMENT, payload: commentID });
    dispatch(setAlert("Comment Removed", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Like
export const addLike = (postID) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/like/${postID}`);
    dispatch({ type: UPDATE_LIKES, payload: { postID, likes: res.data } });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Remove Like
export const removeLike = (postID) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/unlike/${postID}`);
    dispatch({ type: UPDATE_LIKES, payload: { postID, likes: res.data } });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
