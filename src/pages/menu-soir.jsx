import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";
import { menu } from "../content/menu-soir";
import { menuCategories } from "../content/menu-soir";

import logo from "../images/icon.png";
import back from "../images/back.png";

import "../styles/menuPage.css";

const menuPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [showDishes, setShowDishes] = useState(false);
  const [category, setCategory] = useState("");

  function handleClick(category) {
    setCategory(category);
    setShowDishes(true);
    window.scrollTo(0, 0);
  }

  const navBar = (
    <div className="nav scroll-up" id="nav">
      <button onClick={() => setShowDishes(false)} className="back-button">
        <img src={back} alt="Go back" className="back" />
      </button>
      <Link to="/" className="home-link">
        <img src={logo} alt="logo" className="external-nav-logo" />
      </Link>
    </div>
  );

  const menuList = menu
    .filter((categoryItem) => category === categoryItem.categoryFrench)
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">
              {menuItem.price.toFixed(2)}€
              {menuItem.perPerson ? <p> / pers</p> : null}
            </span>
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
        <p className="category-name"> {categoryItem}</p>
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

      {showDishes ? navBar : null}
      {showDishes ? (
        <>
          <div className="menu-placeholder" />
          <h2>{category}</h2>
          <div>{menuList}</div>
          {category === "La Viande" ? (
            <div className="menu-item">
              <div className="menu-item-description">
                <p className="item-name">{languageToUse.sauce} </p>
              </div>

              <span className="price">4.00€</span>
            </div>
          ) : null}
        </>
      ) : (
        <div className="category-buttons-container">
          <Link to="/">
            <img src={logo} alt="logo" className="external-menu-logo" />
          </Link>
          <div className="category-buttons">{categoryButtons}</div>
        </div>
      )}
    </div>
  );
};

export default menuPage;
