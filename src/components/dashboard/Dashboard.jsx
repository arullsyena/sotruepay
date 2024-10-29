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
import ThemePanel from "../themePanel/ThemePanel";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AdminDashboard from "../admin/adminDashboard/AdminDashboard";
import ManageUsers from "../admin/manageUsers/ManageUsers";

const Wrapper = styled.div``;

const Dashboard = ({ theme, toggleTheme, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  // const handleOpen = () => {
  //   console.log("hooo");
  // };
  const navItemsList = [
    { displayName: "Dashboard", link: "/dashboard/dashboard", className: "" },
    { displayName: "History", link: "/dashboard/history", className: "" },
    { displayName: "Payout", link: "/dashboard/payout", className: "" },
    { displayName: "Logout", link: "/logout", className: "" },
    {
      displayName: "icon",
      link: "#",
      className: "",
      onClick: handleOpen,
      icon: (
        <SettingsSuggestIcon
          fontSize='large'
          style={{ color: "#017bfe", cursor: "pointer" }}
        />
      ),
    },
  ];

  return (
    <>
      <TopNav
        toggleTheme={toggleTheme}
        navItemsList={navItemsList}
        style={{
          margin: "1.5rem 1.5rem 1.2rem 1.5rem",
          width: "auto",
        }}
      />
      <ThemePanel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <div className='panel-container'>
        <Wrapper className='main-panel'>
          {!isAdmin ? (
            <Routes>
              <Route
                path='dashboard'
                element={<DashboardPanel theme={theme} />}
              />
              <Route path='history' element={<HistoryPanel theme={theme} />} />
              <Route path='payout' element={<PayoutPanel theme={theme} />} />
            </Routes>
          ) : (
            <Routes>
              <Route
                path='dashboard'
                element={<AdminDashboard theme={theme} />}
              />
              <Route
                path='manageusers'
                element={<ManageUsers theme={theme} />}
              />
            </Routes>
          )}
        </Wrapper>
      </div>
    </>
  );
};

export default Dashboard;
