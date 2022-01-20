import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";
import { menu } from "../content/menu";
import { menuCategories } from "../content/menu";

import logo from "../images/icon.png";
import back from "../images/back.png";

import "../styles/menuPage.css";

const menuPage = (props) => {
  console.log("menuCategories");
  console.log(menu);
  console.log(menuCategories);

  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [showDishes, setShowDishes] = useState(false);
  const [category, setCategory] = useState("");

  function handleClick(category) {
    setCategory(category);
    setShowDishes(true);
  }

  const menuList = menu
    .filter((categoryItem) => category === categoryItem.categoryFrench)
    .map((menuItem) => {
      return (
        <div key={menuItem.index}>
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              <p>{menuItem.frenchDescription}</p>
              <p>
                <i>{menuItem.englishDescription}</i>
              </p>
            </div>
            <p className="price">{menuItem.price}</p>
          </div>
        </div>
      );
    });

  const categoryButtons = menuCategories.map((categoryItem) => {
    return (
      <button
        className="category-button"
        onClick={() => handleClick(categoryItem)}
      >
        {categoryItem}
      </button>
    );
  });

  return (
    <div className="external-menu">
      <Helmet>
        <title>Menu || {languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>

      {showDishes ? (
        <div className="external-nav">
          <button onClick={() => setShowDishes(false)} className="back-button">
            <img src={back} alt="Go back" className="back" />
          </button>
          <Link to="/" className="home-link">
            <img src={logo} alt="logo" className="external-nav-logo" />
          </Link>
        </div>
      ) : null}
      {showDishes ? (
        <>
          <h2>{category}</h2>
          {category === "Nos Cicchettis a Partager" ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}

          <div>{menuList}</div>
        </>
      ) : (
        <div className="category-buttons">
          <img src={logo} alt="logo" className="external-menu-logo" />
          {categoryButtons}
        </div>
      )}
    </div>
  );
};

export default menuPage;
