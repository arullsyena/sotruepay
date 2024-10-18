// NavItem.js
import React from "react";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";

const NavItem = ({ icon, label, link, className }) => {
  const navigate = useNavigate();
  return (
    <li className={`side-nav__item ${className}`}>
      {icon}
      <a onClick={() => navigate(`/${link}`)}>{label}</a>
    </li>
  );
};

export default NavItem;
