import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { checkAuth } from "../api/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuths = async () => {
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

    // Set loading to true at the start
    setLoading(true);
    setIsAuthenticated(false);

    // Define the async function for checking auth
    const fetchData = async () => {
      try {
        const data = await checkAuth();
        console.log("***** ", data);

        if (data.status === 200) {
          setIsAuthenticated(true);
          console.log("***** auth ", "true");
        }
      } catch (error) {
        console.error("Error during authentication check:", error);
      } finally {
        // Ensure that loading is set to false after the check
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();

    // Dependency array is empty, so this runs once when the component mounts
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
