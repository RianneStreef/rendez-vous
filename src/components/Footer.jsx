import React from "react";
import { content } from "../content/languages";

import Social from "../components/Social";

import "../styles/Footer.css";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="footer">
      <Social />
    </div>
  );
};

export default Footer;
