import React, { useState } from "react";
import "./ThemePanel.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const ThemePanel = ({ isOpen, setIsOpen, toggleTheme, theme }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedColor, setSelectedColor] = useState("#3498db"); // Default selected color

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const selectTheme = (theme) => {
    setSelectedTheme(theme);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  const colors = [
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#34495e",
  ];

  return (
    <div className='side-panel-container'>
      <div
        className={`side-panel-overlay ${isOpen ? "open" : ""}`}
        onClick={togglePanel}
      ></div>

      <div className={`side-panel ${isOpen ? "open" : "closed"}`}>
        <div id='tggg' className='panel-content'>
          <div className='theme-form'>
            <h2>Toggle Theme</h2>
            <div className='theme-buttons'>
              <Brightness4Icon
                fontSize='large'
                onClick={() => toggleTheme()}
                style={{ color: theme.light ? "black" : "white" }}
              />
            </div>
            {/* <h3>Select Color</h3>
            <div className='color-options'>
              {colors.map((color) => (
                <div
                  key={color}
                  className={`color-circle ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => selectColor(color)}
                />
              ))}
            </div> */}
          </div>
          <button className='close-button' onClick={togglePanel}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemePanel;
