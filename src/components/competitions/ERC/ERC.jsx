import React, { useState } from 'react';
import styles from "./ERC.module.scss";
import ERCLOGO from "../../../assets/images/Competitions/ERC_Logo 1.png";
import ERC2023 from "../ERC2023/ERC2023";
import backImg from "../../../assets/images/Homepage/background.jpg";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function erc(){
    return(
        <>
        <div className={styles.ercIntro}>
            <motion.div   {...slideAnimation("left", 0.5)} >
                <img className={styles.ERClogo} src={ERCLOGO}></img>
            </motion.div>
            <motion.div {...slideAnimation("right", 0.5)} >
                <p className={styles.ercText}><span>The European Rover Challenge</span> is an international robotics competition, where academic teams from around the world present their mobile robot designs, competing in competitions based on real ESA and NASA missions. The competition takes place on the world’s largest artificial Martian track, that is directly derived from the surface of the Red Planet. Since 2021, the competition is held in both formulas: ON-SITE (teams compete with self-constructed robots on MarsYard in Poland) and REMOTE (competitors from several continents will remotely control the robot, physically moving along a track located in Poland, on the campus of the Kielce University of Technology).</p>
            </motion.div>
        </div>

        <motion.div className={styles.videoMain} {...slideAnimation("left", 0.3)}>
            <p>VIDEO</p>
        </motion.div>

        {/* <ERC2023></ERC2023> */}
        <motion.div className={styles.The2023Container}  style={{ backgroundImage: `url(${backImg})` }}    {...slideAnimation("up", 0.5)}>
                <ERC2023></ERC2023>
        </motion.div>
        </>
    );
}
