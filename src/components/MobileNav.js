import React from "react";
import jump from "jump.js";
import "../css/MobileNav.css";
import "../App.css";
const MobileNav = ({ style, handleClick }) => {
  return (
    <div className="mobile-navbar-links" style={style}>
      <a
        href="#home"
        className="mobile-navbar-link"
        onClick={() => {
          handleClick();
          jump("#home", { duration: 800 });
        }}
      >
        HOME
      </a>
      <a
        href="#about"
        className="mobile-navbar-link"
        onClick={() => {
          handleClick();
          jump("#about", { duration: 800 });
        }}
      >
        ABOUT
      </a>
      <a
        href="#Rosters"
        className="mobile-navbar-link"
        onClick={() => {
          handleClick();
          jump("#Rosters", { duration: 800 });
        }}
      >
        OUR ROSTERS
      </a>
      <a
        href="#Contact"
        className="mobile-navbar-link call-to-action"
        onClick={() => {
          handleClick();
          jump("#Contact", { duration: 800 });
        }}
      >
        CONTACT
      </a>
    </div>
  );
};

export default MobileNav;
