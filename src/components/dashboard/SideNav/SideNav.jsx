import React from "react";
import navItems from "./navConfig"; // Import navItems
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  const location = useLocation(); // Get current location

  return (
    <div className='side-nav__wrapper'>
      <ul className='side-nav__menu'>
        {/* <hr className='vertical-line' /> */}
        {navItems.map((item, index) => {
          console.log("iiop", location.pathname, item);
          const isActive = location.pathname.includes(item.link);

          return (
            <NavItem
              icon={<item.icon fontSize='large' />}
              label={item.label}
              link={item.link}
              key={index}
              className={isActive ? "active" : ""}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
