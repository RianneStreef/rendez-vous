import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";
import { menu } from "../content/menu";

const menuPage = (props) => {
  console.log(menu);

  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const menuList = menu.map((menuItem) => {
    return (
      <div key={menuItem.index}>
        <p>{menuItem.name}</p>
        <p>{menuItem.price}</p>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Menu || {languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      Menu Page
      <Link to="/">HomePage</Link>
      {menuList}
    </>
  );
};

export default menuPage;
