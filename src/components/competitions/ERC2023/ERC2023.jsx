import React from "react";
import styles from  "../IRC2023/IRC2023.module.scss";
import aboutPic from "../../../assets/images/Competitions/ERC23.jpg";

export default function ERC2023() {

    return (
        <div className={styles.The2023Container}>
            <h2>ERC<span>2023</span></h2>
            <div className={styles.details}>
                <div className={styles.imgContainer}><img src={aboutPic} width={500}></img></div>
                <p>The <span>European Rover Challenge (ERC)</span> is an annual international competition where university students and recent graduates design and build <span>Mars rovers</span>. It features both physical and remote challenges that mimic real Mars exploration missions. In the physical competition, teams bring their rovers to a <span>Mars-like environment</span> and complete tasks such as navigation, scientific research, and maintenance. The remote competition involves programming rovers to perform tasks autonomously while being controlled from afar.
 


</p> 
             </div>
        </div>
    )
}