import React from "react";
import { content } from "../content/languages";

import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";
import tripadvisor from "../images/tripadvisor.png";

import "../styles/Social.css";

const Social = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div>
      <h3>{languageToUse.socialTitle}</h3>
      <div className="social-links">
        <a href="https://www.facebook.com/lerendezvousvaltho" target="_blank">
          <img src={facebook} alt="Facebook link" className="social-logo" />
        </a>

        <a
          href="https://www.tripadvisor.com/Restaurant_Review-g196716-d2500611-Reviews-LE_RENDEZ_VOUS-Val_Thorens_Saint_Martin_de_Belleville_Les_Belleville_Savoie_Auver.html"
          target="_blank"
        >
          <img
            src={tripadvisor}
            alt="Trip advisor link"
            className="social-logo"
          />
        </a>
        <a
          href="https://www.instagram.com/lerendezvousvalthorens/"
          target="_blank"
        >
          <img src={insta} alt="Instagram link" className="social-logo" />
        </a>
      </div>
    </div>
  );
};

export default Social;
