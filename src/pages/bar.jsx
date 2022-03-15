import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";
import { menuBar } from "../content/menu-bar";
import { menuBarCategories } from "../content/menu-bar";

import logo from "../images/icon.png";
import back from "../images/back.png";

import "../styles/menuBarPage.css";

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
      <Link to="/bar" className="home-link">
        <img src={logo} alt="logo" className="external-nav-logo" />
      </Link>
    </div>
  );

  const classiquesList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Les Cocktails Classiques"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const creationsList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Les Cocktails Créations"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const sansAlcoolList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Les Sans alcool"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const specialtiesList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Spécialités"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const aperoList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Apéritifs"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const vinList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Vins au Verre"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const coupeList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "La Coup de Champagne"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const champagneList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Champagne Bouteilles"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const bieresList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Bières Pression"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price25 ? (
              <span className="price">
                {menuItem.price25.toFixed(2)}€ {menuItem.price50.toFixed(2)}€
              </span>
            ) : null}
          </div>
        </div>
      );
    });

  const bieresBouteilleList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Bières Bouteilles"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const whiskysList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Whiskys"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const digestifsList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Digestifs"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const rhumList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Rhums Vieux"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const autresList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Autres Alcools"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const liquersList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Liquers"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const softList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Softs"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const eauxList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Eaux"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const cafeList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Cafés"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const chocolatList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Chocolats"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });
  const theList = menuBar
    .filter(
      (categoryItem) =>
        category === categoryItem.category &&
        categoryItem.subCategory === "Thés"
    )
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          {menuItem.eveningOnly === true ? (
            <p className="evening-only">{languageToUse.eveningOnly}</p>
          ) : null}
          <div className="menu-bar-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.description ? <p>{menuItem.description}</p> : null}
            </div>
            {menuItem.price ? (
              <span className="price">{menuItem.price.toFixed(2)}€</span>
            ) : null}
          </div>
        </div>
      );
    });

  const categoryButtons = menuBarCategories.map((categoryItem) => {
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
        <title>Bar Menu || {languageToUse.indexTitle}</title>
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
          {category === "Cocktails" ? (
            <>
              <p className="bar-menu-item">Les Cocktails Classiques</p>
              {classiquesList}
              <p className="bar-menu-item">Les Cocktails Créations</p>
              {creationsList}
              <p className="bar-menu-item">Les Sans Alcool</p>
              {sansAlcoolList}
              <p className="bar-menu-item">Spécialités</p>
              {specialtiesList}
            </>
          ) : null}
          {category === "Vins & Bières" ? (
            <>
              <p className="bar-menu-item">Apéritifs</p>
              {aperoList}
              <p className="bar-menu-item">Vins au Verre</p>
              {vinList}
              <p className="bar-menu-item">La Coupe de Champagne</p>
              {coupeList}
              <p className="bar-menu-item">Champagne Bouteilles</p>
              {champagneList}
              <p className="bar-menu-item bieres">
                Bières Pression <span>25 cl 50 cl</span>
              </p>
              {bieresList}
              <p className="bar-menu-item">Bières Bouteilles</p>
              {bieresBouteilleList}
            </>
          ) : null}
          {category === "Alcools" ? (
            <>
              <p className="bar-menu-item">Whiskys</p>
              {whiskysList}
              <p className="bar-menu-item">Digitifs</p>
              {digestifsList}
              <p className="bar-menu-item">Rhums Vieux</p>
              {rhumList}
              <p className="bar-menu-item">Autres Alcools</p>
              {autresList}
              <p className="bar-menu-item">Liquers</p>
              {liquersList}
            </>
          ) : null}
          {category === "Softs & Boissons Chaudes" ? (
            <>
              <p className="bar-menu-item">Softs</p>
              {softList}
              <p className="bar-menu-item">Eaux</p>
              {eauxList}
              <p className="bar-menu-item">Cafés</p>
              {cafeList}
              <p className="bar-menu-item">Chocolats</p>
              {chocolatList}
              <p className="bar-menu-item">Thés</p>
              {theList}
            </>
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
