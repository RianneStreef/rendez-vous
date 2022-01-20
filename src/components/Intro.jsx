import React from "react";

import "../styles/Intro.css";

import { content } from "../content/languages";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div id="intro">
      <h2>{languageToUse.introTitle}</h2>
      <p>{languageToUse.introText}</p>
      <h4>{languageToUse.introUnderTitle}</h4>
      <p>{languageToUse.introText2}</p>
      <h4>{languageToUse.introUnderTitle2}</h4>
      <p>{languageToUse.introText3}</p>
      <h4>{languageToUse.introUnderTitle3}</h4>
      <p>{languageToUse.introText4}</p>
    </div>
  );
};

export default Intro;
