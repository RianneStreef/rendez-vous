import React, { useEffect, useState } from "react";
import { content } from "../content/languages";

import "../styles/Hero.css";

import snowflake from "../images/snowflake.png";
import phone from "../images/phone-solid.svg";

const Hero = (props) => {
  let { language, languageToUse } = props;
  // let slider = <p />;
  let [background, setBackground] = useState(true);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  useEffect(() => {
    setTimeout(() => {
      setBackground(!background);
    }, 5000);
  });

  return (
    <div
      className={`hero ${background ? "background-1" : "background-2"}`}
      id="hero"
    >
      <div>
        <h2>{languageToUse.welcome}</h2>

        <h1>{languageToUse.rendezVous}</h1>
        <div className="snowflakes">
          <img src={snowflake} alt="" className="snowflake" />
          <img src={snowflake} alt="" className="snowflake" />
          <img src={snowflake} alt="" className="snowflake" />
        </div>
      </div>
      <div className="call-button-container ">
        <a
          className="call-button hidden-desktop "
          href="tel:0033479001040"
          hidden-desktop
        >
          <img src={phone} className="phone-logo" /> {languageToUse.reserve}
        </a>
      </div>
    </div>
  );
};

export default Hero;
