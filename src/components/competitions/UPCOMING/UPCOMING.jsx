import React,{useState} from 'react';
import styles from "./upcoming.module.scss";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../Header/Motion/Motion";

export default function upcoming(){
    return(
        <motion.div className={styles.temp} {...slideAnimation("up", 0.5)}>
            
        </motion.div>
    )
}