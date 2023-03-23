import React from "react"
import { AboutOurStory, AboutOurEmployee,Banner } from "../../Layout";

export default function About() {
    return <div className="about-page">
        <Banner/>
        <AboutOurStory/>
        <AboutOurEmployee/>
    </div>
}
