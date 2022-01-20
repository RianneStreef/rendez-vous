import React from "react";
import { content } from "../content/languages";

import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";
import tripadvisor from "../images/tripadvisor.png";

const Social = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div>
      <h3>{languageToUse.socialTitle}</h3>
      <div className="social-links">
        <a href="https://www.facebook.fr" target="_blank">
          <img src={facebook} alt="Facebook link" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={insta} alt="Instagram link" />
        </a>

        <a href="https://www.tripadvisor.com" target="_blank">
          <img src={tripadvisor} alt="Trip advisor link" />
        </a>
      </div>
    </div>
  );
};

export default Social;
