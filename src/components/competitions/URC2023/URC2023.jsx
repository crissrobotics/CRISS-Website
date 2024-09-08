import React from "react";
import styles from  "../IRC2023/IRC2023.module.scss";
import aboutPic from "../../../assets/images/Competitions/URC23.jpg";

export default function URC2023() {

    return (
        <div className={styles.The2023Container}>
            <h2>URC<span>2023</span></h2>
            <div className={styles.details}>
                <div className={styles.imgContainer}><img src={aboutPic} width={500}></img></div>
                <p><span>Organized by The Mars Society</span>, the challenge tasks students with developing rovers capable of performing complex missions that astronauts would face on <span>Mars</span>. These missions typically include terrain traversal, equipment servicing, autonomous navigation, and scientific exploration such as soil analysis for signs of life.<span>URC</span> emphasizes practical engineering, innovation, and teamwork, allowing students to apply classroom knowledge in a competitive, real-world environment. </p> 
             </div>
        </div>
    )
}