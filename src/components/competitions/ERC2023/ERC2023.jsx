import React from "react";
import styles from  "../IRC2023/IRC2023.module.scss";
import aboutPic from "../../../assets/images/Homepage/about.jpeg";

export default function ERC2023() {

    return (
        <div className={styles.The2023Container}>
            <h2>ERC<span>2023</span></h2>
            <div className={styles.details}>
                <div className={styles.imgContainer}><img src={aboutPic}></img></div>
                <p>Our team had a remarkable showing at the International Rover Challenge (IRC), 2024, held in Coimbatore. With participation from over 22 international and national teams and more than 1200 participants, the competition was fierce. We proudly unveiled '<span>Eklavya</span>' , our latest creation, which surpassed teams from renowned institutions like IIT Bombay and IIT Roorkee. Our achievements include: Best Business Plan Award (<span>Space Entrepreneur Award</span>) 2nd position in Project Implementation and Management (<span>PIMA</span>) 10th Rank overall at the IRC.</p> 
             </div>
        </div>
    )
}