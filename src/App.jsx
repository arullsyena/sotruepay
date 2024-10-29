import "./App.css";
import Home from "./components/home/Home";
import React, { useState } from "react";
// src/components/dashboard/Dashboard.js
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../src/components/dashboard/theme";
import TopNav from "./components/top-nav/TopNav";
import ScrollDown from "./components/animation/scrollDown/ScrollDown";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SideNav from "./components/dashboard/SideNav/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login/LoginPage";
// import PrivateRoute from "./route/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";
import { useAuth } from "./auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { checkAuth } from "./api/auth";
import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

import Notify from "./components/notification/Notify";
// import ModalComponent from "./components/modal/ModalComponent";

// const { isAuthenticated } = useAuth();
let hasNotified = false;
function HandleNotLogIn() {
  const { showNotification } = Notify();

  if (!hasNotified) {
    showNotification("User Not Logged In, Redirecting to Login Page", {
      type: "warning",
      autoClose: 2000,
    });
    hasNotified = true;
  }

  return <Navigate to='/login' />;
}
function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, navigate to the login page.
  // Check if the user is authenticated
  if (!isAuthenticated) {
    return <HandleNotLogIn />;
  }

  return children;
}

function App() {
  const { showNotification } = Notify(); // Use the custom hook

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
  
    font-family: Arial, sans-serif;

    transition: background-color 0.3s ease;
  }

`;

  const [theme, setTheme] = useState(lightTheme);
  console.log("theme", theme);

  const toggleTheme = () => {
    console.log("theme", "togggle");
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const StyledComponent = styled.div`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    padding: 20px;
    border-radius: 8px;
  `;

  //
  const navItemsList = [
    { displayName: "Login", link: "login", className: "" },
    { displayName: "About", link: "ef3rf3", className: "" },
    { displayName: "Services", link: "ef3rf3", className: "" },
    { displayName: "Dashboard", link: "ef3rf3", className: "" },
  ];
  const notify = () => {
    showNotification("This is a warning notification!", { type: "warning" });
    // toast("Wow! This is a notification!");
    // toast.success("This is a success notification!", {
    //   autoClose: 10000, // 5 seconds
    // });
    // toast.error("This is an error notification!");
    // toast.warn("This is a warning notification!");
    // toast.info("This is an info notification!");
    // toast.dismiss();
  };

  return (
    // <StyledComponent>
    <BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <button onClick={() => checkAuth()}>Show Toast</button> */}
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <TopNav navItemsList={navItemsList} />
                  {/* <ScrollDown /> */}
                  <Home />
                </>
              }
            />

            <Route
              path='/dashboard/*'
              element={
                // <PrivateRoute path='/dashboard'>
                <Dashboard
                  theme={theme}
                  toggleTheme={toggleTheme}
                  isAdmin={false}
                />
                // </PrivateRoute>
              }
            />

            <Route
              path='/admin/*'
              element={
                // <PrivateRoute path='/dashboard'>
                <Dashboard
                  theme={theme}
                  toggleTheme={toggleTheme}
                  isAdmin={true}
                />
                // </PrivateRoute>
              }
            />

            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
    // </StyledComponent>
  );
}

export default App;
