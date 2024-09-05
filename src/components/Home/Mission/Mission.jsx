import React from "react";
import "./mission.scss";

import missionImg from "../../../assets/images/Homepage/mission1.jpeg";
export default function Mission() {

    return (
        <div className="missionContainer">

            <div className="details">
                <div className="left">
                    <h2>Our<span>Mission</span></h2>
                    <p>We as a team are interested in research about space and robotics. Our current goal is to design
                        and develop rovers to compete in global student competitions such as <span>IRC </span>(International Rover Challenge), <span>IRDC </span>(International Rover Design Challenge), <span>URC </span>(University Rover Challenge)
                    </p>
                    <div className="mobileContainer">
                        <img src={missionImg}></img>
                        <div id="para">We as a team are interested in research about space and robotics. Our current goal is to design
                            and develop rovers to compete in global student competitions such as <span>IRC </span>(International Rover Challenge), <span>IRDC </span>(International Rover Design Challenge), <span>URC </span>(University Rover Challenge)
                        </div>
                    </div>
                </div>
                <div className="imgContainer"><img src={missionImg}></img></div>
            </div>
        </div>
    )
}