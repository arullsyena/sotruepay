// src/components/dashboard/Dashboard.js
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import React, { useState } from "react";
import "./Dashboard.css";
import TopNav from "../top-nav/TopNav";
import SideNav from "./SideNav/SideNav";
import { Route, Routes } from "react-router-dom"; // Import Routes
import DashboardPanel from "./dashboardPanel/DashboardPanel";
import HistoryPanel from "./historyPanel/HistoryPanel";
import PayoutPanel from "./payoutPanel/payoutPanel";
import PanelTitle from "./panelTitle/PanelTitle";
import ModalComponent from "../modal/ModalComponent";
// import DashboardOverview from "./DashboardOverview"; // Example component
// import DashboardSettings from "./DashboardSettings"; // Example component

const Wrapper = styled.div``;

// background-color: ${({ theme }) => theme.background};
//   color: ${({ theme }) => theme.text};
const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const navItemsList = [
    { displayName: "Dashboard", link: "ef3rf3", className: "" },
    { displayName: "History", link: "ef3rf3", className: "" },
    { displayName: "Payout", link: "ef3rf3", className: "" },
    { displayName: "Logout", link: "ef3rf3", className: "" },
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
      <button onClick={openModal}>Open Modal</button>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        {/* <h2>Modal Title</h2>
        <p>This is the content inside the modal. You can put anything here.</p> */}
        <button onClick={closeModal}>Close</button>
      </ModalComponent>
      <div className='panel-container'>
        {/* <div className='sidenav-container'>
          <SideNav />
        </div> */}
        <Wrapper className='main-panel'>
          {/* <DashboardPanel /> */}
          <PanelTitle title={"Dashboard"} />
          <Routes>
            {/* Use Routes instead of Switch */}
            <Route path='dd' element={<DashboardPanel />} />
            <Route path='history' element={<HistoryPanel />} />
            <Route path='payout' element={<PayoutPanel />} />
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
