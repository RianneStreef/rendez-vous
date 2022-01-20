import React from "react";
import { content } from "../content/languages";

import "../styles/Hero.css";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="hero">
      <h2>{languageToUse.welcome}</h2>
      <h1>{languageToUse.rendezVous}</h1>
    </div>
  );
};

export default Hero;
