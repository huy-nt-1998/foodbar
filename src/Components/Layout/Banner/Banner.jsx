import React from "react"
import { Link, useLocation } from "react-router-dom";
function Banner() {
  const {state} = useLocation();
  
  const title = state ? state.title : "Home"
  return <div className="banner">
    <div className="banner__layout">
      <h1 className="banner__title">{title}</h1>
      {title === "Home" ? null : <div className="banner__link">
        <Link className="banner__link__item"  to="/">Home</Link> {"->"} <span className="banner__link__item" >{title}</span>
      </div>}
      
    </div>
  </div>
}

export default Banner