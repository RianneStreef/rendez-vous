import React from "react";
import { Link } from "gatsby";
import { menu } from "../content/menu";

import "../styles/Menu.css";

const Menu = () => {
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
    <div id="menu">
      <h2>Menu</h2>
      {/* {menuList} */}
      <p>
        Check out our menu <Link to="/menu">Here!</Link>
      </p>
    </div>
  );
};

export default Menu;
