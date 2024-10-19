import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      console.log("checkauth");

      const response = await axios.get("https://google.com", {
        // withCredentials: true, // Include HTTP-only cookie
      });

      // Assuming a 200 status means the user is authenticated
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      toast.warn("This is a warning j notification!");
      console.log("Auth check failed:", error);
      setIsAuthenticated(false);
    } finally {
      console.log("finally ", error);
      setLoading(false);
    }
  };

  // Function to refresh the authentication status
  const refreshAuth = () => {
    setLoading(true);
    checkAuth();
  };

  // Use effect to check if user is authenticated
  useEffect(() => {
    console.log("authhu");
    // Check if the HTTP-only cookie exists before calling the API
    const cookieExists = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("your_cookie_name="));

    if (cookieExists) {
      // Only call the API if the cookie exists
      console.log("authprovider Checking authentication status...");
      checkAuth();
    } else {
      console.log("authprovider Checking elsee.");
      // If no cookie, user is not authenticated
      setIsAuthenticated(false);
      setLoading(false); // Stop loading if no cookie
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
