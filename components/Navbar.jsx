
import React, { useState } from "react";
import Link from "next/link";


const Navbar =() => {
  //change burger classes
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuCLicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav className="main-menu">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
        <div className="menu-items">
          <Link href="/">
            Home
          </Link>
          <Link href="/About">
            About
          </Link>
          <Link href="/Services">
            Services
          </Link>
          <Link href="/Blog">
            Blog
          </Link>
          <Link href="/Contact">
            Contact
          </Link>
        <div className="covidBtn">
          <Link href="/Covid19">
            Covid-19 Alert
          </Link>
        </div>
        </div>
        <div className={menuClass}></div>
      </nav>
    </div>
  );
};

export default Navbar;