import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { content } from "../content/languages";

import "../styles/successPage.css";

const success = (props) => {
  let { language, languageToUse, setLanguage } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <div className="success-message">
        <p>{languageToUse.thankYou}</p>
        <div>
          <Link to="/">&#8592;</Link>
        </div>
      </div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};

success.Layout = Layout;
export default success;
