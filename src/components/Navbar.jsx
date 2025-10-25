import React from "react";
import "../app.css";

export default function Navbar({ onConstructionClick, onLogoClick }) {
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={onLogoClick} style={{ cursor: "pointer" }}>
        <img src="archastu.logo.png" alt="Logo" />
      </div>

      <div className="navbar-menu">
        <a href="#">Architecture</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onConstructionClick(); }}>
          Construction
        </a>
        <a href="#">Interiors</a>
        <a href="#">Bid Projects</a>
      </div>

      <div className="navbar-actions">
        <a href="#" className="navbar-login">
          <img src="/icon.png" className="login-icon" alt="icon" />
          Login/Register
        </a>
        <button className="navbar-book-btn">+ Book a call</button>
      </div>
    </div>
  );
}
