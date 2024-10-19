// src/api/axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://stp-advance.onrender.com", // Update with your API base URL
  timeout: 10000, // Request timeout
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // No need to add the token from localStorage, as the browser will handle cookies automatically.
    // However, you might want to set credentials to include cookies in cross-origin requests.
    config.withCredentials = true; // Ensure cookies are sent with cross-origin requests (if applicable)

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
