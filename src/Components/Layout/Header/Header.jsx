import React from "react";
import logo from '../../../Assets/Images/Header/logo.png.webp'
import { NavLink } from "react-router-dom";
function Header() {
  return <div className="header">
    <div className="header__bg">
      <div className="container">
        <div className="header__layout">
          <div className="header__logo">
            <img src={logo} alt="LOGO" />
          </div>

          <input type="checkbox" id="header__menu-mobile" />
          <label htmlFor="header__menu-mobile" className="header__menu-mobile">
            <div className="header__menu-mobile__navbar"></div>
          </label>
          <div className="header__menu">
            <div className="header__menu__list">
              <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/" state={{ title: "Home" }}>HOME</NavLink></div>
              <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/about" state={{ title: "About Us" }}>ABOUT</NavLink></div>
              <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/menu" state={{ title: "Menu" }}>MENU</NavLink></div>
              <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/book-a-table" state={{ title: "Book A Table" }}>BOOK A TABLE</NavLink></div>
              {/* <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/blog" state={{ title: "Blog" }}>BLOG</NavLink></div> */}
              <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/contact" state={{ title: "Contact" }}>CONTACT</NavLink></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default Header