import React from "react"
import { LinkButton } from "../../../Common"
import ImageStory from '../../../../Assets/Images/About/story-1.jpg.webp'

export default function AboutOurStory() {
  return <div className="about-page__story">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>About Our Story</h2>
          <p>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip consequat.</p>
          <LinkButton content="View Full Menu"/>
        </div>
        <div className="col-6">
          <img src={ImageStory} alt="story1" />
        </div>
        
      </div>
    </div>
  </div>
}
