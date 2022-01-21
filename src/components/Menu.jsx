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
  const menuList = menu.map((menuItem) => {
    return (
      <div key={menuItem.index}>
        <p>{menuItem.name}</p>
        <p>{menuItem.frenchDescription}</p>
        <p>{menuItem.englishDescription}</p>
        <p>{menuItem.price}</p>
      </div>
    );
  });
  return (
    <div id="menu" className="menu">
      <h2>Menu</h2>
      <p className="different-menus">
        {languageToUse.breakfast}{" "}
        <img src={snowflake} alt="" className="snowflake" />{" "}
        {languageToUse.lunch}{" "}
        <img src={snowflake} alt="" className="snowflake" />{" "}
        {languageToUse.dinner}{" "}
        <img src={snowflake} alt="" className="snowflake" />{" "}
        {languageToUse.drinks}
      </p>
      <p>
        <div className="button-container">
          <Link to="/menu" className="link-button">
            Menu
          </Link>
        </div>
      </p>
    </div>
  );
};

export default Menu;
