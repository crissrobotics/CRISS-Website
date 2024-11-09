import React, { useState } from "react";
import "./flippingcard1.scss";
import ReactCardFlip from 'react-card-flip';
import { motion } from "framer-motion";
import { HeadAnimation } from "../../Header/Motion/Motion";

export default function FlippingCard1({ profile, name, position, email, website, dept }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <motion.div {...HeadAnimation("up", 0.1)} >
            <div className="flipCard1">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="front" key="front" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="imgContainer" style={{ position: "relative" }}>
                            {!isLoaded && (
                                <div
                                    style={{
                                        backgroundColor: "#e0e0e0",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            )}
                            <img
                                src={profile}
                                alt={name}
                                onLoad={() => setIsLoaded(true)}
                                style={{
                                    opacity: isLoaded ? 1 : 0,
                                    transition: "opacity 0.1s ease-in-out",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                        <div className="name">{name}</div>
                    </div>

                    <div className="back" key="back" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="position">
                            <p id="position1">{position}</p>
                            <p>{dept}</p>
                        </div>
                        <div className="social">
                            <a href={email} id="email" style={{ display: (email === null) ? "none" : null }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" ><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg></a>
                            <a href={website} id="website" target="_blank" style={{ display: (website === null) ? "none" : null }}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg></a>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </motion.div>

    );
}

