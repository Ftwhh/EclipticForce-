import React, { useState } from "react";
import MobileNav from "./MobileNav";
import jump from "jump.js";
import "../css/navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navStyle, setNavStyle] = useState({ transform: "translate(-100%)" });

  const handleClick = () => {
    setClicked(!clicked);
    clicked
      ? setNavStyle({ transform: "translateX(0)" })
      : setNavStyle({ transform: "translateX(-100%)" });
  };
  return (
    <>
      <nav className="navbar">
        <img
          src="https://www.nicepng.com/png/full/26-264893_nrg-logo-dark-background-nrg-esports.png"
          alt="NRG"
          className="logo"
        />
        <ul className="navbar-links">
          <a href="#home" onClick={() => jump("#home", { duration: 800 })}>
            <li className="navbar-link">HOME</li>
          </a>
          <a href="#about" onClick={() => jump("#about", { duration: 800 })}>
            <li className="navbar-link">ABOUT</li>
          </a>
          <a
            href="#Rosters"
            onClick={() => jump("#Rosters", { duration: 800 })}
          >
            <li className="navbar-link">OUR ROSTERS</li>
          </a>
          <a
            href="#Contact"
            onClick={() => jump("#Contact", { duration: 800 })}
          >
            <li className="navbar-link call-to-action">CONTACT</li>
          </a>
        </ul>
        <svg id="burger" viewBox="0 0 86 40" onClick={handleClick}>
          <rect x="13" width="60" height="8" />
          <rect y="16" width="86" height="8" />
          <rect x="13" y="32" width="60" height="8" />
        </svg>
      </nav>
      <MobileNav style={navStyle} handleClick={handleClick} />
    </>
  );
};

export default Navbar;
