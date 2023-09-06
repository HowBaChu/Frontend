import axios from "axios";

export const Axios = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});
