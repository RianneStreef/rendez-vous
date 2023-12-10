import React, { useState } from "react";
import { Link } from "gatsby";
import { content } from "../content/languages";

import "../styles/Redirect.css";

const Redirect = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [showRedirectMessage, setShowRedirectMessage] = useState(true);
  return (
    <>
      {showRedirectMessage ? (
        <div className="redirect hidden-desktop">
          <h2>{languageToUse.welcome}</h2>
          <h1>{languageToUse.rendezVous}</h1>
          <p className="redirect-text">{languageToUse.redirectText}</p>
          <div className="redirect-buttons">
            <Link
              className="link-button menu-link-button"
              to="/menu"
              onClick={() => setShowRedirectMessage(false)}
            >
              {languageToUse.menuMidi}
            </Link>
            <Link
              className="link-button menu-link-button"
              to="/"
              onClick={() => setShowRedirectMessage(false)}
            >
              {languageToUse.website}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Redirect;
