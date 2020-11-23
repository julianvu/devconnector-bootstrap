import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept error responses from api to check if token has expired
// Log out if expired or invalid token
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
