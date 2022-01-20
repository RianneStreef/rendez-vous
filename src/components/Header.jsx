import React from "react";
import { Link } from "gatsby";

import logo from "../images/icon.png";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="links">
        <li>
          <Link to="/#intro">Intro</Link>
        </li>
        <li>
          <Link to="/#menu">Menu</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Header;
