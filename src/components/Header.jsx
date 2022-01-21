import React from "react";
import { Link } from "gatsby";

import logo from "../images/icon.png";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="links">
        <li>
          <Link to="/#intro" className="nav-link">
            Intro
          </Link>
        </li>
        <li>
          <Link to="/#menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/#contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Header;
