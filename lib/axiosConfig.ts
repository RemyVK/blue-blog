import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
