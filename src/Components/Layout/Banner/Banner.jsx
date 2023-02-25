import React from "react"
import { Link, useLocation } from "react-router-dom";
function Banner() {
  const {state} = useLocation();
  return <div className="banner">
    <div className="banner__layout">
      <h1 className="banner__title">{state.title}</h1>
      <div className="banner__link">
        <Link className="banner__link__item"  to="/">Home</Link> {"->"} <span className="banner__link__item" >{state.title}</span>
      </div>
    </div>
  </div>
}

export default Banner