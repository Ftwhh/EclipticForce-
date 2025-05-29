import React from "react";
import jump from "jump.js";
import "../css/Header.css";
function Header() {
  return (
    <header id="home" className="header">
      <h1 className="header-title">
        <span className="EF">NRG</span> Esports
      </h1>
      <p className="header-description">
        We’re here to create something special
      </p>
      <a href="#Rosters" onClick={() => jump("#Rosters", { duration: 800 })}>
        OUR ROSTERS
      </a>
    </header>
  );
}

export default Header;
