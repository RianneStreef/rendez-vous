import React, { useState, useEffect } from "react";
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

  const nav = document.getElementById("nav");

  // useEffect(() => {
  //   const scrollUp = "scroll-up";
  //   const scrollDown = "scroll-down";
  //   let lastScroll = 0;
  //   window.addEventListener("scroll", () => {
  //     const currentScroll = window.pageYOffset;
  //     if (currentScroll <= 0) {
  //       nav.classList.remove(scrollUp);
  //       return;
  //     }

  //     if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
  //       nav.classList.remove(scrollUp);
  //       nav.classList.add(scrollDown);
  //     } else if (
  //       currentScroll < lastScroll &&
  //       nav.classList.contains(scrollDown)
  //     ) {
  //       nav.classList.remove(scrollDown);
  //       nav.classList.add(scrollUp);
  //     }
  //     lastScroll = currentScroll;
  //   });
  // });

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
          <h2>{category}</h2>
          <div>{menuList}</div>
        </>
      ) : (
        <div className="category-buttons">
          <Link to="/">
            <img src={logo} alt="logo" className="external-menu-logo" />
          </Link>
          {categoryButtons}
        </div>
      )}
    </div>
  );
};

export default menuPage;
