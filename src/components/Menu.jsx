import React from "react";
import { Link } from "gatsby";
import { menu } from "../content/menu-soir";

import { content } from "../content/languages";

import snowflake from "../images/snowflake.png";

import "../styles/Menu.css";

// commented out evening menu, and set lunch menu to temporary menu (which is in evening menu - link here and on menu page) also dishes on main page

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
      <h2>{languageToUse.signatureDishes}</h2>
      {/* <h3 className="underTitle">{languageToUse.comingSoon}</h3> */}
      <div className="snowflakes">
        <img src={snowflake} alt="" className="snowflake" />
        <img src={snowflake} alt="" className="snowflake" />
        <img src={snowflake} alt="" className="snowflake" />
      </div>
      <div className="header-placeholder" />
      {/* 
      <div className="row">
        <div className="column">
          <h3 className="menu-category">{languageToUse.sharingPlatters}</h3>
          {menuListPartager}
          <h3 className="menu-category">{languageToUse.starters}</h3>
          {menuListStarters}
          <h3 className="menu-category">{languageToUse.pasta}</h3>
          {menuListPasta}
          <h3 className="menu-category">{languageToUse.meat}</h3>
          {menuListMeat}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{languageToUse.sauce} </p>
            </div>

            <span className="price">4.00€</span>
          </div>
        </div>
        <div className="column">
          <h3 className="menu-category">{languageToUse.fish}</h3>
          {menuListFish}
          <h3 className="menu-category">{languageToUse.pizza}</h3>
          {menuListPizza}
          <h3 className="menu-category">{languageToUse.kids}</h3>
          {menuListKids}
          <h3 className="menu-category">{languageToUse.specials}</h3>
          {menuListSpecials}
          <h3 className="menu-category">{languageToUse.desserts}</h3>
          {menuListDesserts}
        </div>
      </div> */}
      <div className="row">
        <div className="column">
          {/* <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">
                Gnocchi di patate crema du parmigiano et tartufo - faits maison
              </p>
              <p>Crème de parmesan et truffes</p>
              <p>
                <i>Parmigiano cream and truffle</i>
              </p>
            </div>

            <span className="price">37,00€</span>
          </div> */}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">Aubergines à la parmigiana</p>
              <p>Gratin de tomates, aubergines, mozzarella</p>
              <p>
                <i>Gratin of tomato, aubergines and mozzarella</i>
              </p>
            </div>

            <span className="price">28,00€</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">Tartare italien aux artichauts</p>
              <p>
                Pesto, câpres, tomates confites, crème de balsamique, artichauts
                confits avec frites
              </p>
              <p>
                <i>
                  Beef Tartar, pesto, capers, tomato confit, balsamic cream, and
                  preserved artichokes and fries
                </i>
              </p>
            </div>

            <span className="price">35,00€</span>
          </div>
          {/* <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">PIzza Tartufo </p>
              <p>
                Crème, truffe,mozzarella,burrata, roquette, copeaux parmesan
              </p>
              <p>
                <i>Cream, truffle, mozzarella, rocket, parmigiano shavings</i>
              </p>
            </div>

            <span className="price">38,00€</span>
          </div> */}
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">Linguini alle vongole </p>
              <p>Linguine aux palourdes</p>
              <p>
                <i>Linguine with clams</i>
              </p>
            </div>

            <span className="price">32,00€</span>
          </div>
        </div>
        <div className="column">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">Paccheri gorgonzola e pera </p>
              <p>Crème de gorgonzola, poire et noix</p>
              <p>
                <i>Gorgonzola cream, pear, walnuts</i>
              </p>
            </div>

            <span className="price">31,00€</span>
          </div>
          {/* <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">Encornet farci aux fruits de mer </p>
              <p>
                <i>Stuffed quid with seafood</i>
              </p>
            </div>

            <span className="price">35,00€</span>
          </div> */}
          {/* <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">Pizza Tartufo </p>
              <p>
                Crème, truffe,mozzarella,burrata, roquette, copeaux parmesan
              </p>
              <p>
                <i>Cream, truffle, mozzarella, rocket, parmigiano shavings</i>
              </p>
            </div>

            <span className="price">38,00€</span>
          </div> */}
        </div>
      </div>
      <div className="menu-links">
        <Link className="link-button menu-link-button" to="/menu">
          {languageToUse.menuMidi}
        </Link>
        {/* <Link className="link-button menu-link-button" to="/menu-soir">
          {languageToUse.menuSoir}
        </Link> */}
      </div>
    </div>
  );
};

export default Menu;
