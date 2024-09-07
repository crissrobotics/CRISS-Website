import React, { useState, useEffect } from 'react'
import styles from "./IRDC.module.scss";
import IRDCLOGO from "../../../assets/images/Competitions/OIP (1).jpeg";
import IRDC2023 from "../IRDC2023/IRDC2023";
// import backImg from "../../../assets/images/Homepage/background.jpg";
// import backImg1 from "../../../assets/images/Homepage/backgroundlarge.jpeg";
import backgroundImage from "../../../assets/images/Competitions/backgroundImage.jpg"
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function irdc() {

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
            <div className={styles.irdcIntro}>
                <motion.div className={styles.imgggcontainer}  {...slideAnimation("left", 0.5)} >
                    <img className={styles.IRDClogo} src={IRDCLOGO}></img>
                </motion.div>

                <motion.p {...slideAnimation("right", 0.5)} className={styles.irdcText}><span>The International Rover Design Challenge</span> is a competition for university students which challenges to design Mars rovers which shall be fully equipped and mission ready for Operation on Mars. Teams are supposed to carefully plan each subsystem of the rover considering various extra-terrestrial parameters in design. This competition is designed for students to explore their mind and spark the innovative design thinking of Individuals without putting any constraints on available physical resources. Students are encouraged to be as imaginative, creative and insightful as possible within practical implementable limits for the human race.</motion.p>
            </div>

            <div className={styles.videoMain} {...slideAnimation("up", 0.5)}>
                <iframe
                    className={styles.vid}

                    src="https://www.youtube.com/embed/5lDX1AC_Ryo?si=sFWz5EP3CNo5j1de" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
            
            {/* <motion.div className={styles.videoMain} {...slideAnimation("left", 0.5)} >
                <video className={styles.vid} src={IRDCVID} autoPlay muted loop></video>
            </motion.div> */}

            <motion.div className={styles.The2023Container} style={{ backgroundImage: `url(${backgroundImage})` }} {...slideAnimation("up", 0.5)} >
                <IRDC2023></IRDC2023>
            </motion.div>
        </>
    );
}
