// src/components/dashboard/Dashboard.js
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import React, { useState } from "react";
import "./Dashboard.css";
import TopNav from "../top-nav/TopNav";
import SideNav from "./SideNav/SideNav";
import { Route, Routes } from "react-router-dom"; // Import Routes
// import DashboardOverview from "./DashboardOverview"; // Example component
// import DashboardSettings from "./DashboardSettings"; // Example component

const Wrapper = styled.div``;

// background-color: ${({ theme }) => theme.background};
//   color: ${({ theme }) => theme.text};
const Dashboard = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const navItemsList = [
    { displayName: "Dashboard", link: "ef3rf3", className: "" },
    { displayName: "History", link: "ef3rf3", className: "sml-scrn-only" },
    { displayName: "Payout", link: "ef3rf3", className: "sml-scrn-only" },
    { displayName: "Dashboard", link: "ef3rf3", className: "sml-scrn-only" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <TopNav toggleTheme={toggleTheme} navItemsList={navItemsList} />
      <div className='panel-container'>
        <div className='sidenav-container'>
          <SideNav />
        </div>
        <Wrapper className='main-panel'>
          <Routes>
            {" "}
            {/* Use Routes instead of Switch */}
            {/* <Route path='/dashboard' element={<DashboardOverview />} />{" "} */}
            {/* Use element prop */}
            {/* <Route
                path='/dashboard/settings'
                element={<DashboardSettings />}
              />{" "} */}
            {/* Use element prop */}
            {/* Add more routes as needed */}
          </Routes>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
