import React, { useState, useEffect } from 'react';
import styles from "./URC.module.scss";
import URCLOGO from "../../../assets/images/Competitions/logo-urc.jpg";
import URC2023 from "../../competitions/URC2023/URC2023";
// // import backImg from "../../../assets/images/Homepage/background.jpg";
// import backImg1 from "../../../assets/images/Homepage/backgroundlarge.jpeg";
import backgroundImage from "../../../assets/images/Competitions/backgroundImage.jpg"
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function urc() {

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
            <div className={styles.urcIntro}>
                <motion.div className={styles.imgggcontainer}    {...slideAnimation("left", 0.5)} >
                    <img className={styles.URClogo} src={URCLOGO}></img>
                </motion.div>

                <motion.p {...slideAnimation("right", 0.5)} className={styles.urcText}><span>The University Rover Challenge (URC)</span> is the world's premier robotics competition for college students.  Held annually in the desert of southern Utah in the United States, URC challenges student teams to design and build the next generation of <span>Mars rovers</span> that will one day work alongside astronauts exploring the Red Planet. Teams are evaluated on the rover’s design, functionality, and ability to navigate difficult terrains, collect samples, and perform autonomous tasks.</motion.p>
            </div>

            <div className={styles.videoMain} {...slideAnimation("up", 0.5)}>
                <iframe
                    className={styles.vid}

                    src="https://www.youtube.com/embed/gIik18I17i8?si=bntKgGhQpQnOOaTQ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>

            {/* <motion.div className={styles.videoMain} {...slideAnimation("left", 0.3)}>
                <video className={styles.vid} src={URCVIDEO} autoPlay loop ></video>
            </motion.div> */}

            <motion.div className={styles.The2023Container} style={{ backgroundImage: `url(${backgroundImage})` }}    {...slideAnimation("up", 0.5)}>
                <URC2023></URC2023>
            </motion.div>


        </>
    );
}