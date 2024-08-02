import React, { useState } from 'react'
import styles from "./IRC.module.scss";
import IRCLOGO from "../../../assets/images/Competitions/SPROS_IRC_logo 1.png";
import IRC2023 from "../IRC2023/IRC2023";
import backImg from "../../../assets/images/Homepage/background.jpg";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function irc(){
    return(
        <>
        <div className={styles.ircIntro}>
            <motion.div   {...slideAnimation("left", 0.5)} >
                <img className={styles.IRClogo} src={IRCLOGO}></img>
            </motion.div>
            <motion.div {...slideAnimation("right", 0.5)} >
                <p className={styles.ircText}><span>The International Rover Challenge</span> (formerly known as the Indian Rover Challenge), organized by the Space Robotics Society, is an annual robotics competition designed to provide students worldwide with an engineering challenge in the realm of space exploration. Distinguished as the sole competition of its kind in the Asia-Pacific region, the IRC serves the critical objective of fostering innovation and inspiring aspiring engineers. Participants are tasked with the mission of designing and constructing advanced Mars Rovers, with the ultimate goal of competing in simulated Martian conditions. This competition serves as a platform for college students to showcase their skills and ingenuity in the pursuit of advancing space exploration technologies.</p>
            </motion.div>
        </div>

        <motion.div className={styles.marquee} {...slideAnimation("left",0.3)}   >
            <p>Marquee(Photos bhej de saniddh)</p>
        </motion.div>  

        <motion.div className={styles.The2023Container}  style={{ backgroundImage: `url(${backImg})` }}  {...slideAnimation("up", 0.5)}  >
                <IRC2023></IRC2023>
        </motion.div>
        </>
    );
}
