import i18next from "i18next";
import React, { useState } from "react";

function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);
  const [language, setLanguage] = useState("Korean");
  const navLists = [
    { ref: "#home", title: "Home" },
    { ref: "#stack", title: "My stacks" },
    { ref: "#about", title: "About me" },
    { ref: "#work", title: "My Work" },
  ];
  const handleLanguage = () => {
    if (i18next.language === "en") {
      i18next.changeLanguage("kr");
      setLanguage("Korean");
    } else {
      i18next.changeLanguage("en");
      setLanguage("English");
    }
  };

  return (
    <header className="sticky-header">
      <button
        type="button"
        className={`nav-toggle ${openNav && "nav-open"}`}
        aria-label="toggle navigation"
        onClick={() => setOpenNav(!openNav)}
      >
        <span className="hamburger" />
      </button>
      <nav className={`nav ${openNav && "nav-open"}`}>
        <ul className="nav__list">
          {navLists.map((list) => {
            return (
              <li className="nav__item" key={list.title}>
                <a
                  href={list.ref}
                  className="nav__link"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {list.title}
                </a>
              </li>
            );
          })}
          <li className="nav__item" style={{ background: "none" }}>
            <button
              type="button"
              className="nav__link"
              style={{ background: "none", border: "none" }}
              onClick={handleLanguage}
            >
              {language}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
