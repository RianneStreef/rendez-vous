import React from "react";
import { menu } from "../content/menu";

const Menu = () => {
  const menuList = menu.map((menuItem) => {
    return (
      <div key={menuItem.index}>
        <p>{menuItem.name}</p>
        <p>{menuItem.price}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Menu</h2>
      {menuList}
    </div>
  );
};

export default Menu;
