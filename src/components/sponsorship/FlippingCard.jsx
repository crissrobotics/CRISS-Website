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
      <Link to={link}><div className="flipCard">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="front" key="front" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="imgContainer">
                        <img src={photo}></img>
                    </div>
                </div>

                <div className="back" key="back" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div class="content">
    <h2>VISIT</h2>
    <h2>VISIT</h2>
  </div>
                </div>
            </ReactCardFlip>
        </div>
        </Link>
    );
}