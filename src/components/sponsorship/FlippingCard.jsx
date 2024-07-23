import React, { useState } from "react";
import "./FlippingCard.scss";
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

export default function FlippingCard({link, photo}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
      <Link to={link}><div className="flipCardd">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="frontt" key="frontt" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="imgContainer">
                        <img src={photo}></img>
                    </div>
                </div>

                <div className="backk" key="backk" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="contentt">
    <h2>VISIT</h2>
    <h2>VISIT</h2>
  </div>
                </div>
            </ReactCardFlip>
        </div>
        </Link>
    );
}