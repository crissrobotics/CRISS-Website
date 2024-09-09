import React, { useState, useEffect } from 'react';
import styles from "./ERC.module.scss";
import ERCLOGO from "../../../assets/images/Competitions/ERC_Logo 1.png";
import ERC2023 from "../ERC2023/ERC2023";
// import backImg from "../../../assets/images/Homepage/background.jpg";
// import backImg1 from "../../../assets/images/Homepage/backgroundlarge.jpeg";
import backgroundImage from "../../../assets/images/Competitions/backgroundImage.jpg"
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function erc() {

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
            <div className={styles.ercIntro}>
                <motion.div className={styles.imgggcontainer}   {...slideAnimation("left", 0.5)} >
                    <img className={styles.ERClogo} src={ERCLOGO}></img>
                </motion.div>
                <motion.p {...slideAnimation("right", 0.5)} className={styles.ercText}><span>The European Rover Challenge</span> is an international robotics competition, where academic teams from around the world present their mobile robot designs, competing in competitions based on real ESA and NASA missions. The competition takes place on the world’s largest artificial Martian track, that is directly derived from the surface of the Red Planet. Since 2021, the competition is held in both formulas: ON-SITE (teams compete with self-constructed robots on MarsYard in Poland) and REMOTE (competitors from several continents will remotely control the robot, physically moving along a track located in Poland, on the campus of the Kielce University of Technology).</motion.p>
            </div>

            <div className={styles.videoMain} {...slideAnimation("up", 0.5)}>
                <iframe
                    className={styles.vid}

                    src="https://www.youtube.com/embed/jXomN8zm4Zs?si=Kk4U4W4OAqUYUpYm" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
            
            {/* <motion.div className={styles.videoMain} {...slideAnimation("left", 0.3)}>
                <video className={styles.vid} src={ERCVIDEO} autoPlay loop ></video>
            </motion.div> */}

            {/* <ERC2023></ERC2023> */}
            <motion.div className={styles.The2023Container} style={{ backgroundImage: `url(${backgroundImage})` }}    {...slideAnimation("up", 0.5)}>
                <ERC2023></ERC2023>
            </motion.div>
        </>
    );
}
