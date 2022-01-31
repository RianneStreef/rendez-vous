import React from "react";
import { Link } from "gatsby";
import { menu } from "../content/menu";

import { content } from "../content/languages";

import snowflake from "../images/snowflake.png";

import "../styles/Menu.css";

const Menu = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const menuListPartager = menu
    .filter(
      (menuItem) => menuItem.categoryFrench === "Nos Cicchettis à Partager"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListStarters = menu
    .filter((menuItem) => menuItem.categoryFrench === "Entrées")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListPasta = menu
    .filter((menuItem) => menuItem.categoryFrench === "La Pasta")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListMeat = menu
    .filter((menuItem) => menuItem.categoryFrench === "La Viande")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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
  const menuListFish = menu
    .filter((menuItem) => menuItem.categoryFrench === "Le Poisson")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListSpecials = menu
    .filter(
      (menuItem) => menuItem.categoryFrench === "Les Specialités Savoyardes"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListPizza = menu
    .filter((menuItem) => menuItem.categoryFrench === "Les Pizzas")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListKids = menu
    .filter((menuItem) => menuItem.categoryFrench === "Menu enfant")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  const menuListDesserts = menu
    .filter((menuItem) => menuItem.categoryFrench === "Les Desserts")
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>

              {languageToUse.language === "french" &&
              menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {languageToUse.language === "english" &&
              menuItem.englishDescription ? (
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

  return (
    <div id="menu" className="menu">
      <div className="header-placeholder" />
      <h2>Menu</h2>
      <div className="row">
        <div className="column">
          <h3 className="menu-category">{languageToUse.sharingPlatters}</h3>
          {menuListPartager}
          <h3 className="menu-category">{languageToUse.starters}</h3>
          {menuListStarters}
          <h3 className="menu-category">{languageToUse.pasta}</h3>
          {menuListPasta}
          <h3> className="menu-category"{languageToUse.meat}</h3>
          {menuListMeat}
        </div>
        <div className="column">
          <h3 className="menu-category">{languageToUse.fish}</h3>
          {menuListFish}
          <h3 className="menu-category">{languageToUse.specials}</h3>
          {menuListSpecials}
          <h3 className="menu-category">{languageToUse.pizza}</h3>
          {menuListPizza}
          <h3 className="menu-category">{languageToUse.kids}</h3>
          {menuListKids}
          <h3 className="menu-category">{languageToUse.desserts}</h3>
          {menuListDesserts}
        </div>
      </div>
    </div>
  );
};

export default Menu;
