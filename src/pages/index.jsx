import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, languageToUse, setLanguage } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <Hero language={language} languageToUse={languageToUse} />
      <div className="padding">
        <Intro language={language} languageToUse={languageToUse} />
      </div>
      <div className="banner" />
      <div className="padding">
        <Menu language={language} languageToUse={languageToUse} />
      </div>
      <div className="banner2" />
      <div className="padding">
        <Contact language={language} languageToUse={languageToUse} />
      </div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};

export default IndexPage;
