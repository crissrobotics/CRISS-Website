import React, { useState } from 'react'
import styles from "./IRDC.module.scss";
import IRDCLOGO from "../../../assets/images/Competitions/OIP (1).jpeg";
import IRDC2023 from "../IRDC2023/IRDC2023";
import backImg from "../../../assets/images/Homepage/background.jpg";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function irdc(){
    return(
        <>
        <div className={styles.irdcIntro}>
            <motion.div   {...slideAnimation("left", 0.5)} >
                <div className={styles.img}>
                    <img className={styles.IRDClogo} src={IRDCLOGO}></img>
                </div>
            </motion.div>
            <motion.div   {...slideAnimation("right", 0.5)} >
                <p className={styles.irdcText}><span>The International Rover Design Challenge</span> is a competition for university students which challenges to design Mars rovers which shall be fully equipped and mission ready for Operation on Mars. Teams are supposed to carefully plan each subsystem of the rover considering various extra-terrestrial parameters in design. This competition is designed for students to explore their mind and spark the innovative design thinking of Individuals without putting any constraints on available physical resources. Students are encouraged to be as imaginative, creative and insightful as possible within practical implementable limits for the human race.</p>
            </motion.div>
        </div>

        <motion.div className={styles.videoMain} {...slideAnimation("left", 0.5)} >
            <p>VIDEO</p>
        </motion.div>

        <motion.div className={styles.The2023Container}  style={{ backgroundImage: `url(${backImg})` }} {...slideAnimation("up", 0.5)} >
                <IRDC2023></IRDC2023>
        </motion.div>
        </>
    );
}
