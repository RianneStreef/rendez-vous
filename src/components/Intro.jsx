import React from "react";

import "../styles/Intro.css";

import { content } from "../content/languages";

import snowflake from "../images/snowflake.png";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div id="intro" className="intro">
      <div className="header-placeholder" />

      <h2>{languageToUse.introTitle}</h2>
      <h3 className="underTitle">{languageToUse.introUnderTitle}</h3>

      <div className="snowflakes">
        <img src={snowflake} alt="" className="snowflake" />
        <img src={snowflake} alt="" className="snowflake" />
        <img src={snowflake} alt="" className="snowflake" />
      </div>

      <p>{languageToUse.introText}</p>
      <p>{languageToUse.introText2}</p>
      {/* <h4>{languageToUse.introUnderTitle2}</h4> */}
      <p>{languageToUse.introText3}</p>
      {/* <h4>{languageToUse.introUnderTitle3}</h4> */}
      <p>{languageToUse.introText4}</p>
    </div>
  );
};

export default Intro;
