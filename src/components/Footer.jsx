import React from "react";
import { content } from "../content/languages";

import Social from "../components/Social";
import Copyright from "../components/Copyright";

import "../styles/Footer.css";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

const Footer = (props) => {
  let { language, languageToUse, setLanguage } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="footer">
      <div className="footer-items">
        <Social />
        <p className="address">
          {" "}
          RESTAURANT LE RENDEZ-VOUS • Rue du Soleil, 73440 Val Thorens, France •
          Tél. :<a href="tel:0033479001040"> +33 4 79 00 10 40</a>
        </p>

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
      </div>

      <Copyright />
    </div>
  );
};

export default Footer;
