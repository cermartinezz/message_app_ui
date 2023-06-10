import axios from "axios";

let Api = axios.create({
  baseURL: "http://127.0.0.1:8091/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Api.defaults.withCredentials = true;

export default Api;
