// Appbar.jsx
import React from "react";
import logo from "./images/logo.svg";
import "./appbar.css"; // Import your CSS file

const Appbar = () => {
  return (
      <div className="navbar">
        <div className="frame">  
        <div className="vectorlogo">
          <img src={logo} alt="Vite logo" />
        </div>
        </div>
      </div>
  );
};

export default Appbar;
