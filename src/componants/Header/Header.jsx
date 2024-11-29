import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <img src="logo.png" alt="logo" width={100} />

        <div className={`flexCenter h-menu ${menuOpen ? "active" : ""}`}>
          <a href="#residencies">Residencies</a>
          <a href="#values">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Header;
