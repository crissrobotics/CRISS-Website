import React, { useState, useEffect } from 'react'
import styles from "./IRC.module.scss";
import IRCLOGO from "../../../assets/images/Competitions/SPROS_IRC_logo 1.png";
import IRC2023 from "../IRC2023/IRC2023";
// import backImg from "../../../assets/images/Homepage/background.jpg";
// import backImg1 from "../../../assets/images/Homepage/backgroundlarge.jpeg";
import backgroundImage from "../../../assets/images/Competitions/backgroundImage.jpg"
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function irc() {

    // const [backgroundImage, setBackgroundImage] = useState(backImg);

    // useEffect(() => {
    //     const updateBackgroundImage = () => {
    //         if (window.innerWidth > 1400) {
    //             setBackgroundImage(backImg1);
    //         } else {
    //             setBackgroundImage(backImg);
    //         }
    //     };

    //     updateBackgroundImage();

    //     window.addEventListener('resize', updateBackgroundImage);

    //     return () => {
    //         window.removeEventListener('resize', updateBackgroundImage);
    //     };
    // }, []);

    return (
        <>
            <div className={styles.ircIntro}>
                <motion.div className={styles.imgggcontainer} {...slideAnimation("left", 0.5)} >
                    <img className={styles.IRClogo} src={IRCLOGO}></img>
                </motion.div>

                <motion.p  {...slideAnimation("right", 0.5)} className={styles.ircText}><span>The International Rover Challenge</span> (formerly known as the Indian Rover Challenge), organized by the Space Robotics Society, is an annual robotics competition designed to provide students worldwide with an engineering challenge in the realm of space exploration. Distinguished as the sole competition of its kind in the Asia-Pacific region, the IRC serves the critical objective of fostering innovation and inspiring aspiring engineers. Participants are tasked with the mission of designing and constructing advanced Mars Rovers, with the ultimate goal of competing in simulated Martian conditions. This competition serves as a platform for college students to showcase their skills and ingenuity in the pursuit of advancing space exploration technologies.</motion.p>
            </div>

            <div className={styles.videoMain} {...slideAnimation("up", 0.5)}>
                <iframe
                    className={styles.vid}
                    src="https://www.youtube.com/embed/Lyqm1RDACO8?si=_tD9ClRxcVGcsCnu" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>

            {/* <motion.div className={styles.videoMain} {...slideAnimation("left", 0.3)}>
                <video className={styles.vid} src={IRCVIDEO} autoPlay loop></video>
            </motion.div> */}

            <motion.div className={styles.The2023Container} style={{ backgroundImage: `url(${backgroundImage})` }}  {...slideAnimation("up", 0.5)}  >
                <IRC2023></IRC2023>
            </motion.div>
        </>
    );
}
