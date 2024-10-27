import React, { useState } from "react";
import "./ThemePanel.css";

const ThemePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <button className='toggle-button' onClick={togglePanel}>
        {isOpen ? "Close" : "Open"} Panel
      </button>

      <div
        className={`side-panel-overlay ${isOpen ? "open" : ""}`}
        onClick={togglePanel}
      ></div>

      <div className={`side-panel ${isOpen ? "open" : "closed"}`}>
        <div id='tggg' className='panel-content'>
          <div className='theme-form'>
            <h2>Select Theme Mode</h2>
            <div className='theme-buttons'>
              <button
                className={`theme-button ${
                  selectedTheme === "dark" ? "active" : ""
                }`}
                onClick={() => selectTheme("dark")}
              >
                Dark Mode
              </button>
              <button
                className={`theme-button ${
                  selectedTheme === "light" ? "active" : ""
                }`}
                onClick={() => selectTheme("light")}
              >
                Light Mode
              </button>
            </div>
            <h3>Select Color</h3>
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
            </div>
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
