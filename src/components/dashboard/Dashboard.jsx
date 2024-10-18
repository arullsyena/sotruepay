// src/components/dashboard/Dashboard.js
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import React, { useState } from "react";
import "./Dashboard.css";
import TopNav from "../top-nav/TopNav";
import SideNav from "./SideNav/SideNav";
import { Route, Routes } from "react-router-dom"; // Import Routes
import DashboardPanel from "./dashboardPanel/DashboardPanel";
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
      <TopNav
        toggleTheme={toggleTheme}
        navItemsList={navItemsList}
        style={{
          margin: "1.5rem 1.5rem 1.2rem 1.5rem",
          width: "auto",
        }}
      />
      <div className='panel-container'>
        <div className='sidenav-container'>
          <SideNav />
        </div>
        <Wrapper className='main-panel'>
          <DashboardPanel />
          <Routes>
            {" "}
            {/* Use Routes instead of Switch */}
            {/* <Route path='/dashboard' element={<DashboardOverview />} />{" "} */}
            {/* Use element prop */}
            {/* <Route
              path='/dashboard/dashboard'
              element={<DashboardPanel />}
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
