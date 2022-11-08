import React from "react";
import './Header.scss'
import logo from '../../Assets/Images/logo.png.webp'
import { NavLink } from "react-router-dom";
function Header() {
  return <div className="header">
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
            <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/">HOME</NavLink></div>
            <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/about">ABOUT</NavLink></div>
            <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/menu">MENU</NavLink></div>
            <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/book-a-table">BOOK A TABLE</NavLink></div>
            <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/blog">BLOG</NavLink></div>
            <div className="header__menu__item"><NavLink className={({ isActive }) => isActive ? 'header__menu__item--active' : undefined} to="/contact">CONTACT</NavLink></div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default Header