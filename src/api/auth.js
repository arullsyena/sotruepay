// src/api/auth.js

import axiosInstance from "./axiosInstance";

export const login = async ({ phoneNumber, username, password }) => {
  console.log("ppppfse", phoneNumber);

  try {
    let api = "/user/login";
    let response = "";

    if (username) {
      response = await axiosInstance.post(
        api,
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true, // Include this if you are using HTTP-only cookies for authentication
        }
      );
    } else {
      api += `?phone_number=${phoneNumber}`;
      response = await axiosInstance.get(api);
    }

    // Assuming the API returns a token or some user info
    return response.data;
  } catch (error) {
    // Handle errors based on response status
    if (error.response) {
      // Server responded with a status other than 200
      const { status, data } = error.response;
      switch (status) {
        case 400:
          throw new Error(
            data.message || "Bad Request: Please check your input."
          );
        case 401:
          throw new Error(data.message || "Unauthorized: Invalid credentials.");
        case 404:
          throw new Error(
            data.message || "Not Found: The resource does not exist."
          );
        case 500:
          throw new Error(
            data.message || "Server Error: Please try again later."
          );
        default:
          throw new Error(
            data.message || "An error occurred. Please try again."
          );
      }
    } else if (error.request) {
      // Request was made but no response was received
      throw new Error(
        "No response from the server. Please check your network."
      );
    } else {
      // Something else happened while setting up the request
      throw new Error("An error occurred: " + error.message);
    }
  }
};

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

export const register = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

export const checkAuth = async () => {
  const response = await axiosInstance.get(
    "/user/profile",
    {},
    {
      withCredentials: true, // Include this if you are using HTTP-only cookies for authentication
    }
  );
  console.log("testing", response);
  return response;
};
