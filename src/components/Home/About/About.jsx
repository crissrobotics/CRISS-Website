import React from "react";
import "./about.scss";

import aboutPic from "../../../assets/images/Homepage/about.jpeg";

export default function About() {

    return (
        <div className="aboutContainer">
            <h2>About<span>Us</span></h2>
            <div className="details">
                <div className="imgContainer"><img src={aboutPic}></img></div>
                <p>Criss Robotics, a dynamic and innovative Mars rover-making club at <span>BITS Pilani</span>  formed in 2021. 
                    We are multidisciplinary space engineering and Robotics Research group in BITS Pilani 
                    (Pilani campus) consisting of 60+ tech enthusiasts with a vision to innovate and develop space 
                    exploration projects.
                </p>
            </div>
        </div>

    )
}