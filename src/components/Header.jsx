import React from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logo from "../images/icon.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="header">
      <div className="hidden-desktop">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
      <ul className="links hidden-mobile">
        <li>
          <Link to="/#intro" className="nav-link">
            {languageToUse.welcome}
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
        <li>
          <div className="set-language-footer">
            <img
              src={flagEn}
              onClick={() => handleSetLanguage("english")}
              className={`flag ${
                languageToUse.language === "english" ? "opaque" : "fade"
              } `}
            />
            <img
              src={flagFr}
              onClick={() => handleSetLanguage("french")}
              className={`flag ${
                languageToUse.language === "french" ? "opaque" : "fade"
              } `}
            />
          </div>
        </li>
      </ul>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Header;
